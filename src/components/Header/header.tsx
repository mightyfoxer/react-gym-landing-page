"use client";
import Image from "next/image";
// import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LongMenu from "./Menu";
import CallIcon from "@mui/icons-material/Call";
import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
const navigation = ["Concept", "Services", "Spécialitées", "Contact"];
import Modal from "../Modal";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const [isSticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const UnderLine = () => {
    return (
      <div className="flex flex-col justify-center items-center child">
        <div className="w-[60%]  h-[3px] border-t-2 border-[#34C5F3] z-[10000]" />
        <div className="w-[100%]  h-[3px] mt-[-2.5px] border-t-2 border-[#131313" />
      </div>
    );
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      {isDesktop && (
        <div
          className="flex w-full pb-[30px] pt-[30px] px-[46px] z-[9999]"
          style={{
            position: isSticky ? "fixed" : "static",
            top: 0,
            width: "100%",
            backgroundColor: isSticky ? "white" : "bg-[#f5f5f5]",
          }}
        >
          <div className="flex gap-x-12 w-full">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
              style={{ width: "100vw" }}
            >
              <div className="pl-[34px] min-h-[30px]">
                <Image
                  className=""
                  src={"/logo.svg"}
                  alt={"Logo"}
                  width={148}
                  height={30}
                />
              </div>
              <div className="flex gap-x-6 md:gap-x-12">
                {navigation.map((item) => (
                  <div className="flex-col parent" key={item}>
                    <div
                      onClick={() => scrolltoHash(item)}
                      className="text-[16px] cursor-pointer font-semibold leading-6 text-gray-900  pb-1"
                    >
                      {item}
                    </div>
                    <UnderLine />
                  </div>
                ))}
              </div>
              <div className="flex">
                <a href="tel:+302101234567">
                  <div
                    // onClick={() => setOpen(true)}
                    className="cursor-pointer text-[16px] text-center font-medium leading-6 text-white rounded-full bg-[#34C5F3] hover:bg-[#34c6f3ce] px-[10px] py-[5px] md:px-[32px] md:py-[13px]"
                  >
                    Appelez-nous
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
      {isMobile && (
        <div
          className="flex justify-between items-center p-4  z-[9999]"
          style={{
            position: isSticky ? "fixed" : "static",
            top: 0,
            width: "100%",
            backgroundColor: isSticky ? "white" : "bg-[#f5f5f5]",
          }}
        >
          <div className="flex gap-4">
            <LongMenu scrolltoHash={scrolltoHash} />
            {/* <a href="#"> */}
            <Image
              className=""
              src={"/logo.svg"}
              alt={"Logo"}
              width={148}
              height={30}
            />
            {/* </a> */}
          </div>
          <a href="tel:+33651690102">
            <button
              // onClick={() => setOpen(true)}
              className="flex items-center text-[16px] text-center font-medium leading-6 text-white rounded-full bg-[#34C5F3] px-[5px] py-[5px]"
            >
              <CallIcon fontSize="large" />
            </button>
          </a>
        </div>
      )}
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
