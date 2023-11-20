
import React from 'react'
import styles from "./WeOffer.module.scss"
import img1 from "../../../public/assets/ux.svg"
import img2 from "../../../public/assests/AR-VR.svg";
import img3 from "../../../public/assests/Legacy-Apps.svg"
import img4 from "../../../public/assests/Native-Hybrid.svg"
import img5 from "../../../public/assests/Data-Visualization.svg"
import img6 from "../../../public/assests/Build-New-Products-and-Apps.svg"

const WeOfferComp = () => {
//  const  {heading,desc,cards} = strapiData

const strapiData = {
    heading:"We Offer",
    desc:"With advanced tools and technologies and engineering expertise we build seamless and responsive interfaces and design experiences that will convert your customers and users into die-hard fans",
    cards:[
        {
            title:"UX Research and Design Services",
            img:img1
        },
        {
            title:"Legacy Applications - UI Modernization",
            img:img1
        },
        {
            title:"Immersive (AR/VR) and Conversational Experiences",
            img:img1
        },
        {
            title:"Hybrid / Native / Progressive Applications",
            img:img1
        },
        {
            title:"Data Visualization Services",
            img:img1
        },
        {
            title:"Build New Products and Apps Using JS Frameworks",
            img:img1
        }
    ]
}

  return (
    <div className='flex flex-col justify-center items-center text-center px-[15px] py-[20px] md:mx-[60px]'>
        <h2 className='text-[#e84924] text-[30px] font-bold mb-[30px]'>{strapiData.heading}</h2>
        <p className='text-base md:w-3/4 pb-[40px]'>{strapiData.desc}</p>
        <div className='grid md:grid-cols-2 gap-6'>
        {strapiData.cards.map((card:any,index:any) => {
            const isEvenIndex = index % 2 === 0;
            const columnOrder = index < 3 ? index + 1 : index - 2;
            return(
            <div key={index} className={`${styles.card_container} flex items-center rounded-xl px-[40px] py-[20px] order hover:bg-[#e1b166] hover:border-yellow-500 border-2 border-transparent hover:border-2 hover:shadow-2xl ${index % 2 == 0 ? "bg-[linear-gradient(180deg,_#ffce78_0%,_#ffd796_100%)]" : "bg-[linear-gradient(180deg,_#f55337_0%,_#f6664c_100%)]"}`} style={{ order: columnOrder}}>
                {/* <img src={`${strapiEndPoints?.imagesBaseURL}${card?.img?.data?.attributes?.url}`}/> */}

                    <img src={card.img.src}/>
                <div className='flex ml-[20px]'>
                    {/* <h3 dangerouslySetInnerHTML={{
                        __html:card?.title
                    }}/> */}
                    <h3 className={`text-[22px] font-bold text-left ${index % 2 == 0 ? "": "text-white"}`}>{card.title}</h3>
                    {/* <img src={`${strapiEndPoints?.imagesBaseURL}${card?.right_arrow?.data?.attributes?.url}`}/> */}
                </div>
            </div>
            )
            })}
        </div>
    </div>
  )
}

export default WeOfferComp