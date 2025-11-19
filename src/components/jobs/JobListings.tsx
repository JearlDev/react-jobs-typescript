import { useFetchJobs } from "../../hooks/data/useJobs";

import JobListing from "./JobListing";
import Spinner from "../common/Spinner";
import type { Job } from "../../types/job";

export default function JobListings({ isHome = false }: { isHome?: boolean }) {
  const { data, isLoading } = useFetchJobs(isHome ? { limit: 3 } : undefined);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Latest Job Listings" : "All Job Listings"}
        </h2>

        {isLoading && <Spinner loading={isLoading} />}

        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data?.map((job: Job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
