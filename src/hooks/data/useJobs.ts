import useSWR from "swr";
import { axiosInstance } from "../../services/fetcher";
import type { Job } from "../../types/job";

// Fetch all jobs
export function useFetchJobs(params?: { limit?: number }) {
  const query = params?.limit ? `?_limit=${params.limit}` : "";
  return useSWR<Job[]>(`/jobs${query}`);
}

// Fetch single job
export function useFetchJob(id?: string) {
  return useSWR<Job>(id ? `/jobs/${id}` : null);
}

// Add job
export function useAddJob() {
  return async (newJob: Omit<Job, "id">) => {
    await axiosInstance.post("/jobs", newJob);
    // Optionally trigger SWR revalidation here
  };
}

// Delete job
export function useDeleteJob() {
  return async (id: string) => {
    await axiosInstance.delete(`/jobs/${id}`);
    // Optionally trigger SWR revalidation here
  };
}

// Update job
export function useUpdateJob() {
  return async (updatedJob: Job) => {
    await axiosInstance.put(`/jobs/${updatedJob.id}`, updatedJob);
    // Optionally trigger SWR revalidation here
  };
}
