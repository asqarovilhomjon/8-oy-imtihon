import Casual from "@/assets/images/casual.png";
import Formal from "@/assets/images/formal.png";
import Party from "@/assets/images/party.png";
import Gym from "@/assets/images/gym.png";

const Browse = () => {
  return (
    <div className="container">
      {" "}
      <section className="mx-4 mt-20 px-20 py-[4.375rem] bg-[#F0F0F0] rounded-3xl  dark:border">
        <div className="wrapper max-w-[45rem] lg:max-w-[90rem]">
          <div className="wrapper ">
            <h2 className="lg:text-5xl font-[800] md:text-4xl sm:text-4xl text-[30px] text-center font-integral">
              BROWSE BY DRESS STYLE
            </h2>
            <div className="grid lg:grid-cols-5 gap-4 mt-16">
              <div
                style={{ backgroundImage: `url(${Casual})` }}
                className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[18rem] col-span-3 lg:col-span-2"
              >
                <h3 className="text-4xl font-bold">Casual</h3>
              </div>
              <div
                style={{ backgroundImage: `url(${Formal})` }}
                className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[18rem] col-span-3"
              >
                <h3 className="text-4xl font-bold">Formal</h3>
              </div>
              <div
                style={{ backgroundImage: `url(${Party})` }}
                className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[18rem] col-span-3"
              >
                <h3 className="text-4xl font-bold">Party</h3>
              </div>
              <div
                style={{ backgroundImage: `url(${Gym})` }}
                className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[18rem]  col-span-3 lg:col-span-2"
              >
                <h3 className="text-4xl font-bold">Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Browse;
