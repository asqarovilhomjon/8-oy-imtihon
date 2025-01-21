import { Product } from "../types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import YouTube from "./Loading";

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    "https://6787c574c4a42c9161082cce.mockapi.io/products"
  );
  return response.data;
};

const Selling: React.FC = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="mx-auto">
        <YouTube />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Something went wrong while fetching products.
      </div>
    );
  }

  // Limit products to the first 4
  const topProducts = products?.slice(0, 4);

  return (
    <section className="container px-20 mb-[80px]">
      <div className="container">
        <h2 className="font-[700] uppercase text-[32px] sm:text-[50px] leading-[57px] sm:leading-[57px] mb-[50px] sm:mb-[35px] text-center">
          Top Selling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[30px]">
          {topProducts?.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.urls[0]}
                alt={product.title}
                className="w-full h-[200px] sm:h-[300px] object-cover rounded-t-lg mb-4 cursor-pointer"
                onClick={() => navigate(`/detail/${product.id}`)}
              />
              <h3 className="font-[700] text-[18px] sm:text-[20px] leading-[22px] sm:leading-[27px] mb-2 text-center">
                {product.title}
              </h3>
              <p className="text-[14px] sm:text-[16px] text-gray-600 mb-1 text-center">
                {product.size}
              </p>
              <Rating
                name={`rating-${product.id}`}
                value={product.star}
                precision={0.5}
                readOnly
                className="mb-4"
              />
              <p className="font-[700] text-[16px] sm:text-[18px] text-black text-center">
                {product.price} $
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Selling;
