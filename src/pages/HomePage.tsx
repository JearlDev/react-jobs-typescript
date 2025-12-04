import Hero from "../components/common/Hero";
import HomeCards from "../components/home/HomeCards";
import JobListings from "../features/jobs/components/JobListings";
import ViewAllJobs from "../components/home/ViewAllJobs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
}
