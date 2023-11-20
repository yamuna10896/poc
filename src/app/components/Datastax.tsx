import Image from "next/image";

const data = {
  heading: "Partnership with DataStax",
  img: "https://www.innominds.com/hubfs/innominds-datastax.svg",
  description: " Innominds partners with DataStax to support enterprises in their modernization journey towards building realtime- scalable applications and AI workloads including Generative AI-powered applications. Innominds brings deep expertise in the internals of scalable distributed databases, realtime- and streaming data management, and realtime-AI and APIs to transform enterprise applications through DataStax technologies. "
}
const DataStax = () => {
  const { heading, img, description } = data;
  return (
    <div>
      <h3 className="text-[48px] text-center mb-2">{heading}</h3>
      <div className="flex flex-row row-2 px-[80px] py-[20px] ">
        <div className="w-1/2 flex justify-center order-2">
        <Image
          src={img}
          width={282}
          height={324}
          alt=""
          className="order-2"
        />
        </div>
        <p className="w-1/2 font-normal text-[#374151] text-[20px] order-1">{description}</p>
      </div>
    </div>
  );
};

export default DataStax;
