import SuccessBtn from "../Buttons/SuccessBtn";
import CancelBtn from "../Buttons/CancelBtn";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const InputForm = () => {
  return (
    <div className="p-8 flex flex-col items-start gap-4 rounded-[16px] bg-[#222222]">
      <div className="font-bold text-[24px] text-white">
        Informations clients
      </div>
      <div className="w-full flex-col gap-2">
        <div className="font-bold text-[18px] text-white">
          Coordonnées<span className="text-[red]">*</span>
        </div>
        <input
          className="mt-2 bg-[#131517] appearance-none border-[1px] border-[#47494B] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
          id="inline-full-name"
          type="text"
          value="Nom/Prénom"
        />
      </div>
      <div className="w-full flex-col gap-2 px-8">
        <div className="font-medium text-[16px] text-white">
          Numero de téléphone<span className="text-[red]">*</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <div className="relative">
            <select
              className=" block appearance-none w-[100px]  bg-[#070706] border-[1px] border-[#47494B] text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-[#47494B]"
              id="grid-state"
            >
              <option>
                <Image
                  width={50}
                  height={50}
                  src="/Rectangle19327.svg"
                  alt="flag1937"
                />
                +33
              </option>
              <option>
                <Image
                  width={50}
                  height={50}
                  src="/Rectangle19327.svg"
                  alt="flag19371"
                />
                +34
              </option>
              <option>
                <Image
                  width={50}
                  height={50}
                  src="/Rectangle19327.svg"
                  alt="flag19371"
                />
                +35
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#A5A5A5]">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative ">
            <input
              className="block bg-[#131517] appearance-none border-[1px] border-[#47494B] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
              id="phone-number"
              type="text"
              value="Écrivez ici"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
              <PhoneIcon className="text-[#A5A5A5] text-[14px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col gap-2">
        <div className="font-bold text-[18px] text-white">
          Coordonnées<span className="text-[red]">*</span>
        </div>
        <div className="relative ">
          <input
            className="block w-full mt-2 bg-[#131517] appearance-none border-[1px] border-[#47494B] rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none "
            id="location"
            type="text"
            value="Écrivez ici"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[10px] text-[#A5A5A5]">
            <LocationOnIcon className="text-[10px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 w-full">
        <CancelBtn />
        <SuccessBtn />
      </div>
    </div>
  );
};

export default InputForm;
