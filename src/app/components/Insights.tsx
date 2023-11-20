import Image from "next/image";

const data = {
  heading: "Insights",
  img: "https://www.innominds.com/hubfs/insigts.svg",
  img_txt: "A refence technology stack for a fintech/neo-bank",
  description:
    " Innominds & DataStax have created a framework for real time-applications and a reference architecture for how enterprise applications can be architected for high throughputs with real time event processing, real time AI including vector search for Neo-banks and Fintech. Similar architectures and frameworks have been developed for Telcos for AI Ops and running their Network Command Centers",
};

const Insights = () => {
  const { heading, img, img_txt, description } = data;
  return (
    <div>
      <h2 className="text-[48px] font-medium text-[#404040]  text-center my-2">
        {heading}
      </h2>
      <div className="flex flex-row row-2 px-[30px] items-center">
        <div className="w-1/2 p-[20px] bg-gradient-to-r from-[#E34D25] to-[#7F3AA4]">
          <p className="font-normal text-[#FFFFFF] text-[20px]">
            {description}
          </p>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <Image src={img} width={670} height={405} alt="" />
          <p className="text-center text-[16px] mb-[10px] font-[latoregular]">{img_txt}</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
