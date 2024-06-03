function Product() {
  return (
    <div className="w-[120px] flex flex-col justify-between">
      <div className="w-full h-[180px] bg-[#f2f2f2] block ">
        <img
          src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg"
          alt=""
        />
      </div>
      <h2 className="text-[17px] mt-2 mb-3 w-full overflow-hidden whitespace-nowrap text-ellipsis ">
        Title
      </h2>
      <h3 className="text-[13px]">10 Egp</h3>
      <button className="bg-[rgb(96,165,250)] text-black rounded-md my-2 py-2 px-3">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
