export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-10">
        <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest text-right">
          &copy; {new Date().getFullYear()} Lyn Jung
        </p>
      </div>
    </footer>
  );
}
