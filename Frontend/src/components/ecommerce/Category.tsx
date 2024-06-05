import { Link } from "react-router-dom";

interface Iprops {
  title: string;
  img: string;
  prefix: string;
}

function Category({ title, img, prefix }: Iprops) {
  return (
    <div className="w-[180px] h-[180px]">
      <Link to={`/category/products/${prefix}`}>
        <div className="overflow-hidden rounded-full bg-[#f2f2f2]">
          <img className="w-full" src={img} alt="" />
        </div>
        <h4 className="text-center mt-3 text-[16px]">{title}</h4>
      </Link>
    </div>
  );
}

export default Category;
