import React from "react";

const PriceCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl m-2 w-full">
            <div className="card-body">
                <h2 className="card-title">Online Bootcamp</h2>
                <div className="my-2">
                    <p className="text-gray-500 line-through">Rp 4.499.999</p>
                    <p className="text-red-500 text-xl font-bold">Rp 3.499.999 <span className="text-sm text-yellow-500">22% off</span></p>
                </div>
                <button className="btn btn-primary w-full mt-2">Daftar Sekarang</button>
                <button className="btn btn-secondary w-full mt-2">Klaim Discount Di sini</button>
                <div className="divider my-4">atau</div>
                <a href="#" className="text-center text-blue-500 underline">Lihat Detail Program</a>
            </div>
        </div>
    );
};

export default PriceCard;
