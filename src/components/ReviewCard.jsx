import { star } from "../assets/icons"

export const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="text-center mt-6 max-w-sm info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} width={24} height={24} className="object-contain m-0"/>
            <p className="text-xl text-slate-gray">({rating})</p>
        </div>

        <h3 className="mt-1 font-family-palanquin text-2xl text-center font-bold">{customerName}</h3>
    </div>
  )
}
