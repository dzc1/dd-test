"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export const Hero = ({
  title,
  subtitle,
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  logo,
  alert,
}) => {
  const [size, setSize] = useState({ width: 150, height: 150 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth >= 768 ? 150 : 150,
        height: window.innerWidth >= 768 ? 150 : 150,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth transisiton
  // const smoother = () => {
  //   const mapElement = document.getElementById("attentionBlock");
  //   if (mapElement) {
  //     mapElement.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  const smoother = () => {
    const mapElement = document.getElementById("attentionBlock");
    if (mapElement) {
      const yPos = mapElement.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: yPos, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="hero-header hero">
        <div className="hero-container">
          <h1 className="animate fade-in">{title}</h1>
          <h2 className="animate fade-in-two">{subtitle}</h2>
          <div className="animate fade-in-three">
            <Image
              src={logo}
              width={size.width}
              height={size.height}
              alt="Logo Of Dash & Dry"
            />
          </div>
          <button
            onClick={smoother}
            className="animate fade-in-four text-white text-lg font-figtree font-extralight underline-offset-4 underline transition duration-300 ease-in-out hover:scale-110 hover:underline-offset-8 uppercase"
          >
            Learn More
          </button>
        </div>
      </header>
    </>
  );
};
