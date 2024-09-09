import React from "react";
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import fs from "fs";
import matter from 'gray-matter';//converts md files into objects

const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})

// Sample blog data
// const blogs = [
//   {
//     title: "First Blog",
//     description: "This is the description for the first blog.",
//     slug: "first-blog",
//     date: "2023-10-01",
//     author: "Author One",
//     image: "/typescript.webp"
//   },
//   {
//     title: "Second Blog",
//     description: "This is the description for the second blog.",
//     slug: "second-blog",
//     date: "2023-10-02",
//     author: "Author Two",
//     image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//   },
//   {
//     title: "Third Blog",
//     description: "This is the description for the third blog.",
//     slug: "third-blog",
//     date: "2023-10-03",
//     author: "Author Three",
//     image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
//   },
//   // Add more blog objects as needed
// ];

const Blog = () => {
  return (
    <div className="container  mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="  shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="dark:text-gray-300 mb-4">{blog.description}</p>
              <p className="dark:text-gray-300 text-sm mb-4">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
             

              <Link  href={`/blogpost/${blog.slug}`}className={buttonVariants({ variant: "outline" })}>Click here</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
