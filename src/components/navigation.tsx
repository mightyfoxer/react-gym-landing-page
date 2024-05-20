"use client";
import Header from "./Header/header";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const src = "/womensitter.png";
// xs (extra small): < 576px
// sm (small): ≥ 576px
// md (medium): ≥ 768px
// lg (large): ≥ 992px
// xl (extra large): ≥ 1200px
// xxl (extra extra large): ≥ 1400px
const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMin = useMediaQuery(theme.breakpoints.up("xs"));

  return (
    <>
      <div className="bg-white sm:pb-0 w-full">
        <Header></Header>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-[46px] p-4 mt-4 sm:mt-[62px]">
          <div className="col-span-1 ">
            <div className="flex flex-col items-center sm:items-start sm:pl-[34px]">
              {/* <p>Sculpter votre corps, fortifiez votre esprit.</p> */}
              <p className="text-[1.2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]  font-bold whitespace-nowrap">
                DÉCOUVREZ NOTRE OFFRE
              </p>
              <div className="flex flex-row justify-between items-center">
                <p className="text-[1.2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]  font-bold whitespace-nowrap">
                  EXCEPTIONNELLE :<br />
                  ABONNEMENT À<br />
                  SEULEMENT 20€ !<br />
                </p>
                {/* <Image
                  src={"/solar.svg"}
                  alt="solar"
                  width={100}
                  height={100}
                /> */}
                {isDesktop && (
                  <div className="w-[100px]">
                    <div className={"image-container"}>
                      <Image
                        src={"/solar.svg"}
                        alt="solar"
                        layout="fill"
                        className={"image"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col h-full justify-center gap-6 md:gap-[100px]">
              <div className="grid grid-cols-6">
                <div className="col-span-4" />
                {isDesktop && (
                  <div className="col-span-1">
                    <Image
                      src={"/atoms.svg"}
                      alt="atom"
                      width={118}
                      height={222}
                    />
                  </div>
                )}
              </div>
              <div
                className={
                  isMobile
                    ? "flex flex-col justify-center items-center gap-4 w-full"
                    : "flex gap-5 justify-center text-sm sm:text-md md:text-xl"
                }
              >
                <a href="https://www.facebook.com/neerfitness">
                  <button className="rounded-full border-[#34C5F3] border-[1px] flex justify-center items-center py-[6px] px-[12px] md:py-[10px] md:px-[16px] xl:py-[20px] xl:px-[32px]">
                    <span className="mr-2">
                      <Image
                        src={"/play.svg"}
                        alt="play"
                        width={24}
                        height={24}
                      />
                    </span>
                    RÉSERVER UNE SÉANCE D’ESSAI
                  </button>
                </a>
                <button className="rounded-full bg-[#34C5F3] text-white py-[6px] px-[12px] md:py-[10px] md:px-[16px] xl:py-[20px] xl:px-[32px]">
                  APPELEZ-NOUS
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={`mt-4 p-4 flex ${
            isMobile ? "flex-col items-center" : "justify-between p-20"
          } `}
        > */}
        <div className={"w-full pt-16"}>
          <div className={"image-container"}>
            <Image
              src={"/GirlsAndBoys.png"}
              alt="man"
              layout="fill"
              className={"image"}
            />
          </div>
        </div>
        {/* </div> */}
        {/* <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
            
          </div>
          <div className="col-span-2">

          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navigation;
