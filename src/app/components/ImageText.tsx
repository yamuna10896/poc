import Image from "next/image";

type Props = {
  data?: any;
  attrs?: any;
  children?: any;
  order?:any;
};

const ImageText = (props: Props) => {
  const { data, attrs, children,order } = props;
  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className={`w-[${attrs.width}] h-[${attrs.height}] flex justify-center relative object-contain order-${order.first}`}>
      <img
        src={data?.data?.attributes?.url || data}
        alt="image"
      />
      </div>
      <div className={`md:w-1/2 order-${order.second}`}>{children}</div>
    </div>
  );
};
export default ImageText;
