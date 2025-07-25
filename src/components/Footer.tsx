export default function Footer() {
  return (
    <footer className="bg-[var(--color-light-background)] border-t border-[var(--color-primary)] border-opacity-10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">
        {/* Links */}
        <div className="flex space-x-8">
          <a
            href="mailto:support@getgroceryguru.com"
            className="text-[var(--color-primary)] opacity-70 hover:opacity-100 transition-opacity text-base font-medium"
          >
            Support
          </a>
          <a
            href="/privacy"
            className="text-[var(--color-primary)] opacity-70 hover:opacity-100 transition-opacity text-base font-medium"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-[var(--color-primary)] opacity-70 hover:opacity-100 transition-opacity text-base font-medium"
          >
            Terms
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[var(--color-primary)] opacity-50 text-sm">
          © {new Date().getFullYear()} GroceryGuru. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
