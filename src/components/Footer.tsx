import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Bovine Strength Systems"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <span className="text-lg font-bold text-white">Bovine Strength Systems</span>
              </div>
            </Link>
            <p className="text-silver-dark text-sm max-w-md">
              Premium personal training in Monterey, CA. 6,000 sq ft of private gym space
              dedicated to helping you achieve your strength and fitness goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-silver-dark hover:text-silver transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-silver-dark hover:text-silver transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-silver-dark hover:text-silver transition-colors">
                  Programs & Rates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-silver-dark hover:text-silver transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-silver-dark text-sm">
              <li>
                <span className="block">524 Fremont Street</span>
                <span className="block">Monterey, CA 93940</span>
              </li>
              <li className="pt-2">
                <span className="block">Office: (831) 717-4291</span>
                <span className="block">Cell: (831) 277-4766</span>
              </li>
              <li className="pt-2">
                <span className="block">Mon-Fri: 5:30am - 6:30pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-silver-dark text-sm">
          <p>&copy; {new Date().getFullYear()} Bovine Strength Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
