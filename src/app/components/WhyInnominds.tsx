import Image from "next/image";

const data = {
    heading: "Why Innominds",
    img: "https://www.innominds.com/hubfs/innominds_25_logo%201.svg",
    description: "Innominds is the global preferred partner for Enterprises to design, execute and manage their high throughput and real-time applications running on DataStax. Our depth and breadth of expertise in scalable distributed databases, enterprise-grade implementations, reference architectures and accelerators are a powerful differentiator in delivering the modernization & transformation journeys of Enterprises."
  }
const WhyInnominds = () => {
  const { heading, img, description } = data;
  return (
    <div>
      <h3 className="text-[48px] text-center mb-2">{heading}</h3>
      <div className="flex flex-row row-2 px-[80px] py-[20px] ">
        <div className="w-1/2 flex justify-center items-start">
        <Image
          src={img}
          width={282}
          height={324}
          alt=""
        />
        </div>
        <p className="w-1/2 font-normal text-[#374151] text-[20px]">{description}</p>
      </div>
    </div>
  )
}

export default WhyInnominds
