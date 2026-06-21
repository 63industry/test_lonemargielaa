export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8">
        <p className="font-display text-2xl uppercase tracking-tight">
          LONEMARGIELAA
        </p>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} — Urban Visuals / Paris
        </p>
      </div>
    </footer>
  );
}
