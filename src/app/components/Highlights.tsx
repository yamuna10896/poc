
const content = {
    heading:"Partnership Highlights",
    description:"Innominds' 360 degree partnership with DataStax spans product engineering, professional services, value-added reseller and accelerators that enable better adoption of DataStax technologies. For enterprises this means achieving scalable architectures with world class Service level objectives and a guaranteed Total Cost of Ownership advantage."
}
const Highlights = () => {
  return (
    <div className="bg-[#EFA523] box-border">
      <h3 className="text-[48px] text-[#404040] py-[14px] text-center">{content?.heading}</h3>
      <p className="text-justify font-normal text-[#333] text-[22px] leading-[36px] pb-4 px-24">{content?.description}</p>
    </div>
  )
}

export default Highlights
