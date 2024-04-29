import { useTranslations } from "next-intl";
import { ContactFormTest } from "@/src/components/ContactFormTest";
export default function Contact() {
  const t = useTranslations("IndexPage");
  return (
    <main className="p-24">
      <h4 className=" animate pop font-light text-4xl">
        Contact Us - {t("title")}
      </h4>
      <ContactFormTest />
    </main>
  );
}
