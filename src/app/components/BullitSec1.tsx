import ImageText from "./ImageText";

const BullitSec1 = () => {
    return (
        <div className={`bg-[#050618] p-[20px] sec1_container`}>
            <ImageText
                data={"https://www.innominds.com/hubfs/press-release.png"}
                attrs={{ height: "585px", width: "330px" }}
                order={{ first: 2, second: 1 }}
            >
                <div className="text-[#d0d3e5]">
                    <h1 className="font-bold">PRESS RELEASE</h1>
                    <p className="mb-[16px] italic">
                        Reading, Berk., UK + San Jose, Calif. – August 21, 2023<br></br>
                    </p>
                    <p>
                        Rugged device innovator,{" "}
                        <a href="https://bullitt-group.com/" target="_blank">
                            Bullitt Group
                        </a>{" "}
                        has, launched a disruptive and unique two-way satellite messaging
                        service –{" "}
                        <a href="https://bullitt.com/en-us/" target="_blank">
                            Bullitt Satellite Messenger
                        </a>{" "}
                        – and has teamed up with{" "}
                        <a href="/" target="_blank">
                            Innominds
                        </a>{" "}
                        to build and strengthen its integrated app and cloud service
                        offering, filling the gap of cellular network dead zones.<br></br>
                        <br></br>Launched in the US earlier this month, Bullitt Satellite
                        Messenger seamlessly integrates existing cell and satellite
                        networks. When cell service drops, Bullitt Satellite Messenger kicks
                        in, providing a continuous level of connectivity. This can be
                        essential in a number of situations, from mission and business
                        critical operations – such as remote field work and emergency
                        services - to those simply looking for reliable service in remote
                        areas where they live or explore.<br></br>
                        <br></br>
                        Bullitt selected Innominds to build the wrap around interface and
                        integration of the app for Bullitt Satellite Messenger. Innominds
                        is a specialist provider of digital transformation and software
                        product engineering services for leading enterprises and global
                        software product companies.
                    </p>
                </div>
            </ImageText>
        </div>
    );
};
export default BullitSec1;
