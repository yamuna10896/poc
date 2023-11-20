import ImageText from "./ImageText"

const DuplicaeComp = () => {
    return(
            <ImageText
            data={"https://www.innominds.com/hubfs/press-release.png"}
            attrs={{height:"1000",width:"324"}}
            order={{first:1,second:2}}
            >
            <p>Innominds offers full lifecycle services on DataStax 
            including design and architecting, health checks, installation 
            and setup of production and non-production clusters, performance 
            tuning and optimization, observability, data modelling, migrations 
            and upgrades, and developing APIs and analytics</p>
            </ImageText>
    )
}
export default DuplicaeComp