import Image from "next/image";

const Heroes = () => {
    return ( 
        <div className="flex flex-col item-center justify-center max-w-5xl ">
            <div className="flex item-center">
                <div className="relative w-[500px] h-[300px] sm:w-[450px] sm:h-[350px] md:h-[400px] md:w-[600px]">
                    <Image
                        src="/hero.svg"
                        alt="hero"
                        className="object-contain"
                        fill
                    />
                </div>
                <div className="relative h-[400px] w-[600px] hidden md:block">
                <Image
                    src="/reading.svg"
                    alt="hero"
                    className="object-contain"
                    fill
                    objectFit="cover"
                    />
                </div>

            </div>
        </div>
     );
}
 
export default Heroes;