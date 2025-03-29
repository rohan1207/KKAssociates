import React, { useState } from "react";
import supabase from "../supabaseClient";

export default function AdminBlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [shortInfo, setShortInfo] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("blogs")
        .insert([{ title, author, short_info: shortInfo, content }]);

      if (error) {
        console.error("Supabase Error:", error.message);
        throw error;
      }

      alert("Blog added successfully!");
      setTitle("");
      setAuthor("");
      setShortInfo("");
      setContent("");
    } catch (error) {
      console.error("Error adding blog:", error.message, error);
      alert("Failed to add blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Add a New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Short Info"
            value={shortInfo}
            onChange={(e) => setShortInfo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-40"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Add Blog"}
          </button>
        </form>
           
      </div>
    </div>
  );
}
