export default function CommunitySection() {
  return (
    <section className="flex flex-col items-center justify-center bg-custom-blue-900 text-white gap-5 py-12 px-10 xl:gap-8 lg:p-32">
      <h2 className="capitalize font-semibold text-18 text-center leading-none lg:text-32">
        Join our amazing community
      </h2>

      <h3 className="text-16 lg:text-24 font-medium">
        Connect, Collaborate, Grow
      </h3>

      <p className="text-13 lg:text-16 text-center lg:w-7/12">
        Network with fellow entrepreneurs, share knowledge, and learn from each
        other in our vibrant community
      </p>

      <ul className="grid grid-cols-2 place-items-center border-t-2 border-b-2 border-gray-400 py-8 gap-12 text-center lg:w-7/12 lg:grid-cols-4">
        <li className="flex flex-col items-center justify-center gap-2">
          <span className="font-semibold text-22 lg:text-40">500+</span>
          <span className="font-medium text-13 leading-tight lg:text-13">
            Business Owners trained
          </span>
        </li>
        <li className="flex flex-col items-center justify-center gap-2 col-start-1 xl:col-start-2">
          <span className="font-semibold text-22 lg:text-40">5+</span>
          <span className="font-medium text-13 leading-tight lg:text-13">
            Cities Impacted
          </span>
        </li>
        <li className="flex flex-col items-center justify-center gap-2">
          <span className="font-semibold text-22 lg:text-40">10+</span>
          <span className="font-medium text-13 leading-tight lg:text-13">
            Implementation Partners
          </span>
        </li>
        <li className="flex flex-col items-center justify-center gap-2 col-start-2 row-start-1 xl:col-start-3">
          <span className="font-semibold text-22 lg:text-40">100+</span>
          <span className="font-medium text-13 leading-tight lg:text-13">
            Volunteer Team Members
          </span>
        </li>
      </ul>
      <button className="border-2 rounded-xl px-16 py-4 font-medium text-14 mt-4 xl:mt-0">
        Join Now
      </button>
    </section>
  );
}
