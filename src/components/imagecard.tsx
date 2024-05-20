import Image from "next/image";

interface ImageCardProps {
  image: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  title,
}: ImageCardProps) => {
  return (
    <>
      <div className="flex flex-col">
        <Image
          src={image}
          alt={image}
          width={300}
          height={300}
          className="h-full rounded-[17px]"
        />
        <div className="mt-[-66px] sm:mt-[-74px] w-[300px] bg-opacity-65 bg-[#262B1A] backdrop-blur-sm justify-between items-center text-center text-white text-[24px] sm:text-[30px] py-[15px] rounded-b-[17px]">
          {title}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
