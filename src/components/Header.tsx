import { AnimatePresence, motion } from "framer-motion";
import { Menu, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { slidePanel } from "../animations/variants";
import { img } from "../assets/assetUrls";
import { navItems } from "./siteData";
import { CyberButton } from "./ui/CyberButton";

function DesktopNav() {
  return (
    <nav
      className="hidden items-center justify-center gap-1 lg:flex"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation overlay"
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="mobile-panel"
            variants={slidePanel}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between">
              <img
                src={img.logo}
                alt="Aadhwan fortress"
                className="h-10 w-auto"
              />
              <button
                type="button"
                className="icon-button"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X size={22} />
              </button>
            </div>
            <nav
              className="mt-10 flex flex-col gap-3"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <CyberButton
              to="/contact"
              className="mt-8 w-full justify-center"
              onClick={onClose}
            >
              Book a Call
            </CyberButton>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="site-container">
          <div className="header-shell">
            <Link
              to="/"
              aria-label="Aadhwan fortress home"
              className="relative z-10 block"
            >
              <img
                src={img.logo}
                alt="Aadhwan fortress"
                className="h-10 w-auto"
              />
            </Link>
            <DesktopNav />
            <div className="flex items-center justify-end gap-3">
              <CyberButton
                to="/pricing"
                className="hidden !px-7 lg:inline-flex"
              >
                Get Started
              </CyberButton>
              <Link
                to="/contact"
                className="user-pill"
                aria-label="Contact account"
              >
                <UserRound size={18} />
              </Link>
              <button
                type="button"
                className="icon-button mobile-menu-trigger"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
