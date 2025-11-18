//TODO: remove | only here for reference during migration to SWR
import type { LoaderFunction } from "react-router-dom";
import type { Job } from "../types/job";

export const jobLoader: LoaderFunction = async ({ params }): Promise<Job> => {
  try {
    if (!params.id) {
      throw new Error("Job ID is required");
    }

    const res = await fetch(`/api/jobs/${params.id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch job. Status: ${res.status}`);
    }

    const data = await res.json();

    return data as Job;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to load job: ${error.message}`);
    }
    throw new Error("Failed to load job");
  }
};
