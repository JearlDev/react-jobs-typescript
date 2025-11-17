import type { LoaderFunction } from "react-router-dom";
import type { Job } from "../types/job";

export const jobsLoader: LoaderFunction = async ({
  request,
}): Promise<Job[]> => {
  const url = new URL(request.url);
  const isHome = url.searchParams.get("isHome") === "true";
  const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";

  try {
    const res = await fetch(apiUrl);
    //TODO: use unknown type with ZOD validation (maybe use .then syntax)
    const data = await res.json();

    return data as Job[];
  } catch {
    throw new Error("Failed to fetch jobs");
  }
};
