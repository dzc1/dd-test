"use client";
import topLeft from "@/src/assets/images/homepage/hero-bg/top-left.jpg";
import topRight from "@/src/assets/images/homepage/hero-bg/top-right.jpg";
import bottomRight from "@/src/assets/images/homepage/hero-bg/bottom-right.jpg";
import bottomLeft from "@/src/assets/images/homepage/hero-bg/bottom-left.jpg";
import Image from "next/image";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  return (
    <>
      <section>
        <div className="relative pt-16">
          {/* Top Left - IMG */}
          <Image
            src={topLeft}
            width={0}
            height={0}
            alt="Logo Of Dash & Dry"
            className="hidden md:block absolute top-0 left-0 mt-12 w-32 lg:w-72 "
          />
          {/* Top Right - IMG */}
          <Image
            src={topRight}
            width={0}
            height={0}
            alt="Logo Of Dash & Dry"
            className="hidden md:block absolute top-0 right-0 mt-16 w-32 lg:w-72"
          />

          <div className="mx-auto px-4 relative py-10">
            {/* Text Block */}
            <div className="max-w-xl xl:max-w-4xl  mx-auto mb-12 lg:mb-0 text-center">
              <h1 className="font-heading text-5xl  xl:text-7xl tracking-tight mb-8">
                Take a break from{" "}
                <span className="font-medium tracking-tighter">
                  {" "}
                  <Typewriter
                    options={{
                      strings: ["Washing", "Drying", "Folding", "Adulting"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p className="text-xl text-gray-900 mb-4">
                Let's face it, <span className="font-black">laundry sucks</span>
                .
              </p>
              <p className="text-xl text-gray-900 mb-4">
                At <span className="font-bold">Dash & Dry</span>, we make doing
                laundry fun and productive with our one-of-a-kind co-working
                laundry space!
              </p>
              <p className="text-xl text-gray-900 mb-10">
                Save money, reclaim your time, and do what you love.
              </p>
              <div className="flex flex-col sm:flex-row justify-center">
                <a
                  href="#"
                  className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white bg-dd-green-200 hover:bg-dd-green-300 rounded-full transition duration-200 hover:cursor-pointer hover:text-gray-300"
                >
                  See our washing solutions
                </a>
                <a
                  href="#"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-dd-green-300 border border-dd-green-300 hover:bg-dd-green-200 rounded-full transition duration-200 hover:text-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div className="flex items-end relative">
              {/* Bottom Left  - IMG */}
              <div className="w-1/3 xs:w-1/2 lg:w-auto px-4">
                <Image
                  src={bottomLeft}
                  width={0}
                  height={0}
                  alt="Logo Of Dash & Dry"
                  className="block h-32 bg-center bg-no-repeat bg-cover lg:h-52"
                />
              </div>
              {/* Bottom Right  - IMG */}
              <div className="w-2/3 xs:w-1/2 lg:w-auto ml-auto px-4">
                <Image
                  src={bottomRight}
                  width={0}
                  height={0}
                  alt="Logo Of Dash & Dry"
                  className="block w-1/2 md:w-64 ml-auto"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full py-24 bg-gradient-to-t from-white to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
