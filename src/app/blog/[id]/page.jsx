import BlogPage from "@/components/Blog/BlogPage";
import {
  fetchBlogById,
  fetchLatestBlogs,
  fetchPreviousBlogs,
} from "@/lib/api/blogs";
import { fetchAllBlogs } from "@/lib/api/blogs";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const result = await fetchAllBlogs(1, 1000);
    const posts = Array.isArray(result?.data) ? result.data : [];
    const params = posts
      .filter((post) => post?._id)
      .map((post) => ({ id: String(post._id) }));

    return params.length > 0 ? params : [{ id: "static-placeholder" }];
  } catch (error) {
    console.error("Error generating blog paths:", error);
    return [{ id: "static-placeholder" }];
  }
}

export default async function Page({ params }) {
  const { id } = await params;
  let initialData = {
    post: null,
    featuredPosts: [],
    pastPosts: [],
    error: null,
  };

  try {
    const postResult = await fetchBlogById(id, { next: { revalidate: 60 } });
    initialData.post = postResult.data;

    const featuredResult = await fetchLatestBlogs({ next: { revalidate: 60 } });
    const featuredData = featuredResult.data || [];
    initialData.featuredPosts = featuredData.filter((p) => p._id !== id);

    const pastResult = await fetchPreviousBlogs(id, {
      next: { revalidate: 60 },
    });
    initialData.pastPosts = pastResult.data || [];
  } catch (err) {
    console.error(err);
    initialData.error = "Failed to load blog post. Please try again later.";
  }

  return <BlogPage initialData={initialData} />;
}
