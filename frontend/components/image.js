import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const StrapiImage = ({ image, className, width, height }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default StrapiImage;
