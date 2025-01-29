import Button from '../components/Button'
import {arrowRight} from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard';
import {useState} from 'react';


const Hero = () => {
  const [bigShoeImg,  SetBigShoeImg] = 
  useState(bigShoe1)
  return (

    <section id="home" className=" w-full flex xl:flex-row flex-col  justify-center max-container gap-10">
      <div className="mt-20 relative xl:w-2/5 flex-col justify-center itemms-start w-full max-xl:padding-x pt-28">
      
        <p className='text-xl text-coral-red'>Our Summer collections </p>

        <h1 className='text-7xl mt-[0.5em] font-bold'><span>The New Arrival</span><br />
        <span className='text-coral-red'>Nike</span> Shoes</h1>

        <p className='mt-5 text-base mb-8'>Discover stylish Nike arrivals, quality comfort,<br /> and innovation for your active life. </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-15 gap-16 text-lg">

            {statistics.map((stat) => (
                <div key={stat.label}>
                  <p className='text-[1.7em] font-bold font-family-palanquin'>{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
            ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center bg-hero bg-primary xl:min-h-screen max-xl:py-40">
        <img src={bigShoeImg} alt="Shoe display" width={610} height={300} className='object-contain relative z-10'/>

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:-left[10%] max-sm:px-6'>
        {shoes.map((shoe) => (
          <div key={shoe.bigShoe}>
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe) => SetBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
        </div>
      </div>
    </section>

  )
}

export default Hero