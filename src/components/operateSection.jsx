import checkMark from "../asset/operate-mark.svg";
import operateSvg from "../asset/operate-bg.svg";

export default function OperateSection() {
  return (
    <section
      className="flex flex-col justify-between items-start gap-8 bg-cover bg-center bg-no-repeat text-white px-8 py-16 lg:px-20 xl:items-center xl:flex-row xl:gap-40 xl:px-72 xl:py-40"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 47, 99, 0.7), rgba(10, 47, 99, 0.8)), url(${operateSvg})`,
      }}
    >
      <div className="flex flex-col gap-4 xl:w-1/2">
        <h2 className="font-semibold text-24 xl:text-32">How We Operate?</h2>
        <p className="text-16 xl:text-14 leading-relaxed">
          Our iterative development approach ensures your MVP aligns perfectly
          with your vision. We work closely with you to understand your goals,
          design and develop your MVP, and continuously test and iterate for
          optimal results.
        </p>
      </div>

      <div className="flex flex-col gap-8 text-18 xl:gap-[1rem] xl:w-1/2">
        <p className="flex items-center gap-[1rem]">
          <img src={checkMark} alt="list check mark" /> MVP Development
        </p>
        <p className="flex items-center gap-[1rem]">
          <img src={checkMark} alt="list check mark" /> Mentorship
        </p>
        <p className="flex items-center gap-[1rem]">
          <img src={checkMark} alt="list check mark" /> Investor Matching
        </p>
      </div>
    </section>
  );
}
