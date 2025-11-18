import useSWR from "swr";
import type { Job } from "../types/job";

export function useJobs(params?: { limit?: number }) {
  const query = params?.limit ? `?_limit=${params.limit}` : "";
  return useSWR<Job[]>(`/jobs${query}`);
}

export function useJob(id?: string) {
  return useSWR<Job>(id ? `/jobs/${id}` : null);
}
