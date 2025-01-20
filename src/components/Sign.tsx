import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <section className="w-[100%] bg-black">
      <div className="w-full py-[10px] flex items-center justify-center gap-[20px]">
        <p className="text-white max-sm:text-center">
          Sign up and get 20% off your first order.{" "}
          <Link to={"/"} className="underline">
            Sign Up Now
          </Link>
        </p>
        <IoClose className="text-white absolute right-[20px] text-[20px] max-sm:hidden" />
      </div>
    </section>
  );
};

export default Sign;
