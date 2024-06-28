import React from "react";
import Image from "next/image";

interface TestimoniProps {
    name: string;
    description: string;
    image: string;
}

const Testimoni = ({ name, description, image }: TestimoniProps) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl m-4 w-full">
            <div className="md:flex md:flex-row flex-col items-center">
                <figure className="md:w-1/3 w-full flex justify-center p-4">
                    <Image alt={name} src={image} width={500} height={500} className="rounded-md" />
                </figure>
                <div className="card-body md:w-2/3 w-full">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Testimoni;
