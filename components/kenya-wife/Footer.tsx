import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f0f0f0]  py-[4rem] sm:px-[4rem] px-2">
      <div className="container mx-auto flex flex-wrap  justify-between mb-[4rem]">
        {/* Logo */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <Image
            src="/fwr-kenya-logo.png"
            alt="kenya-logo"
            width={100}
            height={40}
            className="w-20 h-auto"
          />
        </div>

        {/* column with bold header */}
        <div className="w-full md:w-3/4 flex flex-wrap md:justify-end gap-y-4">
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-lg font-bold mb-2">Explore</h3>
            <ul className="list-none flex flex-col gap-y-4 text-black/80">
              <li>
                <a href="#">Accomodation</a>
              </li>
              <li>
                <a href="#">Airport Services</a>
              </li>
              <li>
                <a href="#">Activities</a>
              </li>
              <li>
                <a href="#">Group and Support</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="list-none flex flex-col gap-y-4 text-black/80">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <ul className="list-none flex flex-col gap-y-4 text-black/80">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Trademark Notice</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 ">
        <p className="text-sm">Foreign wr- All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
