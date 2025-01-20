import { useState } from "react";
import { Rating } from "@mui/material";

const Comments: React.FC = () => {
  const comments = [
    {
      id: "1",
      author: "Alice Johnson",
      text: "This is the best product I’ve ever used. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque. Highly recommended!",
      star: 5,
    },
    {
      id: "2",
      author: "Mark Smith",
      text: "Amazing quality and fast shipping. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque. Totally worth it!",
      star: 5,
    },
    {
      id: "3",
      author: "Sophia Davis",
      text: "Great experience! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque. I’m very happy with my purchase.",
      star: 5,
    },
    {
      id: "4",
      author: "James Brown",
      text: "Excellent product and customer service. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque. I will buy again.",
      star: 5,
    },
    {
      id: "5",
      author: "Emma Wilson",
      text: "Highly impressed with the quality of this product. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque.",
      star: 5,
    },
    {
      id: "6",
      author: "Oliver Taylor",
      text: "The product exceeded my expectations. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque. Fantastic experience.",
      star: 5,
    },
    {
      id: "7",
      author: "Liam Harris",
      text: "Great value for money! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque. Highly recommended.",
      star: 5,
    },
    {
      id: "8",
      author: "Mia Clark",
      text: "I’m thrilled with this product. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque. Totally worth it.",
      star: 5,
    },
    {
      id: "9",
      author: "William Miller",
      text: "Fast delivery and excellent quality. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla excepturi ipsum nihil quos reprehenderit obcaecati harum voluptate repudiandae. Omnis, atque. Very satisfied.",
      star: 5,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;

  const startIndex = (currentPage - 1) * commentsPerPage;
  const currentComments = comments.slice(startIndex, startIndex + commentsPerPage);

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="mb-[80px] mt-[80px]">
      <div className="container px-20">
        <h2 className="font-[700] text-[48px] leading-[57px] mb-[32px] text-center">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="grid p-15 grid-cols-3 max-sm:grid-cols-1 lg:grid-cols-3 max-md:grid-cols-2 gap-[20px]">
          {currentComments.map((comment) => (
            <div
              key={comment.id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <div className="flex items-center gap-[15px] mb-[16px]">
                <span className="font-[700] text-[16px] text-black">
                  {comment.author}
                </span>
              </div>
              <Rating
                name={`rating-${comment.id}`}
                value={comment.star}
                precision={0.5}
                readOnly
                className="mb-4"
              />
              <p className="text-[16px] text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[32px] gap-[15px]">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-white ${
              currentPage === 1 ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-white ${
              currentPage === totalPages ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comments;
