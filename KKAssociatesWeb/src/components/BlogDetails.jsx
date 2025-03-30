import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("demo")
        .select("*")
        .eq("ID", id)
        .single();

      if (error) {
        console.error("Error fetching blog:", error);
      } else {
        setBlog(data);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-12 px-5 lg:px-0 bg-gray-50 mt-7">
      {/* Blog Container */}
      <div className="container mx-auto bg-white rounded-lg shadow-md p-8 max-w-3xl relative">
        {/* Back Button (Now Positioned at the Top-Left) */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-gray-200 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-300"
        >
          ← Back
        </button>

        {/* Blog Title and Info */}
        <h1 className="text-4xl font-bold text-gray-900 mt-10">{blog.TITLE}</h1>
        <p className="text-gray-500 mt-2">By {blog.AUTHOR}</p>
        <h2 className="text-xl text-gray-800 mt-4">{blog.SHORT_INFO}</h2>

        {/* Blog Content */}
        <div className="mt-8 prose prose-lg prose-blue max-w-full text-gray-800 leading-relaxed lg:text-lg md:text-md sm:text-base">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {blog.CONTENT}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
