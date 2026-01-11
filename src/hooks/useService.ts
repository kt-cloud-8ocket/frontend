// Service 관련 커스텀 훅

import { useState, useEffect, useCallback } from "react";
import { serviceApi } from "@/api";
import type { Service } from "@/types";

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await serviceApi.getAll();
      setServices(response.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "서비스 목록을 불러오는데 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return { services, loading, error, refetch: fetchServices };
}

export function useService(id: number | null) {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchService = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const response = await serviceApi.getById(id);
      setService(response.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "서비스 정보를 불러오는데 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  return { service, loading, error, refetch: fetchService };
}

export function useServicesByCompany(companyId: number | null) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = useCallback(async () => {
    if (!companyId) return;
    setLoading(true);
    setError(null);
    try {
      const response = await serviceApi.getByCompanyId(companyId);
      setServices(response.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "서비스 목록을 불러오는데 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  }, [companyId]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return { services, loading, error, refetch: fetchServices };
}
