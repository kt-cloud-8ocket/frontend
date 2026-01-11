// 헤더 레이아웃 컴포넌트

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">8ocket</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/companies"
              className="transition-colors hover:text-foreground/80"
            >
              회사
            </Link>
            <Link
              to="/services"
              className="transition-colors hover:text-foreground/80"
            >
              서비스
            </Link>
            <Link
              to="/workers"
              className="transition-colors hover:text-foreground/80"
            >
              팀원
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
