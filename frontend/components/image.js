import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const StrapiImage = ({ image, style, className }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      className={className}
    />
  );
};

export default StrapiImage;
