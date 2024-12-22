import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Whitepaper", href: "#whitepaper" },
    { label: "Mayors", href: "#mayors" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Mint", href: "#mint" },
    { label: "Itinerary", href: "#itinerary" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,15,0.95)] backdrop-blur-lg border-b border-[var(--text-secondary)]/20">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-semibold text-[var(--text)]">
          {/* Logo text removed */}
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-[var(--text)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[rgba(10,10,15,0.95)] backdrop-blur-lg border-b border-[var(--text-secondary)]/20">
          <div className="container-padding py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;