import Hero from "../components/common/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/jobs/JobListings";
import ViewAllJobs from "../components/jobs/ViewAllJobs";

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
