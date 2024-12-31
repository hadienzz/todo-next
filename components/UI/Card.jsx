import Image from "next/image"

const Card = (props) => {
    return (
        <div className="flex flex-col justify-center items-center text-[white] text-center">
            <div className="h-[300px] w-[300px] relative overflow-hidden">
                <Image src={props.image} fill className="object-contain" alt={props.title} />
            </div>
            <h1 className="text-[32px] leading-normal py-10 md:text-5xl">{props.title}</h1>
            <p className="max-w-[299px] md:max-w-[500px] md:text-2xl">{props.description}</p>
        </div>
    )
}

export default Card