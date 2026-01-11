// Company API

import { mockCompanies } from "@/mocks/companies";
import apiClient from "./client";
import type { Company, ApiResponse } from "@/types";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const companyApi = {
  // 회사 목록 조회
  getAll: (): Promise<ApiResponse<Company[]>> =>
    USE_MOCK
      ? Promise.resolve({ success: true, data: mockCompanies })
      : apiClient.get("/api/companies"),

  // 회사 상세 조회
  getById: (id: number) =>
    USE_MOCK
      ? Promise.resolve({
          success: true,
          data: mockCompanies.find((company) => company.id === id) || null,
        })
      : apiClient.get<ApiResponse<Company>>(`/api/companies/${id}`),

  // 회사 생성
  create: (data: Omit<Company, "id" | "createdAt" | "updatedAt">) =>
    apiClient.post<ApiResponse<Company>>("/api/companies", data),

  // 회사 수정
  update: (id: number, data: Partial<Company>) =>
    apiClient.put<ApiResponse<Company>>(`/api/companies/${id}`, data),

  // 회사 삭제
  delete: (id: number) =>
    apiClient.delete<ApiResponse<void>>(`/api/companies/${id}`),
};
