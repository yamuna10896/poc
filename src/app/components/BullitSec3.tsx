import ImageText from "./ImageText"

const BullitSec2 = () => {
    return(
        <div className="bg-black  p-[20px]">
            <ImageText
            data={"https://www.innominds.com/hubfs/RajGanti.png"}
            attrs={{width:"561px",height:"560px"}}
            order={{first:2,second:1}}
            >
            <div className="text-[#d0d3e5] text-[16px] leading-[24px] md:pl-[36px] md:pr-[20px]">
                <p>
                “Supporting Bullitt Group to build Bullitt Satellite Messenger was an exciting ‘world’s first’ project and a perfect example of how our integration expertise at the edge can be applied. An ‘invisible’ and seamless integration of satellite networks into a smartphone network creates enormous technical challenges. Combining technical integrations with an easy-to-use customer interface to create a compelling solution is one of the many areas where we excel.”<br></br><br></br>
                Bullitt Group is also licensing the patented Bullitt Satellite Messenger app and solution to third parties to offer a robust, always on service to customers.<br></br><br></br>
                Bullitt Satellite Messenger is the first 3GPP standards-based satellite NTN or ‘direct-to-device’ service. It connects with a cell service to access existing geostationary satellites, providing affordable and continuous coverage over existing, well-established infrastructure. With this new technology, customers can message over satellite, as long as they have a clear view of the sky.<br></br><br></br>
                Bullitt Satellite Messenger is built to utilize a cellular data connection wherever possible, with the intention of saving customers from unnecessarily using their satellite data allowance when a message could have been sent without charge over a standard terrestrial network. Device software switches to the satellite connection only when no cellular or Wi-Fi is available.<br></br><br></br>
                </p>
                <h1 className="text-[#fefefe] text-[24px] ">Raj Ganti</h1>
                <p className="mb-[16px]">President, Strategic Accounts Innominds</p>
            </div>
            </ImageText>
        </div>
    )
}

export default BullitSec2