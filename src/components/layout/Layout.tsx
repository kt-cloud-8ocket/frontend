// 기본 레이아웃 컴포넌트

import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
