import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-primary grid grid-rows-2 grid-cols-1 gap-4 py-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-4 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M528.91 178.82L576 127.58H471.66a326.11 326.11 0 0 0-367 0H0l47.09 51.24a143.911 143.911 0 0 0 194.77 211.91l46.14 50.2l46.11-50.17a143.94 143.94 0 0 0 241.77-105.58h-.03a143.56 143.56 0 0 0-46.94-106.36M144.06 382.57a97.39 97.39 0 1 1 97.39-97.39a97.39 97.39 0 0 1-97.39 97.39M288 282.37c0-64.09-46.62-119.08-108.09-142.59a281 281 0 0 1 216.17 0C334.61 163.3 288 218.29 288 282.37m143.88 100.2h-.01a97.405 97.405 0 1 1 .01 0M144.06 234.12h-.01a51.06 51.06 0 1 0 51.06 51.06v-.11a51 51 0 0 0-51.05-50.95m287.82 0a51.06 51.06 0 1 0 51.06 51.06a51.06 51.06 0 0 0-51.06-51.06"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link href="/" className="flex gap-2">
          <img
            alt="Sweet Creek Farm MarketLogo"
            src="/images/logo.png"
            className="size-12"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Sweet Creek Farm Market
          </span>
        </Link>
        <p className="max-w-xs">Your Local Shop</p>
        <div className="flex flex-row justify-center text-sm text-foreground gap-1">
          <span>© 2024 </span>
          <Link href="/" className="cursor-pointer">
            Sweet Creek Farm Market
          </Link>
          <span>, All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
