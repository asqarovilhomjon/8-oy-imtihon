
// import CountUp from "react-countup";
// import image from "@/assets/images/Vector.svg";
// import hero from "@/assets/images/hero-img.png";

// const Hero = () => {
//   return (
//     <section className="container flex flex-col md:flex-row gap-8 hero-section bg-[#F2F0F1] relative">
//       <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         1. <div className="flex flex-col my-[30px] gap-[20px] md:gap-[32px] px-6 md:px-12 text-center md:text-left">
//           <h2 className="font-integral font-[800] text-[34px] md:text-[40px] lg:text-[50px] leading-[42px] md:leading-[54px] lg:leading-[64px] max-w-[570px] mx-auto md:mx-0">
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h2>
//           <p className="font-[400] text-slate-400 text-[16px] leading-[22px] md:text-[14px] md:leading-[20px] max-w-[550px] mx-auto md:mx-0">
//             Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.
//           </p>
//           <button className="mt-4 mx-auto md:mx-0 transition-[.5s] hover:scale-[1.01] active:scale-[.98] rounded-[24px] text-white bg-black py-[10px] w-[210px]">
//             Shop now
//           </button>
//           <div className="flex flex-wrap gap-[32px] justify-center md:justify-start items-center mt-6">
//             <div className="flex flex-col items-center">
//               <p className="text-[36px] font-[700] leading-normal">
//                 <CountUp start={0} end={200} duration={3.5} />+
//               </p>
//               <p className="text-[16px] text-[#00000098] font-[400] leading-[22px]">
//                 International Brands
//               </p>
//             </div>
//             <div className="w-[1px] bg-gray-300 h-[50px] hidden md:block"></div>
//             <div className="flex flex-col items-center">
//               <p className="text-[36px] font-[700] leading-normal">
//                 <CountUp start={0} end={2000} duration={3.5} />+
//               </p>
//               <p className="text-[16px] text-[#00000098] font-[400] leading-[22px]">
//                 High-Quality Products
//               </p>
//             </div>
//             <div className="w-[1px] bg-gray-300 h-[50px] hidden md:block"></div>
//             <div className="flex flex-col items-center">
//               <p className="text-[36px] font-[700] leading-normal">
//                 <CountUp start={0} end={30000} duration={3.5} />+
//               </p>
//               <p className="text-[16px] text-[#00000098] font-[400] leading-[22px]">
//                 Happy Customers
//               </p>
//             </div>
//           </div>
//         </div>

//        2. <div className="container mb-9 max-w-[600px] overflow-hidden relative w-full flex justify-start items-center">
//           <img
//             src={image}
//             alt="Decorative Element"
//             className="absolute z-50 top-[50px] right-[50px] max-w-[60px] md:w-[104px] h-[72px] md:h-[104px]"
//           />
//           <img
//             src={hero}
//             alt="Hero Image"
//             className="absolute z-0 min-w-[1200px] h-[100%] top-8 left-[-600px] right-[-200px] overflow-hidden md:max-w-[450px] lg:max-w-[550px] object-contain"
//           />
//           <img
//             src={image}
//             alt="Decorative Element"
//             className="absolute  max-w-10 bottom-[200px] left-[30px] md:w-[104px] h-[72px] md:h-[104px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import CountUp from "react-countup";
import image from "@/assets/images/Vector.svg";
import hero from "@/assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="container flex flex-col md:flex-col lg:flex-row gap-8 hero-section bg-[#F2F0F1] relative">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col my-[30px] gap-[20px] md:gap-[32px] px-6 md:px-12 text-center lg:text-left">
          <h2 className="font-integral font-[800] text-[34px] md:text-[40px] lg:text-[50px] leading-[42px] md:leading-[54px] lg:leading-[64px] max-w-[570px] mx-auto lg:mx-0">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="font-[400] text-slate-400 text-[16px] leading-[22px] md:text-[14px] md:leading-[20px] max-w-[550px] mx-auto lg:mx-0">
            Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-4 mx-auto lg:mx-0 transition-[.5s] hover:scale-[1.01] active:scale-[.98] rounded-[24px] text-white bg-black py-[10px] w-[210px]">
            Shop now
          </button>
          <div className="flex flex-wrap gap-[32px] justify-center lg:justify-start items-center mt-6">
            <div className="flex flex-col items-center">
              <p className="text-[36px] font-[700] leading-normal">
                <CountUp start={0} end={200} duration={3.5} />+
              </p>
              <p className="text-[16px] text-[#00000098] font-[400] leading-[22px]">
                International Brands
              </p>
            </div>
            <div className="w-[1px] bg-gray-300 h-[50px] hidden lg:block"></div>
            <div className="flex flex-col items-center">
              <p className="text-[36px] font-[700] leading-normal">
                <CountUp start={0} end={2000} duration={3.5} />+
              </p>
              <p className="text-[16px] text-[#00000098] font-[400] leading-[22px]">
                High-Quality Products
              </p>
            </div>
            <div className="w-[1px] bg-gray-300 h-[50px] hidden lg:block"></div>
            <div className="flex flex-col items-center">
              <p className="text-[36px] font-[700] leading-normal">
                <CountUp start={0} end={30000} duration={3.5} />+
              </p>
              <p className="text-[16px] text-[#00000098] font-[400] leading-[22px]">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="container mb-9 max-w-[600px] overflow-hidden relative w-full flex justify-center items-center">
          <img
            src={image}
            alt="Decorative Element"
            className="absolute z-50 top-[50px] right-[50px] min-w-[60px] md:w-[104px] h-[72px] md:h-[104px]"
          />
          <img
            src={hero}
            alt="Hero Image"
            className=" absolute z-0 w-full min-w-[1150px] left-[-550px] h-auto md:max-w-[550px] object-contain"
          />
          <img
            src={image}
            alt="Decorative Element"
            className="absolute z-50 bottom-[200px] left-[30px] max-w-[50px] md:w-[104px] h-[72px] md:h-[104px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
