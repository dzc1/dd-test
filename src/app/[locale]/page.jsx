import { useTranslations } from "next-intl";
import { HeroHome } from "@/src/components/HeroHome";
import { MapThree } from "@/src/components/MapThree";
import { HeroAnimated } from "@/src/components/HeroAnimated";
import { AtentionBlock } from "@/src/components/AtentionBlock";
import { Maps } from "@/src/components/home/Maps";
import logoDash from "@/src/assets/images/logos/logo-white.svg";
import location from "@/src/assets/images/about-section/location.jpeg";
import machines from "@/src/assets/images/about-section/machines.jpg";
import temperature from "@/src/assets/images/about-section/temperature.jpg";
import community from "@/src/assets/images/about-section/community.jpg";

import { Hero } from "@/src/components/home/Hero";
import { Solutions } from "@/src/components/home/Solutions";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  const t = useTranslations("homePage");

  // function propagateValues(obj) {
  //   for (let key in obj) {
  //     if (key !== "img" && key !== "logo") {
  //       if (typeof obj[key] === "object") {
  //         propagateValues(obj[key]);
  //       } else if (Array.isArray(obj[key])) {
  //         obj[key].forEach((item) => {
  //           if (typeof item === "object") {
  //             propagateValues(item);
  //           }
  //         });
  //       } else {
  //         obj[key] = t(key);
  //       }
  //     }
  //   }
  // }

  const wordsArr = [
    t("hero.words.one"),
    t("hero.words.two"),
    t("hero.words.three"),
    t("hero.words.four"),
  ];

  const content = {
    hero: {
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      logo: logoDash,
      ctaButton: t("hero.ctaButton"),
      words: [
        t("hero.words.one"),
        t("hero.words.two"),
        t("hero.words.three"),
        t("hero.words.four"),
      ],
    },
    attention: {
      textOne: t("attention.textOne"),
      textTwo: t("attention.textTwo"),
      textThree: t("attention.textThree"),
      textFour: t("attention.textFour"),
      textFive: t("attention.textFive"),
      cards: [
        {
          title: t("attention.cards.cardOne.title"),
          subtitle: t("attention.cards.cardOne.subtitle"),
          content: t("attention.cards.cardOne.content"),
          cta: t("attention.cards.cardOne.cta"),
        },
        {
          title: t("attention.cards.cardTwo.title"),
          subtitle: t("attention.cards.cardTwo.subtitle"),
          content: t("attention.cards.cardTwo.content"),
          cta: t("attention.cards.cardTwo.cta"),
        },
      ],
    },
    maps: {
      heading: t("maps.heading"),
      directions: {
        street: "C/ del Consell de Cent, 122",
        city: "L'Eixample",
        state: "Barcelona, Spain",
        zipcode: "08015",
      },
      textOne: t("maps.textOne"),
      cta: t("maps.cta"),
    },
    about: {
      content: [
        {
          title: t("about.content.one.title"),
          content: [
            t("about.content.one.content.one"),
            t("about.content.one.content.two"),
          ],
          cta: t("about.content.one.cta"),
          img: location,
        },
        {
          title: t("about.content.two.title"),
          content: [
            t("about.content.two.content.one"),
            t("about.content.two.content.two"),
          ],
          contentTwo: "",
          img: machines,
        },
        {
          title: t("about.content.three.title"),
          content: [
            t("about.content.three.content.one"),
            t("about.content.three.content.two"),
          ],

          img: temperature,
        },
        {
          title: t("about.content.four.title"),
          content: [
            t("about.content.four.content.one"),
            t("about.content.four.content.two"),
          ],
          img: community,
        },
      ],
    },
    footer: {
      heading: "Take a Break from Adulting",
      subHeading: "has it covered",
      links: [
        { to: "/", text: "Home" },
        { to: "/washing-solutions", text: "Washing Solutions" },
        { to: "/our-location", text: "Our Location" },
        { to: "/about-us", text: "About Us" },
      ],
    },
  };

  return (
    <>
      {/* <Hero {...content.hero} /> */}
      <Hero {...content.hero} />
      <Solutions />
      <Maps {...content.maps} />
      {/* <AtentionBlock {...content.attention} /> */}
      {/* <HeroAnimated {...content.about} /> */}

      <Footer {...content.footer} />
    </>
  );
}
