import Image from "next/image";

const BestInShow = () => {
  const content = {
    title: "'Best in Show' at MWC 2023",
    img1: "https://www.innominds.com/hubfs/Tims%20LinkedIn%20Post.png",
    img2: "https://www.innominds.com/hubfs/Kens%20LinkedIn%20Post.png",
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[40px] leading-[48px] text-center text-[#13152d] font-medium mb-[8px] pt-[20px]">
        {content.title}
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-around  p-[20px]">
        <div className="max-w-[557px] max-h-[987px] object-contain relative mr-[8px] mb-[10px]">
          <img src={content.img2}  alt="post" />
        </div>
        <div className="max-w-[557px] max-h-[1208px] relative mr-[lpx]">
          <img src={content.img1}  alt="post" />
        </div>
      </div>
    </div>
  );
};
export default BestInShow;
