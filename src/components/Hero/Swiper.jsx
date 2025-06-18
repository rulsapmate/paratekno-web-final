import React, { useState } from "react";
import desktopImg from "../../assets/img/desktop.jpg";
import bgImg from "../../assets/img/bg-img.jpg";
import mobileImg from "../../assets/img/mobile.jpg";
import websiteImg from "../../assets/img/website.jpg";
import bgImg2 from "../../assets/img/bg-img2.jpg";
import bgImage from "../../assets/img/bg-image.jpg";

export default function Swiper() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slideData = [
    {
      img: desktopImg,
      title: "Visi Kami",
      description:
        "Kami memiliki visi untuk menjadi pemimpin dalam solusi teknologi inovatif yang memberdayakan bisnis dan individu untuk mencapai potensi penuh mereka di era digital.",
    },
    {
      img: bgImage,
      title: "Misi Kami",
      description:
        "Misi kami adalah memberikan layanan IT berkualitas tinggi, mulai dari pengembangan web dan aplikasi hingga layanan cloud, yang disesuaikan dengan kebutuhan unik setiap klien.",
    },
    {
      img: mobileImg,
      title: "Aplikasi Mobile",
      description:
        "Bangun aplikasi mobile revolusioner untuk iOS dan Android. Kami menggabungkan desain intuitif dengan fungsionalitas canggih untuk pengalaman pengguna yang tak tertandingi.",
    },
    {
      img: websiteImg,
      title: "Desain Website",
      description:
        "Ciptakan kesan pertama yang tak terlupakan dengan desain website profesional dan responsif. Kami fokus pada estetika dan pengalaman pengguna yang optimal.",
    },
    {
      img: bgImg,
      title: "Cloud Computing",
      description:
        "Manfaatkan kekuatan cloud dengan solusi Huawei Cloud kami. Skalabilitas, keamanan, dan efisiensi untuk infrastruktur digital Anda.",
    },
    {
      img: bgImg2,
      title: "Inovasi Tanpa Batas",
      description:
        "Kami terus berinovasi, menjelajahi teknologi baru seperti AI dan IoT untuk memberikan solusi masa depan yang relevan dan transformatif.",
    },
  ];

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
    );
  };

  const getOrderedSlides = () => {
    const reordered = [...slideData];
    return [
      ...reordered.slice(currentSlideIndex),
      ...reordered.slice(0, currentSlideIndex),
    ];
  };

  const orderedSlidesForRender = getOrderedSlides();

  return (
    <div className="swiper">
      <div className="slider">
        {orderedSlidesForRender.map((slide, index) => (
          <div
            key={index}
            className="slides"
            style={{ "--img": `url(${slide.img})` }}
          >
            <div className="content">
              <div className="desc-content">
                <h1 className="text-2xl font-bold">{slide.title}</h1>
                <p className="opacity-60">{slide.description}</p>
              </div>
              <div className="button-wrapper">
                <button type="button" className="content-action">
                  Read more <i className="ri-arrow-right-double-line"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <span className="prev" onClick={handlePrev}>
          <i className="ri-arrow-left-s-line"></i>
        </span>
        <span className="next" onClick={handleNext}>
          <i className="ri-arrow-right-s-line"></i>
        </span>
      </div>
    </div>
  );
}
