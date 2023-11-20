'use client'
import styles from "../components/enterprises.module.scss"

const content = {
  title:
    "Powering the Digital Next Initiatives of Global Companies - ISVs, Enterprises and OEMs",
  cards: [
    {
      bg_img: "https://www.innominds.com/hubfs/buzz-sec.jpg",
      heading:
        "IDC Profiles Innominds in its Latest Vendor Profile Report, “Innominds – Ready to Scale”",
      desc: "Innominds is uniquely positioned to provide a Chip to Cloud and cognitive service delivery to its customers as an integrated full-cycle digital product engineering player offering Spec to Ship, Prototype to Production, and Design to Deployment capabilities. From the MVP stage through helping companies scale to production, Innominds can engage and deliver software products.",
      navigate_to: "https://www.innominds.com/news/idc-profiles-innominds-in-its-latest-vendor-profile-report-innominds-ready-to-scale",
      btn:"Read More"
    },
    {
      bg_img:
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Home/IDC-web-banners-05.jpg",
      heading: "Asset Management Ecosystem",
      desc: "Driving value with US$1 million savings annually in inventory costs for a global supply chain digital solutions company.",
      navigate_to: "https://www.innominds.com/hubfs/Innominds-201612/Downloads/case-study/IoT-Solutions/IoT-Case-Study-A-Complete-Asset-Tracking-Ecosystem-for-an-Optimized-Warehouse.pdf?utm_campaign=Case%20Studies%20Tracking&utm_source=https://www.innominds.com/hubfs/Innominds-201612/Downloads/case-study/IoT-Solutions/IoT-Case-Study-A-Complete-Asset-Tracking-Ecosystem-for-an-Optimized-Warehouse.pdf",
      btn:"Read More"
    },
    {
      bg_img:
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Home/IDC-web-banners-02.jpg",
      heading: "Star Point Controller",
      desc: "Empowered a leading electric vehicle company to increase fleet management efficiency by 50% with software and hardware solution",
      navigate_to: "https://www.innominds.com/hubfs/Innominds-201612/Downloads/case-study/home/A-full-blown-software-and-hardware-solution-for-electric-charging-stations-star-point-controller.pdf?utm_campaign=Case%20Studies&utm_source=https://www.innominds.com/hubfs/Innominds-201612/Downloads/case-study/home/A-full-blown-software-and-hardware-solution-for-electric-charging-stations-star-point-controller.pdf",
      btn:"Read More"
    },
    {
      bg_img:
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Home/IDC-web-banners-03.jpg",
      heading: "Augmented Reality Platform",
      desc: "Enhanced features of an Augmented Reality platform to create a seamless experience across devices and enable remote collaboration",
      navigate_to: "https://www.innominds.com/hubfs/Innominds-201612/Downloads/case-study/home/Enhanced-Augmented-reality-platform-that-enables-remote-collaboration.pdf?utm_campaign=Downloads&utm_source=https://www.innominds.com/hubfs/Innominds-201612/Downloads/case-study/home/Enhanced-Augmented-reality-platform-that-enables-remote-collaboration.pdf",
      btn:"Read More"
    },
    {
      bg_img:
        "https://www.innominds.com/hubfs/Innominds-201612/img/IM-Home/IDC-web-banners-04.jpg",
      heading: "Enterprise Data Catalogue Product",
      desc: "Helping businesses unlock the value of data by unveiling a new data experience for Tableau users across multiple form factors",
      navigate_to: "https://www.innominds.com/hubfs/Innominds-201612/Downloads/case-study/home/Unique-enterprise-data-catalogue-product-across-multiple-form-factors-that-enables-a-new-way-of-experiencing-data.pdf?utm_campaign=Downloads&utm_source=https://www.innominds.com/hubfs/Innominds-201612/Downloads/case-study/home/Unique-enterprise-data-catalogue-product-across-multiple-form-factors-that-enables-a-new-way-of-experiencing-data.pdf",
      btn:"Read More"
    },

  ],
};

const handleNavigate = (url: any) => {
  window.open(url, '_blank')
}

const Enterprises = () => {
  return (
    <div className="flex flex-col items-center py-[50px]">
      <h1 className="w-3/4 text-[#e34d26] text-[32px] mb-[16px] font-bold text-center">{content.title}</h1>
      <div className={`${styles.exterprises_container} grid gap-4 p-[20px]`}>
        {content.cards.map((each, index) => {
          return (
            <div key={index} className={`${styles.individual_card} relative overflow-hidden flex flex-col relative h-fit group `}>
              <img src={each.bg_img} className="relative" />
              <div className={`${styles.content_overlay} w-full h-full absolute md:top-0 md:left-0 translateY(0)`}></div>
              <div className={`${styles.content_block} absolute bottom-0 left-0 right-0 md:max-h-[75px] sm:mb-[40px] lg:max-h-[50px] p-[20px] md:group-hover:h-[auto] md:group-hover:max-h-[220px]`}>
                <h2 className="text-white text-[20px] leading-[24px] sm:h-[40px] md:h-[70px] lg:h-[50px] hover:h-auto font-bold my-[10px]">
                  {each.heading}
                </h2>
                <div className={` ${styles.hovered_content} w-full leading-[22px] `}>
                  <p className="text-white font-light text-[14px] mb-[10px] text-ellipsis h-[40px] lg:h-auto overflow-hidden">{each.desc}</p>
                  <button className={`text-[#ec694d] text-[14px]`} onClick={() => handleNavigate(each.navigate_to)}>{each.btn}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};
export default Enterprises;
