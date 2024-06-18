import Header from "./components/Header";
import Customers from "./components/Customers";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import SubPlan from "./components/SubPlan";

export default function Home() {
  return (
      <div className="">      
        <div className="stars" />
          <Header />
          <Customers />
          <Features />
          <Testimonials />
          <SubPlan />
      </div>

  );
};