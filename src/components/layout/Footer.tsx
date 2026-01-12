// 푸터 레이아웃 컴포넌트

import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    서비스: [
      { to: "/services", label: "서비스 소개" },
      { to: "/about", label: "회사 소개" },
    ],
    고객지원: [
      { to: "/contact", label: "문의하기" },
      { to: "/faq", label: "자주 묻는 질문" },
    ],
    법적고지: [
      { to: "/privacy", label: "개인정보처리방침" },
      { to: "/terms", label: "이용약관" },
    ],
  };

  return (
    <footer className="mt-auto border-t bg-muted/30">
      {/* 메인 푸터 */}
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-lg font-bold"
            >
              <span>🍱VendiChef</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              식사와 생산을 데이터로 연결하는 플랫폼
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>📧 contact@vendichef.com</p>
              <p>📞 02-1234-5678</p>
            </div>
          </div>

          {/* 링크 섹션들 */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-sm font-semibold">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 저작권 */}
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear}VendiChef. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors"
            >
              개인정보처리방침
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
