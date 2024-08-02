"use client";
import GoogleMapReact from "google-map-react";
import { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import logoDash from "@/src/assets/images/logos/logo-black.svg";

const AnyReactComponent = ({ cta }) => {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className="relative">
      {showPopup && (
        <a
          className="py-4 px-6 text-lg text-center font-medium text-white bg-dd-green-300 hover:bg-dd-green-100 hover:text-black rounded-full transition duration-200 absolute bottom-[60px]"
          href="https://maps.app.goo.gl/5Guhf2YkRQVof6eK9"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta}
        </a>
      )}
      <MapPinIcon className="w-16 h-16 text-red-500" onClick={togglePopup} />
    </div>
  );
};

export const Maps = ({ heading, directions, textOne, cta }) => {
  const defaultProps = {
    center: [41.38119223821082, 2.152590072999012],
    zoom: 19,
  };

  const [result, setResult] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      return;
    }

    setEmailError("");
    setResult("Sending....");
    formData.append("access_key", "7353b380-8002-4efe-a1d7-050210feaea7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setIsFormSubmitted(true);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  const startNewSubmission = () => {
    setIsFormSubmitted(false);
    setResult("");
  };

  return (
    <section id="our-location" className="w-full">
      <div className="bg-white w-full flex flex-grow justify-around">
        <div className="w-1/2">
          <div style={{ height: "80vh", width: "100%" }}>
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
        </div>

        <div className="w-1/2 bg-gray-50">
          <div className="w-full text-center my-8">
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl xl:text-5xl tracking-tight gs_reveal">
              {heading}
            </h2>
            {/* <div className="py-2">
              <h4>{textOne}</h4>
              <p>
                {directions.street}, {directions.city} {directions.zipcode},{" "}
                {directions.state}
              </p>
            </div> */}
          </div>

          <div className="w-full h-full flex justify-center gs_reveal">
            <div className="w-full max-w-xl">
              <div className="lg:ml-auto p-8 bg-white rounded-2xl shadow-md overflow-hidden">
                {isFormSubmitted ? (
                  <div className="text-center">
                    <h4 className="text-2xl font-medium mb-8">Thank you!</h4>
                    <p className="text-lg">
                      Your message has been sent successfully.
                    </p>
                    <button
                      onClick={startNewSubmission}
                      className="flex w-full py-3 px-5 items-center justify-center font-medium text-white bg-dd-green-300 hover:bg-dd-green-100 hover:text-black  rounded-full transition duration-200 mt-4"
                    >
                      Submit Another Response
                    </button>
                  </div>
                ) : (
                  <>
                    <h4 className="text-2xl font-medium mb-8 text-center">
                      Send us a message
                    </h4>
                    <form onSubmit={onSubmit}>
                      <label
                        htmlFor="fullName"
                        className="block pl-4 mb-1 text-sm font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-dd-green shadow rounded-full"
                        required
                      />

                      <label
                        htmlFor="email"
                        className="block pl-4 mb-1 text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 mb-2 outline-none ring-offset-0 focus:ring-2 focus:ring-dd-green shadow rounded-full"
                        required
                      />
                      {emailError && (
                        <p className="text-red-500 pl-4">{emailError}</p>
                      )}

                      <label
                        htmlFor="message"
                        className="block pl-4 mb-1 text-sm font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-dd-green shadow rounded-2xl"
                        rows="4"
                        required
                      ></textarea>

                      <button
                        type="submit"
                        className="flex w-full py-3 px-5 items-center justify-center font-medium text-white bg-dd-green-300 hover:bg-dd-green-100 hover:text-black rounded-full transition duration-200"
                      >
                        <span className="mr-2">Submit</span>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25 10H15.75"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.5 4.75L15.75 10L10.5 15.25"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </form>
                    <span>{result}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
