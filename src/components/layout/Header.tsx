// 헤더 레이아웃 컴포넌트

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const navLinks = [
    { to: "/", label: "홈" },
    { to: "/about", label: "회사소개" },
    { to: "/services", label: "서비스" },
    { to: "/contact", label: "문의하기" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[var(--header-height)] items-center justify-between">
        {/* 로고 */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          onClick={closeMenu}
        >
          <Leaf className="w-6 h-6" />
          <span>VendiChef</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 데스크톱 CTA 버튼 */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/contact">문의하기</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/services">시작하기</Link>
          </Button>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 열기"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact" onClick={closeMenu}>
                  문의하기
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/services" onClick={closeMenu}>
                  시작하기
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
