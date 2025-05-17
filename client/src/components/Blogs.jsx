import React from "react";
import { blogsData, sideBlogs } from "../assets/assets.js";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-black text-3xl sm:text-4xl font-bold mb-8 text-center">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Big Blog spanning two columns */}
       {blogsData.map(({ id, title, description, img, author, date, readTime, link }) => (
  <div
    key={id}
    className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
  >
    <img src={img} alt={title} className="w-full h-72 object-cover" />

    {/* Date and Read Time below image */}
    <div className="px-6 pt-3 text-sm text-gray-500 flex justify-between">
      <span>{date}</span>
      <span>{readTime}</span>
    </div>

    <div className="p-6 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="flex items-center space-x-4">
        <img
          src={author.photo}
          alt={author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-900 font-semibold">{author.name}</p>
          <p className="text-gray-600 text-sm">{author.position}</p>
        </div>

        <a
          href={link}
          className="ml-auto text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
))}

     {/* Smaller side blogs */}
<div className="flex flex-col gap-6 items-center">
  {sideBlogs.map(({ id, title, description, img, date, readTime, link }) => (
    <div
      key={id}
      className="bg-white rounded-md shadow-md overflow-hidden flex flex-col w-full max-w-sm"
    >
      {/* Image with rounded top corners and height */}
      <img
        src={img}
        alt={title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />

      {/* Date and Read time */}
      <div className="flex justify-between px-4 pt-4 text-sm text-gray-500 mb-4">
        <span>{date}. {readTime}</span>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-700 flex-grow mb-6">{description}</p>
        <a
          href={link}
          className="mt-auto self-start text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Blogs;
