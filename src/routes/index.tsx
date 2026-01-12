// 라우터 설정

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import {
  HomePage,
  NotFoundPage,
  AboutPage,
  ContactPage,
  PrivacyPage,
  TermsPage,
  CompanyListPage,
  CompanyDetailPage,
  ServiceListPage,
  ServiceDetailPage,
} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "companies",
        children: [
          {
            index: true,
            element: <CompanyListPage />,
          },
          {
            path: ":id",
            element: <CompanyDetailPage />,
          },
        ],
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <ServiceListPage />,
          },
          {
            path: ":id",
            element: <ServiceDetailPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
