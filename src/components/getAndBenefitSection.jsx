import { benefits } from "../utils/util";
import Carousel from "../Carousel";
import benefitImg from "../asset/benefit-bg.svg";
import { Link } from "react-router-dom";

export default function GetAndBenefits() {
  return (
    <section
      className="flex flex-col gap-4 items-center justify-center bg-custom-blue-500 text-white px-12 py-24 sm:p-12 xl:p-32"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 47, 99, 0.7), rgba(10, 47, 99, 0.8)), url(${benefitImg})`,
      }}
    >
      <h2 className="font-semibold text-32 leading-none">
        What You Will Get And Its Benefits
      </h2>
      <p className="font-semibold text-24">
        Your Path to Success: The Megadel Africa Advantage
      </p>

      <p className="text-16 font-normal mb-10">Benefits</p>

      <div className="block w-4/5 xl:hidden">
        <Carousel>
          {benefits.map((benefit) => (
            <figure
              className="flex flex-col items-start justify-center gap-8 bg-white text-custom-blue-500 rounded-[1rem] h-full p-8"
              key={benefit.title}
            >
              <img
                src={benefit.img}
                alt="benefits image"
                width={70}
                height={70}
              />
              <h3 className="font-semibold text-22">{benefit.title}</h3>
              <p>{benefit.content}</p>
            </figure>
          ))}
        </Carousel>
      </div>

      <div className="hidden xl:grid xl:grid-cols-3 xl:gap-6">
        {benefits.map((benefit) => (
          <figure
            className="flex flex-col items-start justify-center gap-4 bg-white text-custom-blue-500 rounded-2xl xl:px-8 xl:py-12"
            key={benefit.title}
          >
            <img
              src={benefit.img}
              alt="benefits image"
              width={70}
              height={70}
            />
            <h3 className="font-semibold xl:text-24">{benefit.title}</h3>
            <p className="text-16">{benefit.content}</p>
          </figure>
        ))}
      </div>

      <Link className="bg-custom-blue-100 text-white text-16 font-medium px-10 py-5 mt-8 rounded-lg">
        Get Started Today
      </Link>
    </section>
  );
}
