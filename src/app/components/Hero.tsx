import React from "react";
import Image from "next/image";
import bg_hero from "../../../public/assets/bg-hero.webp";
import header_logo from "../../../public/assets/innominds_logo.svg";
import arrow_icon from "../../../public/assets/default-arrow.svg";
import hero_img from "../../../public/assets/Innominds_Datastax.webp";

const navigation = [
  { name: "Partnership", href: "#" },
  { name: "Offerings", href: "#" },
  { name: "Insights", href: "#" },
  { name: "Client Success", href: "#" },
  { name: "IP & Accelerators", href: "#" },
];
const content = {
  hero_heading:
    "Reimagine the E-commerce Customer Experience leveraging Generative AI and Vector Search on your Private Cloud",
  hero_sub_heading: "Ravi Meduri &  Nidhi Bhatnagar | Innominds  & DataStax",
};

const Hero = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="h-fit bg-[url('https://2535467.fs1.hubspotusercontent-na1.net/hubfs/2535467/bg-hero.png')]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-none">
            <a href="#" className="-m-1.5 p-1.5 pr-14">
              <span className="sr-only">Innominds</span>
              <Image
                src={header_logo}
                width={140}
                height={45}
                alt="Innominds Header Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex rounded-md p-2.5 text-gray-700"
              // onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 m-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm leading-6 p-2 border-2 border-transparent text-gray-900 max-md:hidden hover:text-brandColor hover:border-2 hover:border-brandColor"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <div className="pt-[100px] px-10 flex flex-row gap-2 bg-url('https://2535467.fs1.hubspotusercontent-na1.net/hubfs/2535467/band-bg.png')">
        <div className="w-1/2">
          <h3 className="font-space break-words text-[34px] leading-[50px] font-medium mb-2.5 pt-4">
            {content?.hero_heading}
          </h3>
          <p className="text-3.5 font-normal text-[#374151] mb-4">
            {content?.hero_sub_heading}
          </p>
          <button className="bg-brandColor text-[#ffffff] text-[14px] px-9 py-[10px] inline-flex items-center rounded-[33px] active:bg-blue-600">
            Register Now&nbsp;
            <Image
                src={arrow_icon}
                // width={140}
                // height={45}
                alt="Innominds Header Logo"
              />
          </button>
        </div>
        <div>
          <Image
            src={hero_img}
            // width={565}
            // height={324}
            alt="Innominds Header Logo"
          />
        </div>
        {/* <h3 className="font-[Space Grotesk] text-[34px]">{content?.hero_heading}</h3> */}
      </div>
    </div>
  );
};

export default Hero;
