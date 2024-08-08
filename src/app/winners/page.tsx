import React from "react";
import { ExpandableCardDemo } from "../components/WinnersDetails";
// import CloseIcon from "../components/WinnersDetails";

const Page = () => {
  return (
    <>
      {/* <CloseIcon /> */}
      <div className="bg-blacks">
        <h1 className=" justify-center items-center text-center uppercase  text-yellows font-bold text-3xl mt-36 p-11">
          {" "}
          Awards
        </h1>
        <ExpandableCardDemo />
      </div>
    </>
  );
};

export default Page;
