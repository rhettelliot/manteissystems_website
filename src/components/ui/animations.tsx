"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { motion, useInView, useScroll, useSpring, useMotionValue, useTransform, useReducedMotion } from "motion/react";

// ─── Reduced-motion safe mount ────────────────────────────────────────────────
// Only renders children after mount — pairs with prefers-reduced-motion queries.
export function ClientOnly({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <>{mounted ? children : fallback}</>;
}

// ─── Deterministic-ish pseudo-random (stable server + client) ─────────────────
export function seededRandom(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

// ─── Magnetic wrapper — element gently follows cursor within radius ───────────
export function Magnetic({
  children,
  strength = 0.35,
  radius = 120,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 });
  const reduced = useReducedMotion();

  function onMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > radius) { x.set(0); y.set(0); return; }
    x.set(dx * strength);
    y.set(dy * strength);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Gradient animated text — uses background-clip for color shimmer ──────────
export function GradientText({
  children,
  className = "",
  from = "#0057FF",
  via = "#00D4A8",
  to = "#FF6EC7",
}: {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${from} 0%, ${via} 50%, ${to} 100%)`,
        backgroundSize: "200% 100%",
        animation: "gradient-shift 8s linear infinite",
      }}
    >
      {children}
    </span>
  );
}

// ─── Noise grain overlay — analog film feel ────────────────────────────────────
export function NoiseGrain({ opacity = 0.045 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[150] mix-blend-overlay"
      style={{ opacity }}
      aria-hidden
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="manteis-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#manteis-grain)" />
      </svg>
    </div>
  );
}

// ─── Live Pacific clock — ticking indicator, reinforces PNW positioning ──────
export function PacificClock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const parts = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false, timeZone: "America/Los_Angeles",
      }).formatToParts(d);
      const t = parts.filter(p => p.type !== "literal").map(p => p.value).join(":");
      setTime(t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={className} suppressHydrationWarning>
      {time || "--:--:--"}
    </span>
  );
}

// ─── Text reveal: word-by-word blur fade-in ───────────────────────────────────
export function TextReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = String(children).split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.5, delay: delay + i * 0.07, ease: "easeOut" }}
        >
          {word}{i < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Directional slide-in with blur ──────────────────────────────────────────
const slideInitial = {
  left:   { x: -70, y: 0,  opacity: 0, scale: 1,    filter: "blur(6px)" },
  right:  { x:  70, y: 0,  opacity: 0, scale: 1,    filter: "blur(6px)" },
  bottom: { x:   0, y: 60, opacity: 0, scale: 0.96, filter: "blur(4px)" },
};

export function SlideIn({
  children,
  from = "bottom",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "left" | "right" | "bottom";
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={slideInitial[from]}
      animate={inView ? { x: 0, y: 0, opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Scale + blur materialise ─────────────────────────────────────────────────
export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.88, y: 30, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Spring pop ───────────────────────────────────────────────────────────────
export function PopIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 220, damping: 14, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── RAF counter (count-up on enter) ─────────────────────────────────────────
export function Counter({
  to,
  suffix = "",
  decimals = 0,
  duration = 1600,
  delay = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now() + delay * 1000;
    let raf: number;
    const tick = (now: number) => {
      if (now < start) { raf = requestAnimationFrame(tick); return; }
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = (to * eased).toFixed(decimals);
      if (ref.current) ref.current.textContent = val + suffix;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, suffix, decimals, duration, delay]);

  return <span ref={ref}>0{suffix}</span>;
}

// ─── Scroll progress bar ──────────────────────────────────────────────────────
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[200] origin-left"
      style={{
        height: 2,
        scaleX,
        background: "linear-gradient(90deg, #0057FF, #00D4A8, #FF6EC7)",
      }}
    />
  );
}

// ─── Cursor glow (signal-blue) ────────────────────────────────────────────────
export function CursorGlow() {
  const x = useMotionValue(-800);
  const y = useMotionValue(-800);
  const springX = useSpring(x, { stiffness: 55, damping: 18 });
  const springY = useSpring(y, { stiffness: 55, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[100] rounded-full"
      style={{
        width: 480,
        height: 480,
        x: useTransform(springX, (v) => v - 240),
        y: useTransform(springY, (v) => v - 240),
        background:
          "radial-gradient(circle, rgba(0,87,255,0.08) 0%, rgba(0,87,255,0.03) 40%, transparent 70%)",
      }}
    />
  );
}
