import logo from "../assets/logo.svg";
import globe from "../assets/globe.svg";
import edit from "../assets/edit.svg";
import preview from "../assets/preview.svg";
import arrow from "../assets/arrow-down.svg";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="flex w-full flex-col md:flex-row border-b">
      <div className="flex justify-between md:justify-center items-center p-4 md:p-7 md:w-[7.4%] md:border-r border-b md:border-b-0">
        <img src={logo} alt="logo" className="h-8 w-auto" />
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:flex-1`}>
        <div className="px-4 py-4 md:px-[32px] md:py-[16px] flex flex-col md:flex-row md:items-center w-full">
          <div className="flex items-center gap-2 mb-4 md:mb-0 md:w-[876px]">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/804c/7745/e755457d75d421948c9da9c84f8f0415?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNJc3ABzEsxPTRuC-clCxATrOxxAOZ97DebJoKwzlD4ZfmV6WNdVHzQuq583ChPg13TPK3u6Ps84M8eC0BHJgYiM-TuqbdTPYvhhbskuUnaAXZpjnczehJyjnhVyvq0SimxJcji2SYVbWV7qmRM2jdFYbEqiUCDAFh~p5LKH5x1XLsn9sn4X2KZy8PVXQws9oyTGnS2Pg9PZbGhfdxDl1gNVoH2pBmhM9wjYdYMRxtqA1gy2DBNroghRIWSdUwSexu8~vhrvKwEgkKA7KT02eK~DWeEX2OJKM3-j21f7KwkOU5~bJR6zrX3X91I1YW-IXjOJOO8r-ITGUBRXem8G-A__"
                alt="come on kerala"
                className="w-[32px] h-[21.16px]"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Come On Kerala</h3>
              <p className="text-gray-500 text-sm">
                Jun 25 Sat,2024 - 8:00 AM {`(IST)`}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-evenly md:w-[40%] space-y-4 md:space-y-0">
            <div>
              <img src={globe} alt="globe" className="w-[15px] h-[15px]" />
            </div>
            <div className="flex items-center gap-3">
              <img src={edit} alt="edit" />
              <p className="text-sm text-gray-500">Edit Website</p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3">
                <img src={preview} alt="preview" />
                <p className="text-sm text-gray-500">Preview</p>
              </div>
              <div>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-[15px] py-[8px] flex items-center rounded-lg text-sm">
                  Publish <img src={arrow} alt="arrow" className="pl-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
