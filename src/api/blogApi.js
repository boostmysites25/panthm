const API_BASE_URL = "https://blogplatform-backend-cloudinary-tau.vercel.app";

/**
 * Fetch all published blogs
 * @returns {Promise<{success: boolean, blogs: Array, totalCount: number, currentPage: number, totalPages: number | null}>}
 */
export const fetchPublishedBlogs = async () => {
  const response = await fetch(`${API_BASE_URL}/api/blogs/published`);
  if (!response.ok) {
    throw new Error("Failed to fetch published blogs");
  }
  return response.json();
};

/**
 * Fetch a single blog by slug
 * @param {string} slug - The blog slug
 * @returns {Promise<{success: boolean, blog: Object}>}
 */
export const fetchBlogBySlug = async (slug) => {
  const response = await fetch(`${API_BASE_URL}/api/blogs/slug/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  return response.json();
};

