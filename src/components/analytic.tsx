"use client";
import Dashboard from "./dashboard";

const Analytic = () => {
  return (
    <>
      <div
        id="Concept"
        className="flex sm:flex-row flex-col rounded-[32px] sm:rounded-full bg-[#222222] justify-between items-center w-full px-[80px] py-[44px] mt-[50px]"
      >
        <Dashboard
          number="18+"
          description="Machines pour vous raffermir"
        ></Dashboard>
        <Dashboard
          number="20+"
          description="Machines pour vous tonifier"
        ></Dashboard>
        <Dashboard
          number="10+"
          description="Machines pour vous affiner"
        ></Dashboard>
        <Dashboard
          number="100%"
          description="De suivi personnalisées"
        ></Dashboard>
      </div>
    </>
  );
};

export default Analytic;
