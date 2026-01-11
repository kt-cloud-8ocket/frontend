// Worker API

import apiClient from "./client";
import type { Worker, ApiResponse } from "@/types";
import { mockWorkers } from "@/mocks/workers";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const workerApi = {
  // 워커 목록 조회
  getAll: (): Promise<ApiResponse<Worker[]>> =>
    USE_MOCK
      ? Promise.resolve({ success: true, data: mockWorkers })
      : apiClient.get("/api/workers"),

  // 회사별 워커 목록 조회
  getByCompanyId: (companyId: number) =>
    USE_MOCK
      ? Promise.resolve({
          success: true,
          data: mockWorkers.filter((w) => w.companyId === companyId),
        })
      : apiClient.get<ApiResponse<Worker[]>>(
          `/api/companies/${companyId}/workers`
        ),

  // 워커 상세 조회
  getById: (id: number) =>
    USE_MOCK
      ? Promise.resolve({
          success: true,
          data: mockWorkers.find((w) => w.id === id) || null,
        })
      : apiClient.get<ApiResponse<Worker>>(`/api/workers/${id}`),

  // 워커 생성
  create: (data: Omit<Worker, "id" | "createdAt" | "updatedAt">) =>
    apiClient.post<ApiResponse<Worker>>("/api/workers", data),

  // 워커 수정
  update: (id: number, data: Partial<Worker>) =>
    apiClient.put<ApiResponse<Worker>>(`/api/workers/${id}`, data),

  // 워커 삭제
  delete: (id: number) =>
    apiClient.delete<ApiResponse<void>>(`/api/workers/${id}`),
};
