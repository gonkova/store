import React from "react";
import Button from "./Button";

export default function SectionBlog() {
  const posts = [
    {
      imageSrc: "images/blog-item.png",
      date: "07 July 2020",
      title: "Types of Blouse In Catalog fashion",
      description:
        "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    },
    {
      imageSrc: "images/blog-item-1.png",
      date: "20 Mar 2022",
      title: "Types of Blouse In Catalog fashion",
      description:
        "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    },
    {
      imageSrc: "images/blog-item-2.png",
      date: "07 Jun 2024",
      title: "Types of Blouse In Catalog fashion",
      description:
        "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    },
  ];

  return (
    <div className="py-2 mx-auto md:px-10 w-full max-w-7xl ">
      <div className="flex flex-col md:flex-row items-center justify-between px-14 mt-16">
        <div>
          <h2 className="text-4xl font-bold mb-4">Read our blog</h2>
          <p className="text-base text-lightGray">
            Check our latest article to get meaningfull content or tips for
            shopping
          </p>
        </div>
        <Button className="bg-transparent text-base hover:bg-purple ">
          More on blogs
        </Button>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-6 px-12 mt-14 mb-14">
        {posts.map((p, index) => (
          <div key={index} className=" mx-auto flex flex-col gap-5">
            <img
              src={p.imageSrc}
              alt=""
              className="w-[350px] h-[200px] rounded-lg mx-auto  object-cover cursor-pointer "
            />
            <p className="text-secondary text-sm">{p.date}</p>
            <h2 className="text-lg font-bold ">
              {p.title}
            </h2>
            <p className="text-lightGray text-sm">
               {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}