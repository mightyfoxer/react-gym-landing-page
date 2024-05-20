import Navigation from "./navigation";
import Analytic from "./analytic";
import Service from "./service";
import Category from "./category";
import Intro from "./introduction";
import MapBox from "./mapbox";

const Content = () => {
  return (
    <div className="">
      <Navigation></Navigation>
      <div className="p-4">
        <div>
          <Analytic />
          <div className="justify-between items-center mt-[100px]">
            <p className="text-white text-xl sm:text-[55px] text-center lg:mb-[12px] xl:mb-[10px] mb-[8px]">
              Pourquoi nous choisir ?
            </p>
            <p className="text-white text-[14px] sm:text-[18px] text-center mt-[5px] sm:mt-[25px]">
              Une salle qui correspond à vos besoins et à votre style de vie
              vous
              <br /> motivera davantage à vous entraîner régulièrement.
            </p>
          </div>
          <Service />
          <div className="flex flex-row justify-between items-center mt-[100px]">
            <p
              className="text-white sm:basis-1/2 text-center"
              style={{ margin: "0 auto" }}
            >
              Afin de t&apos;encourager à donner le meilleur de toi-même à
              chaque entraînement, notre club est équipé des dernières
              technologies en matière de matériel et d&apos;équipements
              sportifs.
            </p>
          </div>
          <Category />
        </div>
        <Intro />
        <MapBox />
      </div>
    </div>
  );
};

export default Content;
