import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch blogs from Supabase
  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("blogs").select("*");

      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data);
      }
    };

    fetchBlogs();
  }, []);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedBlog]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-40 to-gray-100 py-12 px-5 lg:px-20 mt-9 relative">
      {/* Stylish Heading */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          Explore Our Blogs
        </span>
      </h1>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id} // Change from blog.ID to blog.id
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] group relative"
            style={{ height: "320px" }}
          >
            <div className="p-6 pb-16 relative h-full flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-900">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed line-clamp-3 flex-grow">
                {blog.short_info} 
              </p>

              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="bg-[#2E1A55] text-white py-2 px-5 rounded-full hover:bg-[#4A277D] transition-all shadow-md"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Popup Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col">
            <div className="p-8 overflow-y-auto flex-grow">
              <h1 className="text-3xl font-bold text-gray-900">
                {selectedBlog.title} 
              </h1>
              <h2 className="text-xl text-gray-800 mt-2">
                {selectedBlog.short_info} 
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                By {selectedBlog.author}
              
              </p>
              <div className="mt-4 prose prose-lg prose-blue max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {selectedBlog.content} 
                </ReactMarkdown>
              </div>
            </div>

            {/* Close Button */}
            <div className="p-5 border-t flex justify-end bg-gray-100">
              <button
                onClick={() => setSelectedBlog(null)}
                className="
    bg-red-500 text-white rounded-full hover:bg-red-600 transition-all
    h-[36px] w-[58px] text-center mr-[117px]
  "
              >
                <p className="text-lg leading-[0.75rem]">Close</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
