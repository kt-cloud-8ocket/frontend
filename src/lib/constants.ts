// 상수 정의

export const APP_NAME = "8ocket";

export const ROUTES = {
  HOME: "/",
  COMPANIES: "/companies",
  COMPANY_DETAIL: "/companies/:id",
  SERVICES: "/services",
  SERVICE_DETAIL: "/services/:id",
  WORKERS: "/workers",
} as const;

export const API_ENDPOINTS = {
  COMPANIES: "/api/companies",
  SERVICES: "/api/services",
  BUSINESSES: "/api/businesses",
  STORIES: "/api/stories",
  VISIONS: "/api/visions",
  WORKERS: "/api/workers",
} as const;
