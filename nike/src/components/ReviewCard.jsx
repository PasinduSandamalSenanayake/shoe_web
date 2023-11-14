import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center">
        <img
            src={imgURL} 
            alt={customerName}
            className='rounded-full object-cover w-[120px] h-[120px]'
        />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

        
        <div className="flex gap-2 mt-2 justify-center items-center">
            <img
                src={star}
                width={24}
                height={24}
                className="object-contain m-0"
            />
            <p className="text-xl font-montserrat">({rating})</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-bold font-palanquin">{customerName}</h3>
    </div>
  )
}

export default ReviewCard