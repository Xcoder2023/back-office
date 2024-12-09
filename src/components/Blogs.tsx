import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
    });
    // Add API integration or submission logic here
    alert('Blog created successfully!');
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md ml-64">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-teal-100 rounded-[3px] p-4 outline-none"
            placeholder="Enter the blog title"
            required
          />
        </div>

        {/* Tags Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="tags">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border border-teal-100 rounded-[3px] p-4 outline-none"
            placeholder="e.g., health, education, outreach"
          />
        </div>

        {/* Content Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Content</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="h-64"
            placeholder="Write your blog content here..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 px-4 mt-10 rounded-[3px] outline-none"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;

