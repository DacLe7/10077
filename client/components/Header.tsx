import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import Cart from "./Cart";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();
  
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium relative overflow-hidden">
        <div className="animate-pulse">
          Miễn Phí Giao Hàng Toàn Quốc - Đơn Hàng Từ 500K
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* <a
                href="#nen-thom"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Nến Thơm
              </a> */}
              <a
                href="#phu-kien"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Phụ Kiện
              </a>
              <a
                href="#bo-qua-tang"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Bộ Quà Tặng
              </a>
              <a
                href="#huong-dan"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Hướng Dẫn
              </a>
            </nav>

            {/* Logo - Center */}
            <div className="flex-shrink-0">
              <img 
                src="/data/logo/LOGO SAAS.png" 
                alt="Saas Logo" 
                className="h-8 w-auto"
              />
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#ve-chung-toi"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Về Chúng Tôi
              </a>
              <a
                href="#lien-he"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Liên Hệ
              </a>
              <button className="text-foreground hover:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button 
                className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-2">
              {/* <a
                href="#nen-thom"
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Nến Thơm
              </a> */}
              <a
                href="#phu-kien"
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Phụ Kiện
              </a>
              <a
                href="#bo-qua-tang"
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Bộ Quà Tặng
              </a>
              <a
                href="#huong-dan"
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Hướng Dẫn
              </a>
              <a
                href="#ve-chung-toi"
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Về Chúng Tôi
              </a>
              <a
                href="#lien-he"
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Liên Hệ
              </a>
              <div className="flex items-center space-x-4 py-2">
                <button className="text-foreground hover:text-primary transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <button 
                  className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 relative"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
