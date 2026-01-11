// Service API

import apiClient from "./client";
import type { Service, ApiResponse } from "@/types";

export const serviceApi = {
  // 서비스 목록 조회
  getAll: () => apiClient.get<ApiResponse<Service[]>>("/api/services"),

  // 회사별 서비스 목록 조회
  getByCompanyId: (companyId: number) =>
    apiClient.get<ApiResponse<Service[]>>(
      `/api/companies/${companyId}/services`
    ),

  // 서비스 상세 조회
  getById: (id: number) =>
    apiClient.get<ApiResponse<Service>>(`/api/services/${id}`),

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
