import styles from "../components/DigitalTransformation.module.scss"

const data = [
  {
    image:
      "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Home/digital-transformation.jpg",
    heading:
      "Devices, Apps and Analytics: The Fulcrum of Digital Transformation",
    desc: "Innominds is a leading AI-first, platform-led digital transformation and full cycle product engineering company offering co-creation services for building solutions utilizing digital technologies focused on Connected Devices, Cloud Apps, and Cognitive Analytics.",
  },
  {
    image:
      "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Home/spider.jpg",
    heading: "Connected Devices",
    desc: "We are an authorized design house for leading chip manufactures. We help in designing, manufacturing, and launching state-of-the-art devices including Telematics and BTE/LTE enabled devices. We assist organizations with seamless platform integrations and embedded system engineering. We build device solutions that encompass connected devices, IoT, and AI/ML.",
  },
  {
    image:
      "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Home/cloud.jpg",
    heading: "Cloud Apps",
    desc: "We orchestrate state-of-the-art devices on the cloud, and develop applications using microservices as building blocks. We deliver top-notch user experience with streamlined UX Design and UI Engineering. We follow enhanced SDLC process using quality engineering methods while ensuring utmost security.",
  },
  {
    image:
      "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Home/analytics.jpg",
    heading: "Cognitive Analytics",
    desc: "We provide cognitive analytics using innovative AI and ML technologies. We offer full lifecycle AI management support to build production-ready AI and analytics solutions with our leading autonomous AI platform—iFusion. We reduce Big Data lake project cost by 40% and provide a seamless platform for processing, collecting and analysing data.",
  },
];

const DigitalTransformation = () => {
  return (
    <div className="flex flex-col items-center p-[20px]">
      <div className={`${styles.main_container} grid gap-5 md:gap-0`}>
        {data.map((card, index) => {
          return (
            <div
              key={index}
              className={`${styles.card_container} max-w-[555px] overflow-hidden h-full flex flex-col relative group `}
            >
              <img src={card.image} className="relative" />
              <div className={`${styles.content_overlay} w-full h-full absolute top-0 left-0 translateY(0)`}>
              <div className={`${styles.hidden_block} absolute bottom-0 left-0 right-0 md:max-h-[60px] lg:max-h-[50px] px-[20px] md:group-hover:bottom-[20px] md:group-hover:h-[auto] md:group-hover:max-h-[200px]`}>
                <h1 className="text-white text-[20px] leading-[24px] font-bold mb-[32px]">
                  {card.heading}
                </h1>
                <div className={`${styles.hovered_content} relative w-full`}>
                  <p className="mb-[10px] text-[16px]  font-light leading-[22px] text-white">{card.desc}</p>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DigitalTransformation;
