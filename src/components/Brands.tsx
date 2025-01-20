import Versace from "@/assets/images/brand1.png"
import Zara from "@/assets/images/brand2.png"
import Gucci from "@/assets/images/brand3.png"
import Prada from "@/assets/images/brand4.png"
import CalvinKlein from "@/assets/images/brand5.png"
const Brands = () => {
  return (
    <section className="bg-black mb-[72px]">
      <div className="container py-[42px] px-[100px]">
        <ul className="flex items-center justify-between max-lg:gap-4 max-md:flex-wrap max-md:gap-6 max-sm:flex-wrap max-sm:gap-[20px]">
          <li>
            <img src={Versace} alt="" />
          </li>
          <li>
            <img src={Zara} alt="" />
          </li>
          <li>
            <img src={Gucci} alt="" />
          </li>
          <li>
            <img src={Prada} alt="" />
          </li>
          <li>
            <img src={CalvinKlein} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}


export default Brands