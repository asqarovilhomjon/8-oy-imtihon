import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-[72px] md:text-[96px] font-bold text-black">404</h1>
      <p className="text-[20px] md:text-[48px] font-[700] text-black text-center">
        Not Found.
      </p>
      <Link
        to="/"
        className="mt-8 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
