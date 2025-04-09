import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Recycle } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "/#home" },
  { name: "Kategori", href: "/#materials" },
  { name: "Cara Kerja", href: "/#how-it-works" },
  { name: "Pembeli", href: "/#buyers" },
  { name: "Tim Kami", href: "/#team" },
  { name: "Tentang Kami", href: "/#about" },
  { name: "Kontak", href: "/#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (location !== "/") {
      return;
    }
    
    const sectionId = href.split("#")[1];
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Recycle className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold font-heading text-primary">SAMPAHKU</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-neutral-800 hover:text-primary font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white px-6"
            >
              <a 
                href="#sell-material" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#sell-material");
                }}
              >
                Jual Barang
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-neutral-800 hover:text-primary font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-white w-full justify-center"
              >
                <a 
                  href="#sell-material" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#sell-material");
                  }}
                >
                  Jual Barang
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
