import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { axiosInstance } from "./services/fetcher";
import type { Job } from "./types/job";

// layouts and pages
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

export default function App() {
  // add new job
  const addJob = async (newJob: Omit<Job, "id">): Promise<void> => {
    //TODO: implement proper mutation handling with SWR (needed if addJob form and job listings are on same page)
    await axiosInstance.post("/jobs", newJob);
  };

  // delete job
  const deleteJob = async (id: string): Promise<void> => {
    await axiosInstance.delete(`/jobs/${id}`);
  };

  // update job
  const updateJob = async (updatedJob: Job) => {
    await axiosInstance.put(`/jobs/${updatedJob.id}`, updatedJob);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
