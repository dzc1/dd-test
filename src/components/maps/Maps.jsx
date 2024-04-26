"use client";
import GoogleMapReact from "google-map-react";
import { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import logoDash from "@/src/assets/images/logos/logo-black.svg";
import Image from "next/image";
const AnyReactComponent = ({ cta }) => {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      {/* <MapPinIcon className="w-10 h-10 text-dd-green-100" /> */}
      <div className="relative">
        {showPopup && (
          <>
            <div className="rounded-2xl absolute bottom-[60px] bg-white p-8 shadow-lg">
              <Image
                src={logoDash}
                width={150}
                height={150}
                alt="Dash & Dry Logo"
                className="mb-4"
              />

              <a
                className="w-full bg-dd-green-100 p-4 rounded-xl uppercase text-white font-bold block text-center"
                href="https://maps.app.goo.gl/5Guhf2YkRQVof6eK9"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta}
              </a>
            </div>
          </>
        )}
        <MapPinIcon
          className="w-14 h-14 text-dd-green-100"
          onClick={togglePopup}
        />
      </div>
    </>
  );
};

export const Maps = ({ heading, directions, textOne, cta }) => {
  const defaultProps = {
    center: [41.38119223821082, 2.152590072999012],
    // center: {
    //   lat: 41.38119223821082,
    //   lng: 2.152590072999012,
    // },
    zoom: 18,
  };
  return (
    <>
      <section className="py-8 md:py-16 bg-dd-green" id="google-maps">
        <h2 className="gs_reveal_fromLeft gs_reveal text-center font-bold tracking-tighter leading-10 md:leading-tight">
          {heading}
        </h2>
        <div className="bg-white container mx-auto w-full flex flex-grow items-center justify center rounded-2xl max-w-6xl my-8">
          <div
            className="relative"
            style={{
              height: "60vh",
              width: "50%",
              borderRadius: "100px",
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
            >
              <AnyReactComponent
                cta={cta}
                lat={41.38119223821082}
                lng={2.152590072999012}
              />
            </GoogleMapReact>
          </div>

          <div>
            <div className="px-16 mx-w-md">
              <h4>Email</h4>
              <p className="mb-4">dashndry@gmail.com</p>
              <h4>{textOne}</h4>
              <p>
                {" "}
                {directions.street}, {directions.city} {directions.zipcode},{" "}
                {directions.state}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
