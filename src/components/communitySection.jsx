export default function CommunitySection() {
  return (
    <section className="flex flex-col items-center justify-center bg-custom-blue-900 text-white gap-[3.5rem] py-[3rem] px-[1.5rem] xl:gap-[6rem] lg:p-[8rem]">
      <h2 className="capitalize font-semibold text-[2.5rem] lg:text-[3rem]">
        Join our amazing community
      </h2>
      <ul className="grid grid-cols-2 place-items-center border-t-[1px] border-b-[1px] py-[2rem] gap-[3rem] w-[80%] text-center lg:grid-cols-4">
        <li className="flex flex-col items-center justify-center gap-[.5rem]">
          <span className="font-semibold text-[3rem] lg:text-[4rem]">500+</span>
          <span className="font-light text-[1.5rem] lg:text-[1.2rem]">
            Business Owners trained
          </span>
        </li>
        <li className="flex flex-col items-center justify-center gap-[.5rem]">
          <span className="font-semibold text-[3rem] lg:text-[4rem]">5+</span>
          <span className="font-light text-[1.5rem] lg:text-[1.2rem]">
            Cities Impacted
          </span>
        </li>
        <li className="flex flex-col items-center justify-center gap-[.5rem]">
          <span className="font-semibold text-[3rem] lg:text-[4rem]">10+</span>
          <span className="font-light text-[1.5rem] lg:text-[1.2rem]">
            Implementation Partners
          </span>
        </li>
        <li className="flex flex-col items-center justify-center gap-[.5rem]">
          <span className="font-semibold text-[3rem] lg:text-[4rem]">100+</span>
          <span className="font-light text-[1.5rem] lg:text-[1.2rem]">
            Volunteer Team Members
          </span>
        </li>
      </ul>
      <button className="border-[1px] rounded-xl px-[3rem] py-[1.5rem]">
        Get Started
      </button>
    </section>
  );
}
