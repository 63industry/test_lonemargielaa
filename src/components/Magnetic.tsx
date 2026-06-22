"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  style?: CSSProperties;
}

/** Wraps content and gently pulls it toward the cursor on hover. */
export function Magnetic({ children, className, strength = 0.4, style }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{ transition: "transform 0.35s cubic-bezier(0.33,1,0.68,1)", ...style }}
    >
      {children}
    </div>
  );
}
