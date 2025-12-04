import AddJobForm from "../features/jobs/components/AddJobForm";

export default function AddJobPage() {
  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <AddJobForm />
          </div>
        </div>
      </section>
    </>
  );
}
