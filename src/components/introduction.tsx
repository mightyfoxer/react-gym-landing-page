"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Intro = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <div
        className={`rounded-[24px] bg-[#222222] text-white justify-between items-center mt-[80px] ${
          isMobile ? "flex-col" : "flex"
        }`}
      >
        <div className="sm:basis-1/2 pt-4 text-center sm:text-left sm:pl-[80px]">
          <p className="text-[14px] font-medium">
            Soyez guidé vers votre meilleur vous.
          </p>
          <p className="text-[24px] sm:text-[55px] font-bold">
            Équipe d’experts
          </p>
        </div>
        <div className="sm:basis-1/2 py-[20px] px-4 sm:px-0 sm:py-[80px] pr-2 sm:pr-[80px]">
          Vous visez un objectif précis et recherchez un soutien personnalisé
          pour l&apos;atteindre ? Nos coachs sont présents pour répondre à vos
          besoins et à vos objectifs. Chacun d&apos;entre eux est certifié
          professionnellement et possède ses propres spécialités et méthodes de
          travail.
        </div>
      </div>
    </>
  );
};

export default Intro;
