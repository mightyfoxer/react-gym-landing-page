import Image from "next/image";

const MapBox = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-white justify-between items-center sm:px-[100px] gap-6 sm:gap-[90px] mt-[100px]">
        <Image
          src={"/mapbox.png"}
          alt="map"
          width={680}
          height={437}
          className="basis-1 md:basis-1/2"
        ></Image>
        <div className="flex flex-col justify-between items-center sm:items-start basis-1 md:basis-1/2 gap-[12px]">
          <p className="text-[24px] sm:text-[55px] font-bold">Neer Fitness</p>
          {/* <p className="text-[14px] sm:text-[18px] font-semibold">
            Une salle accueillante pour les débutants comme pour les experts, où
            vous vous sentirez à l&apos;aise.
          </p> */}
          <p className="text-[14px] text-center sm:text-left sm:text-[18px]">
            18 RUE GUSTAVE EIFFEL
            <br />
            DERRIÈRE LE BATIMENT EN BOIS DESMAS. <br />
            85170 LE-POIRÉ-SUR-VIE
          </p>
          <a href="tel:+33651690102">
            <button className="text-[14px] sm:text-[20px] rounded-full bg-[#34C5F3] text-white py-[10px] px-[16px] sm:py-[20px] sm:px-[32px] flex items-center">
              <span className="pr-2">
                <Image
                  src={"/ion_call.svg"}
                  alt="phone"
                  width={24}
                  height={24}
                />
              </span>
              06 51 69 01 02
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MapBox;
