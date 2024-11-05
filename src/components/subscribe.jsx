export default function Subscribe() {
  return (
    <section className="flex flex-col items-stretch text-center justify-center text-custom-blue-500 p-[3rem] gap-[1rem] sm:p-[4rem] lg:items-center xl:p-[8rem]">
      <h2 className="font-medium text-[3rem]">
        Stay up to date with Megadel Africa
      </h2>
      <p className="font-medium lg:mb-[2rem] text-[1.8rem]">
        Subscribe to our newsletter for latest news, projects and updates
      </p>
      <form
        action=""
        method="POST"
        className="flex flex-col items-stretch rounded-xl gap-[2rem] mt-[1rem] lg:mt-0 lg:flex-row lg:border-[2px]"
      >
        <input
          type="text"
          name="text"
          placeholder="We saved a nice spot for your email"
          className="py-[1.5rem] px-[3rem] border-[2px] lg:border-0"
        />
        <button
          type="submit"
          className="bg-custom-blue-100 text-white rounded-xl py-[1.5rem] px-[3rem]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
