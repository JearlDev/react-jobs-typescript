import type { LoaderFunction } from "react-router-dom";
import type { Job } from "../types/job";

export const jobLoader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data as Job;
};
