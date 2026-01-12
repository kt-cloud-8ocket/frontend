// 공통 타입 정의

export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

// Company 도메인
export interface Company extends BaseEntity {
  name: string;
  description: string;
  background: string;
  strengths: string;
  services?: Service[];
  workers?: Worker[];
}

// Service 도메인
export interface Service extends BaseEntity {
  name: string;
  problem: string;
  target: string;
  description: string;
  features: string;
  uniquePoints: string;
  companyId: number;
}

// Business 도메인
export interface Business {
  id: number;
  revenue: string;
  customers: string;
  scalability: string;
  serviceId: number;
}

// Story 도메인
export interface Story extends BaseEntity {
  discovery: string;
  idea: string;
  direction: string;
  message: string;
  companyId: number;
}

// Vision 도메인
export interface Vision {
  id: number;
  vision: string;
  mission: string;
  value: string;
  storyId: number;
}

// Worker 도메인
export interface Worker extends BaseEntity {
  name: string;
  role: string;
  field: string;
  description: string;
  companyId: number;
}

// FAQ 도메인
export interface FAQ {
  id: string;
  category: "service" | "consumer" | "business" | "data" | "partnership";
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  description: string;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  status: number;
}
