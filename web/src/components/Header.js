import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-50 flex items-center justify-between w-full h-auto py-6  wrapper">
      <Link className="text-brand" href="/">
        <h2 className="">Nick John</h2>
        <h2>Frontend Developer</h2>
      </Link>
      <nav className="flex gap-5 md:gap-10 text-nav">
        <Link href="/" className="">
          Index
        </Link>
        <Link href="/about" className="">
          About
        </Link>
      </nav>
    </header>
  );
}
