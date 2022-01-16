import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Directory() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-16 leading-none">
          <p className="text-4xl text-blue-600">BARANGAY HOLY SPIRIT</p>
          <p className="text-6xl text-blue-600 font-semibold">DIRECTORIES</p>
        </div>

        {/* 1st Directory */}
        <div className="lg:flex justify-between">
          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">Barangay Hall</p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-base">
                - Faustino Street (Brgy. Main)
              </p>
              <p className="text-gray-700 text-base">
                - San Simon Street (Brgy. Annex)
              </p>
              <p className="font-bold text-sm mt-2 mb-2">Contacts</p>
              <p className="text-gray-700 text-base">- 431-1663 loc. 100</p>
              <p className="text-gray-700 text-base">- 430-8723 loc. 114</p>
            </div>
          </div>

          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">Library / Reading Center</p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-xs">
                - Brgy. Library (Brgy. Hall Main) - Faustino St.
              </p>
            </div>
          </div>

          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">BPSO Office</p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-xs">
                - Alpha Base (Brgy. Hall Main) - Faustino St.
              </p>
              <p className="text-gray-700 text-xs">
                - Bravo Base (Brgy. Annex) - San Simon St.
              </p>
              <p className="text-gray-700 text-xs">
                - Charlie Base - Republic Ave.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Directory */}
        <div className="lg:flex justify-between">
          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">
                Covered Courts/ Open Courts
              </p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-xs">
                - Brgy. Main Covered Court - Faustino St.
              </p>
              <p className="text-gray-700 text-xs">
                - Gilarmi Covered Court - Gilarmi
              </p>
              <p className="text-gray-700 text-xs">
                - Sto. Nino Covered Court - Sto. Nino St.
              </p>
              <p className="text-gray-700 text-xs">- San Roque Covered Court</p>
              <p className="text-gray-700 text-xs">
                - Kasihayan Covered Court - Kasiyahan St.
              </p>
              <p className="text-gray-700 text-xs">- St. Michael</p>
              <p className="text-gray-700 text-xs">- St. Joseph - Open Court</p>
              <p className="text-gray-700 text-xs">
                - Nawasa Line - Open Court
              </p>
            </div>
          </div>

          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">
                Lupon Tagapamayapa Office
              </p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-xs">
                - Brgy. Main - Faustino St.
              </p>
              <p className="text-gray-700 text-xs">
                - Brgy. Annex - San Simon St.
              </p>
            </div>
          </div>

          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">Parks & Playgrounds</p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-xs">
                - Brgy. Main - Faustino St.
              </p>
              <p className="text-gray-700 text-xs">
                - Don Antonio Heights Home Owner's Association
              </p>
            </div>
          </div>
        </div>

        {/* 3rd Directory */}
        <div className="lg:flex justify-between">
          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">Day Care Center</p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-xs">
                - Faustino Street (Brgy. Main)
              </p>
              <p className="text-gray-700 text-xs">- Kaligtasan Street</p>
              <p className="text-gray-700 text-xs">- Kasiyahan Street</p>
              <p className="text-gray-700 text-xs">- Sto. Domingo Street</p>
              <p className="text-gray-700 text-xs">
                - Gilarmi (Lower Sta. Catalina)
              </p>
              <p className="text-gray-700 text-xs">- Sta. Catalina Street</p>
              <p className="text-gray-700 text-xs">- Zebra</p>
              <p className="text-gray-700 text-xs">- Mapayapa</p>
            </div>
          </div>

          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">Health Center</p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-xs">
                - Barangay / Veterans Health Center - 6 Faustino St.
              </p>
              <p className="text-gray-700 text-xs">
                - Betty Go / Belmonte Super Health Center, Artillery Road,
                Veterans Vill.
              </p>
              <p className="text-gray-700 text-xs">
                - Sta. Catalina Health Center - Sta. Catalina St., Dona Juana
                Homes
              </p>
              <p className="text-gray-700 text-xs">
                - Republic Area Health Center - Barangay Health Center
              </p>
              <p className="font-bold text-xs mt-2 mb-2">Contacts</p>
              <p className="text-gray-700 text-xs">- 431-1663 loc. 100</p>
              <p className="text-gray-700 text-xs">- 430-8723 loc. 114</p>
            </div>
          </div>

          <div className="lg:flex lg:my-8 my-8">
            <div className="text-center lg:text-left lg:mx-8">
              <p className="font-bold text-xl mb-2">SK Hall</p>
              <p className="font-bold text-sm mb-2">Location</p>
              <p className="text-gray-700 text-base">- Faustino Street</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Directory;
