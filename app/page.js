import Herobanner from "./components/heroBanner/heroBanner";
import FeaturesSection from "./components/features/featuresSection";
import GadgetListing from "./components/gadgets/gadgetListing";
import ContactUs from "./components/contact/contactUs";

export default function Home() {
  return (
    <div>
      <Herobanner/>
      <div style={{backgroundImage : "url(./back-2.jpg)"}} >
      <FeaturesSection/>
        <GadgetListing/>
      </div>
    </div>
  );
}
