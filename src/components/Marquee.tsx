interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative flex w-full overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl uppercase tracking-tight text-foreground/90 sm:text-4xl">
              {item}
            </span>
            <span className="text-acid text-2xl sm:text-4xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
