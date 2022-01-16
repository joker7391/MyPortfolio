import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Barangay from "../../../images/holy-spirit/barangay.png";

function About() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Barangay})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-white text-center uppercase leading-none tracking-tight py-20">
            <p className="text-3xl lg:text-4xl font-semibold">About Barangay</p>
            <p className="text-5xl lg:text-6xl font-semibold">Holy Spirit</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto lg:flex">
        <div className="py-10 px-4">
          <p className="text-center text-3xl font-semibold">
            LARAWANG DIWA (Vision)
          </p>
          <p className="text-justify py-4">
            Isang pamayanan na may pagkakaisa ang lahat ng naninirahan, kasama
            ang bawat sector at mga samahan na aktibong nakikilahok sa pagsulong
            ng mga gawaing pangkaunlaranat kaagapay sa pagtataguyod ng
            progresong Barangaysa pamamagitan ng magandang simulain at adhikain
            tungo sa isang pangangasiwa para sa mahusay na pamamalakad kalakip
            ang responsibilidad ng mga halal na opisyal ng Barangay at
            manggagawa sa pagbibigay ng serbisyong publiko sa isang paraang
            mabilis, praktikal, at bukas sa lahat ng pagsusuri ng madla ayon sa
            itinadhana ng batas.
          </p>
        </div>
        <div className="lg:py-10 px-4">
          <p className="text-center text-3xl font-semibold">Pakay (Mission)</p>
          <p className="text-justify py-4">
            Makapagbigay ng tamang serbisyo sa pamamagitan ng pagtupad ng
            tungkulin ayon sa itinadhana ng batas sa isang paraang tapat, bukas
            sa pagsusuri, mabilis, epektibo, at may sapat na kasanayan at
            paghahatid ng tamang impormasyon para sa pagtugon sa pangangailangan
            ng naninirahan sa Barangay Holy Spirit.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
