const content = {
  heading: "Clinet Success",
  card: [
    {
      title: "A Large US Based Bank",
      desc: "Supporting a large US bank in migrating an acquired bank's applications and data into core a Cassandra data platform.",
    },
    {
      title: "A Large US Based Energy Company",
      desc: "Migrating a large US energy provider from Cassandra to Astra using the Zero Downtime Migration approach",
    },
    {
      title: "An Australia Based Web 3.0 Network",
      desc: "Rearchitecting and scaling an Australia-based Web 3.0 social network to support their high growth in customer acquisition and usage by designing the migration from MySQL to Astra.",
    },
  ],
};
const ClinentSuccess = () => {
  return (
    <div className="bg-brandColor box-border">
      <h3 className="text-[40px] text-[#FFFFFF] py-[14px] text-center">
        {content?.heading}
      </h3>
      <div className="flex flex-row row-2 px-[30px] items-start">
        {content?.card?.map((item) => (                     
          <div className="w-1/3 px-[16px]">
            <div className="bg-[#EFA523] text-white text-[32px] p-2">
              <h3>{item?.title}</h3>
            </div>
            <p className="font-normal text-[#FFFFFF] text-[20px] leading-[30px] py-2">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinentSuccess;
