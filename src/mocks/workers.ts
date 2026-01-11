import type { Worker } from "@/types";

export const mockWorkers: Worker[] = [
  {
    id: 1,
    name: "홍길동",
    role: "CEO",
    field: "경영",
    description: "창업자이자 대표",
    companyId: 1,
    createdAt: "2024-01-01T00:00:00",
    updatedAt: "2024-01-01T00:00:00",
  },
  {
    id: 2,
    name: "김개발",
    role: "CTO",
    field: "개발",
    description: "기술 총괄",
    companyId: 1,
    createdAt: "2024-01-01T00:00:00",
    updatedAt: "2024-01-01T00:00:00",
  },
];
