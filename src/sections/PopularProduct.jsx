import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      {/* Header Section */}
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-montserrat font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="text-base leading-relaxed text-slate-gray">
          Experience top-notch quality and style with our sought- <br />
          after selection.Discover a world of comfort, design, and value.
        </p>
      </div>

      {/* Product Grid */} 
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
