import React from "react";
import Image from "next/image";
import Link from "next/link";

function SocialMedia({ image, name, position, link }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-80 w-80 flex flex-col mb-3 mt-5">
        <Link href={link}>
          <a>
            <Image
              src={image}
              layout="fill"
              className="rounded-full"
              objectFit="cover"
              objectPosition={position}
            />
          </a>
        </Link>
      </div>
      <h1 className="font-light">{name}</h1>
    </div>
  );
}

export default SocialMedia;
