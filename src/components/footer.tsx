import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-primary py-8 text-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          {/* Column 1: Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex gap-2 mb-4">
              <img alt="Logo" src="/images/logo.png" className="size-8" />
              <span className="text-xl">SweetCreek Farm Market</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Short company description here...
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-100 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="inline-block hover:text-gray-300 transition-transform duration-300 hover:scale-x-110 will-change-transform"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:text-gray-300 transition-transform duration-300 hover:scale-x-105 will-change-transform"
                  href="/menu"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:text-gray-300 transition-transform duration-300 hover:scale-x-105 will-change-transform"
                  href="/cafe"
                >
                  Coffee
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:text-gray-300 transition-transform duration-300 hover:scale-x-105 will-change-transform"
                  href="/career"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div id="contact-info" className="col-span-1 scroll-mt-[4.5rem]">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-100 pb-2">
              Contact Us
            </h3>
            <address className="not-italic">
              <Link
                href="https://maps.google.com/?q=85+Meriwether+Rd,+Pike+Rd,+AL+36064"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-colors duration-200 hover:text-gray-300"
              >
                <div className="group-hover:text-gray-300 transition-all duration-300 will-change-transform hover:scale-x-105">
                  <p>85 Meriwether Rd</p>
                  <p>Pike Rd, AL 36064</p>
                </div>
                {/* Location Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="group-hover:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                  />
                </svg>
              </Link>
              <Link
                href="tel:+15551234567"
                className="inline-block mt-2 hover:underline transition-all duration-300 hover:scale-x-105 will-change-transform"
              >
                Phone: (555) 123-4567
              </Link>
            </address>
          </div>

          {/* Column 4: Hours & Social */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-100 pb-2">
              Hours
            </h3>
            <div className="mb-6">
              <p className="text-sm">Monday - Saturday: 9AM - 6PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Follow Us</h3>
              <div className="flex gap-4">
                {/* Facebook Icon */}
                <Link
                  href="https://www.facebook.com/SweetCreekFarmMarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                    />
                  </svg>
                </Link>

                {/* TripAdvisor Icon */}
                <Link
                  href="https://www.tripadvisor.com/your-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.91 178.82L576 127.58H471.66a326.11 326.11 0 0 0-367 0H0l47.09 51.24a143.911 143.911 0 0 0 194.77 211.91l46.14 50.2l46.11-50.17a143.94 143.94 0 0 0 241.77-105.58h-.03a143.56 143.56 0 0 0-46.94-106.36M144.06 382.57a97.39 97.39 0 1 1 97.39-97.39a97.39 97.39 0 0 1-97.39 97.39M288 282.37c0-64.09-46.62-119.08-108.09-142.59a281 281 0 0 1 216.17 0C334.61 163.3 288 218.29 288 282.37m143.88 100.2h-.01a97.405 97.405 0 1 1 .01 0M144.06 234.12h-.01a51.06 51.06 0 1 0 51.06 51.06v-.11a51 51 0 0 0-51.05-50.95m287.82 0a51.06 51.06 0 1 0 51.06 51.06a51.06 51.06 0 0 0-51.06-51.06"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 text-sm text-center">
          <p>
            © {new Date().getFullYear()} SweetCreek Farm Market. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
