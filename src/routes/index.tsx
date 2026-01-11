// 라우터 설정

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import {
  HomePage,
  NotFoundPage,
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
