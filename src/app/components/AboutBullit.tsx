import ImageText from "./ImageText";

const AboutBullit = () => {
    const content = {
        title:"About Bullitt Group",
        secs:[
            {
                image:"https://www.innominds.com/hubfs/about-bullitt.png",
                desc:`Bullitt Group is an innovative British smartphone company
                specializing in ruggedized, and satellite-connected devices, apps and
                services. Bullitt Group enables its customers to use their device
                wherever they go—whether that be construction sites, off-shore fishing
                farms, or in rural places where terrestrial-based connectivity can’t
                reach. Bullitt Group’s heritage in offering resistant, reliable,
                all-proof rugged devices, is bolstered by its leveraging of satellite
                connectivity to offer the world’s most advanced satellite-connected
                smartphone. Bullitt Group’s satellite-connected devices enable
                customers to access connectivity services in the most challenging and
                remote locations, while also enabling its MNO partners to deliver
                connectivity beyond the limitations of terrestrial-based networks. For
                more information, visit: <a href="https://bullitt.com/en-us/" target="_blank">www.bullitt.com</a> / <a href="https://bullitt-group.com/" target="_blank">www.bullitt-group.com</a>.`,
                order:[2,1]
            },
            {
                image:"	https://www.innominds.com/hubfs/about-innominds.png",
                desc:`Innominds is an AI-first, platform-led digital transformation and full-cycle product engineering services company headquartered in San Jose, CA. Innominds powers the Digital Next initiatives of global enterprises, software product companies, OEMs, and ODMs with integrated expertise in devices and embedded engineering, software apps and product engineering, analytics and data engineering, quality engineering, cloud and DevOps, and security. It works with ISVs to build next-generation products, SaaSify, transform total experience, and add cognitive analytics to applications. Visit:<a> www.innominds.com</a>`,
                order:[1,2]
            }
        ]
    }
  return (
    <div className="bg-black  p-[20px] ">
        <h2 className="text-center bg-clip-text bg-[linear-gradient(180deg,_#ffffff_0%,_#838597_100%)] text-transparent text-[48px] font-medium mb-[30px]">{content.title}</h2>
      {/* <ImageText
        data={"https://www.innominds.com/hubfs/about-bullitt.png"}
        attrs={{ width: "570px", height: "328px" }}
        order={{ first: 2, second: 1 }}
      >
        <div className="text-[#d0d3e5] text-[16px] leading-[24px] md:pl-[36px] md:pr-[20px] sec1_container">
          <p></p>Bullitt Group is an innovative British smartphone company
          specializing in ruggedized, and satellite-connected devices, apps and
          services. Bullitt Group enables its customers to use their device
          wherever they go—whether that be construction sites, off-shore fishing
          farms, or in rural places where terrestrial-based connectivity can’t
          reach. Bullitt Group’s heritage in offering resistant, reliable,
          all-proof rugged devices, is bolstered by its leveraging of satellite
          connectivity to offer the world’s most advanced satellite-connected
          smartphone. Bullitt Group’s satellite-connected devices enable
          customers to access connectivity services in the most challenging and
          remote locations, while also enabling its MNO partners to deliver
          connectivity beyond the limitations of terrestrial-based networks. For
          more information, visit: <a href="https://bullitt.com/en-us/" target="_blank">www.bullitt.com</a> / <a href="https://bullitt-group.com/" target="_blank">www.bullitt-group.com</a>.
        </div>
      </ImageText> */}
      {content.secs.map((each,index:any) => (
        <ImageText
        key={index}
        data={each.image}
        attrs={{ width: "570px", height: "328px" }}
        order={{ first: each.order[0], second: each.order[1] }}
      >
        <div className="text-[#d0d3e5] text-[16px] leading-[24px] md:pl-[36px] md:pr-[20px] sec1_container">
          <p></p>{each.desc}
        </div>
      </ImageText>
      ))}
      
    </div>
  );
};

export default AboutBullit;
