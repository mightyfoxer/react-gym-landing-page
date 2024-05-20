"use client";
import ServiceDescription from "./serviceDescription";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Service = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      {isMobile ? (
        <div
          className="flex flex-col gap-4 bg-[#222222] rounded-[32px] gap-x-[40px] mt-[50px] p-4"
          id="Services"
        >
          <ServiceDescription
            title="Un club sans frime"
            content="Notre club accueille les débutants et ceux qui ont peu d'expérience en musculation. Nos experts sont là pour vous guider vers l'excellence."
            image="/fitman.svg"
          />
          <ServiceDescription
            title="Des tarifs imbattables"
            content="Chez Neer Fitness, nous mettons l'accent sur l'accessibilité et sommes fiers de proposer l'un des tarifs les plus compétitifs du marché."
            image="/card.svg"
          />
          <ServiceDescription
            title="Des cours collectifs "
            content="Profitez de cours de groupe dynamiques dispensés par nos coachs expérimentés, avec l'assistance d'équipements interactifs de pointe."
            image="/fitwoman.svg"
          />
          <ServiceDescription
            title="Des horaires flexibles"
            content="Nous sommes ouverts de 6h00 à 23h00, 7 jours sur 7, offrant ainsi un accès libre et flexible à nos installations."
            image="/clock.svg"
          />
          <div className="flex flex-auto justify-center rounded-[32px]">
            <Image
              src={"/GirlThinking.png"}
              alt="alt"
              width={421}
              height={556}
              objectFit="cover"
              className="rounded-[32px] aspect-square object-cover"
            />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-row bg-[#222222] rounded-[32px] gap-x-[40px] mt-[50px]"
          id="Services"
        >
          <div className="basis-2/3 grid grid-cols-2 grid-rows-2  py-[80px] pl-[80px] gap-y-[40px] gap-x-[46px]">
            <ServiceDescription
              title="Un club sans frime"
              content="Notre club accueille les débutants et ceux qui ont peu d'expérience en musculation. Nos experts sont là pour vous guider vers l'excellence."
              image="/fitman.svg"
            />
            <ServiceDescription
              title="Des tarifs imbattables"
              content="Chez Neer Fitness, nous mettons l'accent sur l'accessibilité et sommes fiers de proposer l'un des tarifs les plus compétitifs du marché."
              image="/card.svg"
            />
            <ServiceDescription
              title="Des cours collectifs "
              content="Profitez de cours de groupe dynamiques dispensés par nos coachs expérimentés, avec l'assistance d'équipements interactifs de pointe."
              image="/fitwoman.svg"
            />
            <ServiceDescription
              title="Des horaires flexibles"
              content="Nous sommes ouverts de 6h00 à 23h00, 7 jours sur 7, offrant ainsi un accès libre et flexible à nos installations."
              image="/clock.svg"
            />
          </div>
          <div
            className="flex flex-auto justify-end"
            style={{ position: "relative" }}
          >
            <Image
              src={"/GirlThinking.png"}
              alt="alt"
              width={421}
              height={556}
              objectFit="cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
