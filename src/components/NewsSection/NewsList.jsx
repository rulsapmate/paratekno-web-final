import NewsCard from "./NewsCard";
import profilePic1 from "../../assets/img/profile-pic-1.jpg";
import profilePic2 from "../../assets/img/profile-pic-2.jpg";
import profilePic3 from "../../assets/img/profile-pic-3.jpg";
import profilePic4 from "../../assets/img/profile-pic-4.jpg";

const blogData = [
  {
    title:
      "Seorang pemuda sukses kaya raya di usianya yang terbilang cukup muda🤩",
    description:
      "Rizky, seorang pemuda asal Bandung, berhasil mencuri perhatian...",
    imgSrc: profilePic1, // ✅ Ini benar
    date: "7 March, 2022",
    comments: 15,
  },
  {
    title: "Wanita Muda Ini Viral Berkat Konten Inspiratif 🙌📱",
    description:
      "Citra, seorang wanita muda yang aktif di media sosial, sukses...",
    imgSrc: profilePic2,
    date: "7 March, 2022",
    comments: 15,
  },
  {
    title: "Pelajar SMP Ciptakan Aplikasi Anti Bullying 👏",
    description:
      "Adit berhasil menciptakan aplikasi khusus yang membantu para korban bullying...",
    imgSrc: profilePic3,
    date: "7 March, 2022",
    comments: 15,
  },
  {
    title: "Petani Milenial Raup Ratusan Juta dari Sayur Organik 🥦🚜",
    description: "Bima memilih kembali ke desa dan menjadi petani modern...",
    imgSrc: profilePic4,
    date: "7 March, 2022",
    comments: 15,
  },
];

const NewsList = () => {
  return (
    <div className="news-container-main">
      <ul className="blog-list">
        {blogData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
