import { shoe8 } from "../assets/images"
import {arrowRight} from '../assets/icons'

const SuperQuality = () => {
  return (

    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className='text-4xl font-family-palanquin capitalize font-bold lg:max-w-lg'>We Provide You <span 
        className='text-coral-red'>Super</span><br /> <span className='text-coral-red'>Quality</span> Shoes</h2>

        <p className='mt-4 lg:max-w-lg info-text'>
        Step into style with our premium shoe collection. Discover unparalleled comfort, durability, and design crafted for every occasion. Elevate your footwear game with us today!
        </p>

        <p className="mt-5 info-text">
          Our dedication to detail and excellence ensure your <br />
          satisfaction
        </p>

        <button className="flex items-center mt-5 text-white bg-coral-red px-4 py-2 rounded-full w-fit duration-300 hover:shadow-lg">  
          View Details

        <img
          src={arrowRight}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
    </button>


      </div>

      <div>
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  ) 
}

export default SuperQuality