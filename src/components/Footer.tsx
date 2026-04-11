export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-8">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Lyn Jung
        </p>
      </div>
    </footer>
  );
}
