import JobDetailsPage from "@/components/JobDetailsPage";
import { fetchJobDetails, fetchJobs } from "@/lib/api/jobs";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const result = await fetchJobs(1, 1000);
    const jobs = Array.isArray(result) ? result : result?.data || [];
    const params = jobs
      .filter((job) => job?._id || job?.id)
      .map((job) => ({ id: String(job._id || job.id) }));

    return params.length > 0 ? params : [{ id: "static-placeholder" }];
  } catch (error) {
    console.error("Error generating job paths:", error);
    return [{ id: "static-placeholder" }];
  }
}

export default async function Page({ params }) {
  const { id } = await params;
  let initialJob = null;
  let error = null;

  try {
    initialJob = await fetchJobDetails(id, { next: { revalidate: 60 } });
  } catch (err) {
    console.error(err);
    error = "Failed to load job details. Please try again later.";
  }

  return <JobDetailsPage initialJob={initialJob} initialError={error} />;
}
