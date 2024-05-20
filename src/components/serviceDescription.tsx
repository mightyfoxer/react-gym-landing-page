import Image from "next/image";

interface ServiceDescriptionProps {
  title: string;
  image: string;
  content: string;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  image,
  content,
}: ServiceDescriptionProps) => {
  return (
    <>
      <div className="flex flex-row gap-[17px]">
        <div className="sm:mt-2">
          <Image src={image} alt="alt" width={60} height={60}></Image>
        </div>

        <div className="flex flex-col">
          <p className="text-white text-[14px] sm:text-[30px] font-bold">
            {title}
          </p>
          <p className="text-white text-[12px] sm:text-[18px]">{content}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceDescription;
