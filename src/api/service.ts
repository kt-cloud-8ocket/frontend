// Service API

import apiClient from "./client";
import type { Service, ApiResponse } from "@/types";
import { mockServices } from "@/mocks/services";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const serviceApi = {
  // 서비스 목록 조회
  getAll: (): Promise<ApiResponse<Service[]>> =>
    USE_MOCK
      ? Promise.resolve({ success: true, data: mockServices })
      : apiClient.get("/api/services"),

  // 회사별 서비스 목록 조회
  getByCompanyId: (companyId: number) =>
    USE_MOCK
      ? Promise.resolve({
          success: true,
          data: mockServices.filter(
            (service) => service.companyId === companyId
          ),
        })
      : apiClient.get<ApiResponse<Service[]>>(
          `/api/companies/${companyId}/services`
        ),

  // 서비스 상세 조회
  getById: (id: number) =>
    USE_MOCK
      ? Promise.resolve({
          success: true,
          data: mockServices.find((service) => service.id === id) || null,
        })
      : apiClient.get<ApiResponse<Service>>(`/api/services/${id}`),

  // 서비스 생성
  create: (data: Omit<Service, "id" | "createdAt" | "updatedAt">) =>
    apiClient.post<ApiResponse<Service>>("/api/services", data),

  // 서비스 수정
  update: (id: number, data: Partial<Service>) =>
    apiClient.put<ApiResponse<Service>>(`/api/services/${id}`, data),

  // 서비스 삭제
  delete: (id: number) =>
    apiClient.delete<ApiResponse<void>>(`/api/services/${id}`),
};
