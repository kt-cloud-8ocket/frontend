// Vision API

import apiClient from "./client";
import type { Vision, ApiResponse } from "@/types";

export const visionApi = {
  // 비전 목록 조회
  getAll: () => apiClient.get<ApiResponse<Vision[]>>("/api/visions"),

  // 비전 상세 조회
  getById: (id: number) =>
    apiClient.get<ApiResponse<Vision>>(`/api/visions/${id}`),

  // 스토리별 비전 조회
  getByStoryId: (storyId: number) =>
    apiClient.get<ApiResponse<Vision>>(`/api/stories/${storyId}/vision`),

  // 비전 생성
  create: (data: Omit<Vision, "id">) =>
    apiClient.post<ApiResponse<Vision>>("/api/visions", data),

  // 비전 수정
  update: (id: number, data: Partial<Vision>) =>
    apiClient.put<ApiResponse<Vision>>(`/api/visions/${id}`, data),

  // 비전 삭제
  delete: (id: number) =>
    apiClient.delete<ApiResponse<void>>(`/api/visions/${id}`),
};
