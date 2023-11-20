import React from 'react';
import Image from "next/image";

const data = {
    heading: "Offerings",
    img: "https://www.innominds.com/hubfs/offerings-illustration.svg",
    description: "Innominds offers full lifecycle services on DataStax including design and architecting, health checks, installation and setup of production and non-production clusters, performance tuning and optimization, observability, data modelling, migrations and upgrades, and developing APIs and analytics  "
  }

const Offerings = () => {
  const { heading, img, description } = data;

  return (
    <div>
      <h2 className="text-[48px] font-medium text-[#404040]  text-center my-2">{heading}</h2>
      <div className="flex flex-row row-2 px-[30px] items-center">
        <div className="w-1/2 flex justify-center">
        <Image
          src={img}
          width={640}
          height={428}
          alt=""
        />
        </div>
        <div className="w-1/2 p-[20px] bg-gradient-to-r from-[#E34D25] to-[#7F3AA4]">
        <p className="font-normal text-[#FFFFFF] text-[20px]">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Offerings
