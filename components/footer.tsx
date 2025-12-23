export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10 px-6 text-center">
      <p className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} Theerach. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}