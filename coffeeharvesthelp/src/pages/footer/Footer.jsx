import React from "react";
import ItemsContainer from "../../components/footer/ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 object-bottom">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5 "
        >
          <span className="text-teal-400">CHH</span> Coffe Harvest Help
        </h1>
        <div>
        </div>
      </div>
      <ItemsContainer />
    </footer>
  );
};

export default Footer;