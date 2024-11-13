import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import { impact } from "../utils/util";

export default function About() {
  return (
    <>
      <header className="flex flex-col items-center justify-center gap-2 h-screen-1/2 bg-custom-blue-900 text-white">
        <h1 className="text-40 font-semibold">Empowering Global Innovation</h1>
        <p className="text-18 font-serif">
          Our Mission: To Fuel African Entrepreneurship
        </p>
      </header>

      <main>
        <section className="flex items-center w-full px-52 py-32">
          <div className="w-1/2 flex flex-col gap-8 text-custom-blue-500 text-22">
            <h2 className="text-32 font-semibold">About Us</h2>
            <p>
              At Megadel Africa, we understand the challenges that small
              businesses face in their journey towards growth and success.
              Limited resources, lack of expertise, and the ever-evolving
              digital landscape can pose significant obstacles.
            </p>

            <p>
              That&apos;s why we have developed a comprehensive program tailored
              specifically to address these challenges and enable businesses to
              reach new heights.
            </p>
          </div>

          <figure className="flex-1">
            <img src="" alt="" className="w-full block object-cover" />
          </figure>
        </section>

        <section className="flex items-center w-full px-52 py-32">
          <figure className="w-1/2">
            <img src="" alt="" className="w-full block object-cover" />
          </figure>

          <div className="flex-1 flex flex-col gap-8 text-custom-blue-500 text-22">
            <h2 className="text-32 font-semibold">Our Vision</h2>

            <p>
              Our vision is to empower business owners, equipping them with
              essential tools and the knowledge needed to establish a thriving
              online business. By providing comprehensive resources and support,
              we enable entrepreneurs to confidently navigate the digital
              landscape and achieve their goal.
            </p>

            <p>
              Our commitment is to ensure that business owners have necessary
              guidance and expertise to build strong online presence,
              effectively reach their target audience and maximize their
              potentials for growth and profitability.
            </p>
          </div>
        </section>

        <section>
          <h2>Our Impact</h2>
          <p>
            Since our inception, Megadel Africa has made a significant impact on
            small businesses across the region. Here are some key highlights of
            our achievements
          </p>

          <ul>
            {impact.map((item, i) => (
              <li key={i}>
                <h3>{item.numbers}</h3>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Join us today</h2>
          <p>
            If you&apos;re a small business owner or an aspiring entrepreneur
            looking to take your business to the next level, we invite you to
            join our program and become part of the Megadel Africa community.
            Together, we can overcome challenges, seize opportunities, and
            achieve sustainable success.Feel free to explore our website, learn
            more about our program, and connect with us. We&apos;re excited to
            embark on this journey with you and help you unlock your
            business&apos;s true potential.
          </p>
        </section>

        <Subscribe />
      </main>

      <Footer />
    </>
  );
}
