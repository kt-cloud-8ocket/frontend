// Story API

import apiClient from "./client";
import type { Story, ApiResponse } from "@/types";

export const storyApi = {
  // 스토리 목록 조회
  getAll: () => apiClient.get<ApiResponse<Story[]>>("/api/stories"),

  // 스토리 상세 조회
  getById: (id: number) =>
    apiClient.get<ApiResponse<Story>>(`/api/stories/${id}`),

  // 회사별 스토리 조회
  getByCompanyId: (companyId: number) =>
    apiClient.get<ApiResponse<Story>>(`/api/companies/${companyId}/story`),

  // 스토리 생성
  create: (data: Omit<Story, "id" | "createdAt" | "updatedAt">) =>
    apiClient.post<ApiResponse<Story>>("/api/stories", data),

  // 스토리 수정
  update: (id: number, data: Partial<Story>) =>
    apiClient.put<ApiResponse<Story>>(`/api/stories/${id}`, data),

  // 스토리 삭제
  delete: (id: number) =>
    apiClient.delete<ApiResponse<void>>(`/api/stories/${id}`),
};
