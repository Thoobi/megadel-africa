import { Link } from "react-router-dom";

import { training } from "../utils/util";

export default function TrainingSection() {
  return (
    <section
      className="flex flex-col items-center justify-center bg-no-repeat gap-[5rem] px-[1.5rem] py-[6rem] sm:p-[6rem] bg-cover xl:gap-[10rem] xl:p-[8rem]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(26, 30, 115, .7), rgba(26, 30, 115, .8)), url('/asset/training-bg.svg')",
      }}
    >
      <h2 className="font-semibold text-white capitalize text-[3rem] text-center">
        3 ways to be a part of our training
      </h2>

      <div className="flex flex-col items-stretch justify-center gap-[3rem] w-[90%] lg:flex-row xl:gap-[6rem]">
        {training.map((item) => (
          <div
            key={item.title}
            className={`flex flex-col items-center justify-between gap-[3rem] text-center text-custom-blue-500 text-[2.2rem] rounded-[1.5rem] p-[4rem] lg:gap-0 lg:h-[20rem] lg:w-[30%] lg:rounded-[.5rem] lg:p-[2rem] lg:text-[1.8rem]`}
            style={{ backgroundColor: `${item.bgColor}` }}
          >
            <img src={item.img} alt="card icon" />
            <p className="font-medium">{item.title}</p>
            <Link
              to={`/${item.link}`}
              className="flex items-center gap-[1.5rem]"
            >
              <img src={item.linkImage} alt="participant link icon" />
              <span className="capitalize inline-block">{item.link}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
