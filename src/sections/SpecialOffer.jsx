import Button from '../components/Button'
import {arrowRight} from '../assets/icons'
import {offer} from '../assets/images'

const SpecialOffer = () => {
  return (
    <section id="about-us" className="flex items-center justify-center max-xl:flex-col-reverse gap-10 max-container">
      <div>
        <img src={offer} width={773} height={687}/>
      </div>
      <div className="w-full">
        <h2 className="text-4xl font-family-palanquin font-bold lg:max-w-lg">
          Special <span className="text-coral-red">Offer</span>
        </h2>

        <p className="mt-4  text-lg">
        Unlock exclusive savings with our Special Offer! Discover premium-quality shoes at unbeatable prices, crafted to provide comfort, style, and durability. Whether you're looking for casual sneakers, elegant formals, or performance-driven sportswear, our collection has something for everyone. Don't miss the chance to elevate your footwear game while enjoying exceptional value. Shop now and step into a world of style and savings like never before!
        </p>

        <p className="mt-5 text-lg">
          Our dedication to detail and excellence ensure your satisfaction.
        </p>

        <div className="flex gap-5 mt-6">
        <Button label="Shop now" iconURL={arrowRight} />
        <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor='text-slate-gray'/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
