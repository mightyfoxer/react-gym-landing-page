import Image from "next/image";
interface IconText {
  icon: string;
  text: string;
}
const Footer = () => {
  const IconText = ({ icon, text }: IconText) => {
    return (
      <div className="flex gap-4">
        <Image alt={`/${icon}`} width={20} height={20} src={`/${icon}`} />
        <p>{text}</p>
      </div>
    );
  };
  return (
    <>
      <div
        className="flex flex-col text-white bg-[#021318] w-full p-[100px] pb-4"
        id="Contact"
      >
        <div className="flex flex-col sm:flex-row justify-center text-[16px]">
          <div className="flex flex-col gap-6 sm:basis-1/2">
            <Image src={"/logo.svg"} alt="logo" width={148} height={48}></Image>
            <p>
              Rejoignez-nous sur nos réseaux sociaux pour
              <br /> rester connecté(e) avec notre communauté.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/neerfitness">
                <Image
                  src={"/facebook.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                ></Image>
              </a>
              <a href="https://www.instagram.com/neer.fitness/">
                <Image
                  src={"/instagram.svg"}
                  alt="instagram"
                  width={24}
                  height={24}
                ></Image>
              </a>

              {/* <Image
                src={"/twitter.svg"}
                alt="twitter  "
                width={24}
                height={24}
              ></Image> */}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  basis-1/2 justify-center">
            {/* <div className="flex flex-col gap-3 mt-8 sm:mt-0">
              <p className="font-medium mb-2 sm:mb-6">Informations</p>
              <p>Abonnements</p>
              <p>Séance d’essai</p>
              <p>FAQ </p>
            </div>
            <div className="flex flex-col gap-3  mt-8 sm:mt-0">
              <p className="font-medium mb-2 sm:mb-6">Catégories</p>
              <p>Cardio</p>
              <p>Fitness</p>
              <p>Musculation </p>
            </div> */}
            <div className="flex flex-col gap-3  mt-8 sm:mt-0">
              <p className="font-medium mb-2 sm:mb-6">Contactez-nous</p>
              {/* <a href="" */}
              <IconText
                icon="material-symbols_call-outline.svg"
                text="06.51.69.01.02"
              />
              <IconText
                icon="akar-icons_location.svg"
                text="18 Rue Gustave Eiffeil, 85170 Le Poiré-sur-vie"
              />
              <IconText icon="Vector.svg" text="coach@neerfitness.fr" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row border-t border-[#323131] text-xs mt-[50px] py-4 gap-4 sm:gap-16">
          <p>@ 2024 Neer Fitness</p>
          {/* <p>Conditions d&apos;utilisation | Politique de confidentialité</p> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
