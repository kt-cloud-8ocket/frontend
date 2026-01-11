// Business API

import apiClient from "./client";
import type { Business, ApiResponse } from "@/types";

export const businessApi = {
  // 비즈니스 목록 조회
  getAll: () => apiClient.get<ApiResponse<Business[]>>("/api/businesses"),

  // 비즈니스 상세 조회
  getById: (id: number) =>
    apiClient.get<ApiResponse<Business>>(`/api/businesses/${id}`),

  // 서비스별 비즈니스 조회
  getByServiceId: (serviceId: number) =>
    apiClient.get<ApiResponse<Business>>(`/api/services/${serviceId}/business`),

  // 비즈니스 생성
  create: (data: Omit<Business, "id">) =>
    apiClient.post<ApiResponse<Business>>("/api/businesses", data),

  // 비즈니스 수정
  update: (id: number, data: Partial<Business>) =>
    apiClient.put<ApiResponse<Business>>(`/api/businesses/${id}`, data),

  // 비즈니스 삭제
  delete: (id: number) =>
    apiClient.delete<ApiResponse<void>>(`/api/businesses/${id}`),
};
