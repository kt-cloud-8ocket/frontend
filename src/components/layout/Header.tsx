// 헤더 레이아웃 컴포넌트

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui";

export function Header() {
  const location = useLocation();

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

  return (
    <header className="sticky top-0 z-50 w-full h-[var(--header-height)] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-full items-center justify-between">
        {/* 로고 */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          <span>🚀8ocket</span>
        </Link>

        {/* 네비게이션 */}
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

        {/* CTA 버튼 */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/contact">문의하기</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/services">시작하기</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
