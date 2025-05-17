
import React from "react";
import { blogsData, sideBlogs } from "../assets/assets.js";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Main Heading with Description */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center text-green-800">
        Blog's
      </h1>
      <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        Explore in-depth articles and on trading strategies, market analysis, and psychological insights to
        enhance your trading journey .
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured Blog - Left side (8 columns) */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative">
              <img 
                src={blogsData[0].img} 
                alt={blogsData[0].title} 
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{blogsData[0].date}</span>
                <span>{blogsData[0].readTime} read</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {blogsData[0].title}
              </h2>
              
              <p className="text-gray-600 mb-6">
                {blogsData[0].description}
              </p>
              
              <div className="flex items-center mb-4">
                <img
                  src={blogsData[0].author.photo}
                  alt={blogsData[0].author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-gray-800 font-medium">{blogsData[0].author.name}</p>
                  <p className="text-gray-500 text-sm">{blogsData[0].author.position}</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <a
                  href={blogsData[0].link}
                  className="flex items-center text-green-700 hover:text-green-800 font-medium"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Side Blogs - Right side (4 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {sideBlogs.map((blog, index) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              
              <div className="p-5">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{blog.date}</span>
                  <span>{blog.readTime} read</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {blog.description}
                </p>
                
                <div className="flex justify-end">
                  <a
                    href={blog.link}
                    className="flex items-center text-green-700 hover:text-green-800 font-medium"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Blogs Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-6 rounded-md">
          More Blog's
        </button>
      </div>
    </div>
  );
};

export default Blogs;