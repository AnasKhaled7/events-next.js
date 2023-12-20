import Link from "next/link";
import Image from "next/image";

import { Button } from "../../components/ui/button";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Evently is a platform that allows you to host and attend events
              from the comfort of your home.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="Hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] 2xl:max-h-[50vh] object-contain"
          />
        </div>
      </section>

      {/* events section */}
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by
          <br />
          Hundreds of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          {/* Search */}
          {/* CategoryFilter */}
        </div>
      </section>
    </>
  );
};

export default Home;
