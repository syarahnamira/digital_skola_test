import React from "react";
import Testimoni from "../Testimoni/Testimoni";
import PriceCard from "../PriceCard/PriceCard";

const Body = () => {
  return ( 
      <div className="container mx-auto mt-10 px-5">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Testimoni Alumni</h2>
            <Testimoni 
              name="Agus Ronogo Dwi Wibowo"
              description='"Saya merasa sangat terbantu dengan program bootcamp ini. Materi yang diajarkan sangat relevan dengan kebutuhan industri saat ini. Setelah 2 bulan mengikuti bootcamp, saya berhasil mendapatkan pekerjaan sebagai Digital Marketer di perusahaan ternama."'
              image="/person_1.jpg"
            />
            <Testimoni 
              name="Fahrul Muhammad Azhar"
              description='"Kursus ini benar-benar membuka wawasan saya tentang dunia digital marketing. Instruktur yang berpengalaman dan metode pengajaran yang interaktif membuat saya lebih mudah memahami konsep-konsep yang diajarkan. Setelah bootcamp, saya langsung diterima bekerja di salah satu perusahaan e-commerce terbesar di Indonesia."'
              image="/person_3.jpg"
            />
            <Testimoni 
              name="Nyoman Wulan Sari"
              description='"Pelatihan ini sangat komprehensif dan mendalam. Saya belajar banyak tentang strategi pemasaran digital yang efektif. Selain itu, jaringan alumni yang luas juga membantu saya dalam mencari peluang kerja. Saya sangat merekomendasikan program ini kepada siapa pun yang ingin berkarir di bidang digital marketing."'
              image="/person_2.jpg"
            />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="w-full lg:w-1/4 p-4">
            <PriceCard />
          </div>
        </div>
      </div>
  );
}

export default Body;
