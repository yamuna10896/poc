import ImageText from "./ImageText"

const BullitSec2 = () => {
    return(
        <div className="bg-black flex-col items-center p-[20px]">
            <img src="https://www.innominds.com/hubfs/quotes.png" className="right-0" width={"110px"} height={"60px"}/>
            <div className="flex items-center">
            <ImageText
            data={"https://www.innominds.com/hubfs/image%206.png"}
            attrs={{width:"561px",height:"564px"}}
            order={{first:1,second:2}}
            >
            <div className="md:pl-[80px] text-[#d0d3e5] text-[16px] leading-[24px]">
                <p >
                “We’ve all experienced the inconvenience of dead zones in our cell service. But for many it’s more than an inconvenience, it’s a life-or-death situation, or simply the only way to communicate with the outside world. Satellite connectivity fills that gap on the fringes of connectivity. Innominds brought the depth of engineering expertise we required to help us build an absolutely seamless customer experience.”<br></br><br></br>
                Bullitt Satellite Messenger is the world’s first, and currently only, app to send text messages via a GEO satellite network. Devices ready to connect to the Bullitt Satellite platform have been available across Europe since April 2023. These include the Cat S75, the most reliable phone ever for advanced two-way satellite messaging, location sharing and SOS assistance and the motorola defy satellite link, a compact, lightweight accessory that allows any Android or iOS device to connect to the Bullitt Satellite Messenger platform.<br></br><br></br>
                On either device, the app integrates with the user’s existing contacts to provide a seamless experience when using satellite to communicate. The time to initially connect to the satellite and send a message is around 10 seconds.<br></br><br></br>
                </p>
                <h1 className="text-[#fefefe] text-[24px]">Jonathan Nattrass</h1>
                <p className="mb-[16px]">Chief Product Officer Bullitt Group</p>
            </div>
            </ImageText>
            </div>
        </div>
    )
}

export default BullitSec2