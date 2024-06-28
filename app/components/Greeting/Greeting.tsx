import React from "react";
import Image from "next/image";

const Greeting = () => {
    return (
        <div className="p-5">
            <article className="w-full max-w-lg mx-auto">
                <h2 className="text-xl mt-4 mb-2">Hi <span className="text-xl font-bold">Syarah Namira</span>, Selamat datang di</h2>
                <h1 className="text-2xl font-bold mb-2">Digital Marketing Bootcamp</h1>
                <p className="text-sm mb-1">Raih karir impian dengan pelatihan intensif dan eksklusif bersama para jagoan</p>
                <p className="text-sm mb-2">99% Alumni Telah bekerja di</p>
                <div className="mt-2">
                    <div className="flex w-full space-x-2">
                        <div className="card rounded-box grid h-20 flex-grow place-items-center overflow-hidden">
                            <Image alt="Bukalapak" src="/bukalapak.png" width={100} height={100} className="object-contain h-16" />
                        </div>
                        <div className="card rounded-box grid h-20 flex-grow place-items-center overflow-hidden">
                            <Image alt="Gojek" src="/gojek.png" width={100} height={100} className="object-contain h-16" />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Greeting;
