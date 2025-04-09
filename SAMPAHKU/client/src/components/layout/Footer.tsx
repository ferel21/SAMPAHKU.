import { Link } from "wouter";
import { Recycle, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const navigationLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Kategori Material", href: "#materials" },
  { name: "Cara Kerja", href: "#how-it-works" },
  { name: "Pabrik Mitra", href: "#buyers" },
  { name: "Tim Kami", href: "#team" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Kontak", href: "#contact" },
];

const materialLinks = [
  { name: "Plastik", href: "#" },
  { name: "Kaca", href: "#" },
  { name: "Logam", href: "#" },
  { name: "Kayu", href: "#" },
  { name: "Kertas & Kardus", href: "#" },
  { name: "Elektronik", href: "#" },
];

const contactInfo = [
  { icon: <MapPin className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />, text: "Jl. Daur Ulang No. 123, Jakarta Pusat, 10110" },
  { icon: <Phone className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />, text: "+62 21 1234 5678" },
  { icon: <Mail className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />, text: "info@sampahku.id" },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-7 w-7 text-yellow-400" />
              <span className="text-xl font-bold font-heading">SAMPAHKU</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Platform jual beli bahan daur ulang yang menghubungkan penjual dengan pabrik yang membutuhkan.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-neutral-300 hover:text-yellow-400 transition duration-300"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-neutral-300 hover:text-yellow-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Kategori Material</h4>
            <ul className="space-y-2">
              {materialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-neutral-300 hover:text-yellow-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Kontak</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-8 text-center sm:flex sm:justify-between">
          <p className="text-neutral-400 mb-4 sm:mb-0">© {new Date().getFullYear()} SAMPAHKU. Hak Cipta Dilindungi.</p>
          <div className="space-x-4">
            <a href="#" className="text-neutral-400 hover:text-yellow-400 transition duration-300">Syarat & Ketentuan</a>
            <a href="#" className="text-neutral-400 hover:text-yellow-400 transition duration-300">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
