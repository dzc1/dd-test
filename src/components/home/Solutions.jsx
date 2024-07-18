"use client";
import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import logoAlone from "@/src/assets/images/hero-section/dash-logo-alone.svg";
import Image from "next/image";
import "animate.css";
export const Solutions = () => {
  const [toggle, setToggle] = useState("cc");

  const handleToggle = (e, type, setToggle, setAnimation) => {
    e.preventDefault();
    setToggle(type);
    setAnimation("animate__animated animate__fadeIn");
    setTimeout(() => setAnimation(""), 1000); // Reset animation state after 1 second
  };
  const [animation, setAnimation] = useState("");

  const washingPlans = [
    {
      type: "washer",
      title: "12Kg Washer",
      prices: {
        cash: "6.5€",
        cc: "7€",
        fidelity: "6€",
      },
      description:
        "Great for 20 T-shirts, 4 pairs of jeans, and 4 bath towels.",
      bgColor: "",
      textColor: "",
      buttonTextColor: "text-black hover:text-white",
      buttonBorderColor: "border-teal-900 hover:bg-teal-900",
      buttonBgColor: "",
      features: [
        "35 Minutes Wash Cycle",
        "Washing Detergent",
        "Fabric Softener",
        "ActiveOzone Mist Technology (Disinfectant & Sanitizer)",
      ],
      temperature: [90, 80, 70],
      icon: (
        <Image
          src={logoAlone}
          width={0}
          height={0}
          alt="Logo Of Dash & Dry"
          className="w-1/6 "
        />
      ),
    },
    {
      temperature: [90, 80, 70],
      type: "washer",
      title: "16Kg Washer",
      prices: {
        cash: "7.5€",
        cc: "8€",
        fidelity: "7€",
      },
      description:
        "Great for 30 T-shirts, 6 pairs of jeans, and 6 bath towels.",
      bgColor: "",
      textColor: "",
      buttonTextColor: "text-black hover:text-white",
      buttonBorderColor: "border-teal-900 hover:bg-teal-900",
      buttonBgColor: "",
      features: [
        "35 Minutes Wash Cycle",
        "Washing Detergent",
        "Fabric Softener",
        "ActiveOzone Mist Technology (Disinfectant & Sanitizer)",
      ],
      icon: (
        <Image
          src={logoAlone}
          width={0}
          height={0}
          alt="Logo Of Dash & Dry"
          className="w-1/6 "
        />
      ),
    },
    {
      temperature: [90, 80, 70],
      type: "washer",
      title: "20Kg Washer",
      prices: {
        cash: "9€",
        cc: "9.5€",
        fidelity: "8.5€",
      },
      description:
        "Great for 35 T-shirts, 8 pairs of jeans, and 8 bath towels.",
      bgColor: "",
      textColor: "",
      buttonTextColor: "text-black hover:text-white",
      buttonBorderColor: "border-teal-900 hover:bg-teal-900",
      buttonBgColor: "",
      features: [
        "35 Minutes Wash Cycle",
        "Washing Detergent",
        "Fabric Softener",
        "ActiveOzone Mist Technology (Disinfectant & Sanitizer)",
      ],
      icon: (
        <Image
          src={logoAlone}
          width={0}
          height={0}
          alt="Logo Of Dash & Dry"
          className="w-1/6 "
        />
      ),
    },
    {
      temperature: [90, 80, 70],
      type: "dryer",
      title: "Dryer - 18KG",
      prices: {
        cash: "5.5€",
        cc: "6€",
        fidelity: "5€",
      },
      description:
        "For businesses with significant drying needs and consumption",
      bgColor: "border-dd-green-100",
      textColor: "text-black",
      buttonTextColor: "text-black",
      buttonBorderColor: "border-lime-500 hover:border-white",
      buttonBgColor: "bg-lime-500 hover:bg-white",
      features: [
        "35 Minutes Wash Cycle",
        "Washing Detergent",
        "Fabric Softener",
        "ActiveOzone Mist Technology (Disinfectant & Sanitizer)",
      ],
      icon: (
        <>
          <Image
            src={logoAlone}
            width={0}
            height={0}
            alt="Logo Of Dash & Dry"
            className="w-1/6 "
          />
        </>
      ),
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 gs_reveal_fromRight">
        <div className="max-w-4xl mx-auto text-center mb-4 md:mb-6">
          <h1 className="font-heading text-5xl mb-6">Our Washing Solutions</h1>
          <p className="text-lg text-gray-700 mb-2">
            Our prices are simple and designed to cater to individuals of any
            households.
          </p>
          <p className="text-lg text-gray-700">
            We offer a variety of laundry machines, including three 12kg
            washers, one 16kg washer, one 20kg washer, and two 18kg dryers.
            Choose a load size that suits your needs and budget.
          </p>
        </div>
        <div className="flex md:flex-row flex-col mb-6 items-start md:items-center justify-end">
          <div className="w-full flex flex-col">
            <span className="text-center">Price in</span>
            <div className="flex justify-center items-center">
              <div className="relative flex h-5 px-0.5 items-center justify-between transition duration-200 ease-linear rounded-full bg-dd-green shadow ">
                <a
                  onClick={(e) => {
                    handleToggle(e, "cc", setToggle, setAnimation);
                  }}
                  className={`inline-block w-4 h-4 ${
                    toggle === "cc" ? "bg-white" : "bg-transparent"
                  } rounded-full`}
                  href="#"
                ></a>
                <a
                  onClick={(e) =>
                    handleToggle(e, "cash", setToggle, setAnimation)
                  }
                  className={`inline-block w-4 h-4 ${
                    toggle === "cash" ? "bg-white" : "bg-transparent"
                  } rounded-full`}
                  href="#"
                ></a>

                <a
                  onClick={(e) =>
                    handleToggle(e, "fidelity", setToggle, setAnimation)
                  }
                  className={`inline-block w-4 h-4 ${
                    toggle === "fidelity" ? "bg-white" : "bg-transparent"
                  } rounded-full`}
                  href="#"
                ></a>
              </div>
              <div className="min-w-24">
                <span
                  className={`ml-4 font-medium text-xl ${
                    toggle === "cash" ? "" : "hidden"
                  }`}
                >
                  Cash
                </span>
                <span
                  className={`ml-4 font-medium text-xl ${
                    toggle === "cc" ? "" : "hidden"
                  }`}
                >
                  Credit/Debit Card
                </span>
                <span
                  className={`ml-4 font-medium text-xl ${
                    toggle === "fidelity" ? "" : "hidden"
                  }`}
                >
                  Fidelity Card
                </span>
              </div>
              <span className="inline-block mt-5 md:mt-0 px-2 text-md leading-6 text-teal-800 font-medium bg-lime-50 rounded-full ml-2">
                {toggle === "cc"
                  ? ""
                  : toggle === "cash"
                  ? "Save 10%"
                  : toggle === "fidelity"
                  ? "Save 15%"
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div className=" mx-auto lg:max-w-none">
          <div className="flex flex-wrap -mx-4">
            {washingPlans.map((plan, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/4 px-4 mb-12 lg:mb-0 "
              >
                <div
                  className={`mb-10 p-8 shadow-md shadow-dd-green-200 rounded-2xl ${plan.bgColor} `}
                >
                  <div className="">{plan.icon}</div>
                  <span
                    className={`block text-2xl font-medium mt-8 mb-4 ${plan.textColor} `}
                  >
                    {plan.title}
                  </span>
                  {plan.customPrice ? (
                    <span className={`block text-4xl ${plan.textColor} mb-6`}>
                      Custom
                    </span>
                  ) : (
                    <div className="flex items-center mb-6">
                      <span className={`text-5xl ${animation}`}>
                        {plan.prices[toggle]}
                      </span>
                      <span
                        className={`ml-4 text-xl font-medium text-gray-700`}
                      >
                        {plan.type === "washer"
                          ? "per wash"
                          : "per drying cycle"}
                      </span>
                    </div>
                  )}
                  <p
                    className={`mt-4 ${
                      plan.textColor
                        ? "text-black text-md opacity-80"
                        : "text-md"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
                <div>
                  <span className="block text-xl font-medium mb-2">
                    Included in price
                  </span>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex mb-2 items-center">
                        <span className="flex-shrink-0">
                          <CheckCircleIcon className="w-6 h-6 text-dd-green-200" />
                        </span>
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
