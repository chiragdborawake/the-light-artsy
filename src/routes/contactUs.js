import { useEffect } from "react";
import ContactUs from "../ContactUs";
export default function ContactUsRoute() {
  useEffect(() => {
    document.title = "Contact US - The Light Artsy";
  }, []);
  return (
    <div>
      <ContactUs />
    </div>
  );
}
