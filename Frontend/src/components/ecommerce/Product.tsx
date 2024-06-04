import { TProduct } from "../../types";

function Product({ title, price, img }: TProduct) {
  return (
    <div className="w-[120px] flex flex-col justify-between">
      <div className="w-full h-[180px] bg-[#f2f2f2] block ">
        <img src={img} alt={title} />
      </div>
      <h2 className="text-[17px] mt-2 mb-3 w-full overflow-hidden whitespace-nowrap text-ellipsis ">
        {title}
      </h2>
      <h3 className="text-[13px]">{price} Egp</h3>
      <button className="bg-[rgb(96,165,250)] text-black rounded-md my-2 py-2 px-3">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
