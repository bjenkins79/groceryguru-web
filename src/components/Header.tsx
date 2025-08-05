import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[var(--color-primary-accent)] relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/images/Logo_GroceryGuru.svg"
            alt="GroceryGuru Logo"
            width={160}
            height={160}
            className="w-40 h-auto"
          />
        </Link>
      </div>
    </header>
  );
}