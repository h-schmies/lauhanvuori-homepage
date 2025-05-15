import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10 bg-white rounded-full overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Lauhanvuori GeoPark Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">Lauhanvuori GeoPark</span>
            </div>
            <p className="text-green-100">
              From Mountains to Mires - Discover the natural wonders of South-Eastern Finland
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-green-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-green-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-green-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-green-300">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/transportation" className="hover:text-green-300">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="hover:text-green-300">
                  Accommodation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Activities</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/activities/hiking" className="hover:text-green-300">
                  Hiking
                </Link>
              </li>
              <li>
                <Link href="/activities/biking" className="hover:text-green-300">
                  Biking
                </Link>
              </li>
              <li>
                <Link href="/activities/skiing" className="hover:text-green-300">
                  Skiing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green-300" />
                <span>Lauhanvuorentie 645, 64900 Isojoki, Finland</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-300" />
                <span>+358 40 777 8888</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-300" />
                <span>info@lauhanvuorigeopark.fi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>© {new Date().getFullYear()} Lauhanvuori GeoPark. All rights reserved.</p>
          <p className="mt-2 text-sm">Lauhanvuori-Hämeenkangas UNESCO Global GeoPark</p>
        </div>
      </div>
    </footer>
  )
}
