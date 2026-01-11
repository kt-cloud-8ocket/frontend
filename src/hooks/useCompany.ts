// Company 관련 커스텀 훅

import { useState, useEffect, useCallback } from "react";
import { companyApi } from "@/api";
import type { Company } from "@/types";

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCompanies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await companyApi.getAll();
      setCompanies(response.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "회사 목록을 불러오는데 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return { companies, loading, error, refetch: fetchCompanies };
}

export function useCompany(id: number | null) {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCompany = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const response = await companyApi.getById(id);
      setCompany(response.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "회사 정보를 불러오는데 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchCompany();
  }, [fetchCompany]);

  return { company, loading, error, refetch: fetchCompany };
}
