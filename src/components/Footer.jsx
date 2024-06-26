import background from "@/src/assets/images/footer/gradient3.svg";
import Image from "next/image";
import logoDash from "@/src/assets/images/logos/logo-black.svg";
import { Link } from "../navigation";
export const Footer = ({ heading, subHeading, links }) => {
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };
  return (
    <>
      <section className="py-12 bg-dd-green-100 overflow-hidden">
        <Image
          src={background}
          width={140}
          height={140}
          className=" transform -translate-x-1/2"
          alt="Dash & Dry Logo"
        />
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap -m-8 ">
            <div className="w-full md:w-1/2 p-8 gs_reveal_fromLeft gs_reveal">
              <h2 className="font-bold tracking-tighter leading-10 md:leading-tight text-4xl md:text-5xl">
                {heading}
              </h2>
              <h3 className="tracking-tighter leading-10 md:leading-tight flex items-center">
                <span className="mr-2">
                  {" "}
                  <Image
                    src={logoDash}
                    width={200}
                    height={200}
                    alt="Dash & Dry Logo"
                    className=""
                  />
                </span>
                {"  "}
                {subHeading}
              </h3>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap -m-8 mb-10">
                <div className="w-full sm:w-1/3 p-8">
                  <ul>
                    {links.map((link) => (
                      <li className="mb-3.5" key={link.to}>
                        <Link className="nav-links" href={link.to}>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white w-full text-center p-4">
        <p className="text-md font-medium tracking-tighter leading-10 md:leading-tight">
          Copyright © {getCurrentYear()} Dash & Dry. All Rights Reserved
        </p>
      </div>
    </>
  );
};
