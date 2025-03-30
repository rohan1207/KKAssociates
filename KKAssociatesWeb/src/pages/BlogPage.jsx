import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("demo").select("*");
      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-40 to-gray-100 py-12 px-5 lg:px-20 mt-9">
      {/* Stylish Heading */}
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Explore Our Blogs
      </h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.ID}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] relative flex flex-col group"
            style={{ width: "100%", maxWidth: "350px", height: "232px" }} // Fixed card height
          >
            {/* Blog Title & Short Info */}
            <div className="p-4 flex-grow">
              <h2 className="text-lg font-semibold text-gray-900 truncate">
                {blog.TITLE}
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed line-clamp-3">
                {blog.SHORT_INFO}
              </p>
            </div>

            {/* Read More Button (Visible on Hover in Desktop, Always Visible in Mobile) */}
            <div className="flex justify-center pb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => navigate(`/blog/${blog.ID}`)}
                className="w-[95px] h-[38px] rounded-lg bg-[#2E1A55] text-white font-medium text-sm shadow-md hover:bg-[#3c2f55]"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
