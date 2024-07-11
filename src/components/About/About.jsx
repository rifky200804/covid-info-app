// About.js

import React, { useEffect,useState } from "react";
import AboutStyled from "./About.styled";
import TextArea from "./TextArea/TextArea"
import UserImage from "../../assets/user.jpg"
import DeveloperImage from "../../assets/developer.jpeg"
const About = () => {
    const [saran, setSaran] = useState();
    const handleSubmit = () => {
        setSaran(null)
        alert("Success Mengirim Saran")
    }

    useEffect(()=>{
        setSaran(null)
    },[saran])

  return (
    <AboutStyled>
      <div className="container">
        <h3 className="title">Tentang Kami - Aplikasi Covid</h3>
        <p className="about_description">
          Aplikasi Covid kami menyediakan informasi terkini tentang kasus Covid
          di seluruh dunia dan Indonesia. Kami bertujuan untuk membantu pengguna
          mendapatkan data yang akurat dan mudah dipahami untuk menginformasikan
          keputusan mereka sehari-hari. Aplikasi ini tidak hanya menyajikan data
          statistik tetapi juga memberikan analisis yang mendalam untuk memahami
          tren dan perubahan dalam penyebaran Covid-19.
        </p>
        <div className="visi_misi">
          <h3 className="title">Visi dan Misi</h3>
          <p>
            Visi kami adalah menjadi sumber terpercaya untuk data Covid,
            sementara misi kami adalah menyediakan platform yang dapat
            diandalkan dan mudah digunakan untuk mengakses informasi terbaru
            secara cepat dan akurat. Kami berkomitmen untuk membantu masyarakat
            menghadapi pandemi ini dengan memberikan akses yang mudah terhadap
            informasi yang diperlukan.
          </p>
        </div>
        <div className="details">
          <h3 className="title">Tentang Aplikasi</h3>
          <p>
            Aplikasi kami menggabungkan data dari sumber-sumber terpercaya untuk
            menyajikan statistik Covid dalam format yang informatif. Pengguna
            dapat melihat grafik, tabel, dan pembaruan langsung tentang
            perkembangan kasus Covid di berbagai negara. Kami juga menyediakan
            fitur notifikasi dan pembaruan berkala untuk memastikan pengguna
            selalu mendapatkan informasi terbaru.
          </p>
          <p>
            Selain itu, aplikasi kami dilengkapi dengan fitur analisis data yang
            membantu pengguna untuk memahami tren dan pola penyebaran Covid-19
            berdasarkan data historis. Analisis ini dapat membantu pengguna dalam
            mengambil keputusan yang lebih baik terkait kebijakan kesehatan dan
            tindakan pencegahan.
          </p>
        </div>
        <div className="contact">
          <h3 className="title">Kontak Developer</h3>
          <div className="developer">
            <img src={DeveloperImage} alt="Foto Developer" className="img_developer"/>
            <div className="contact_developer">
              <p>Developer: Muhammad Rifky Syiahbudin</p>
              <p>Email Developer: rifkysyiahbudin200804@example.com</p>
              <p>Instagram Developer: @rifkysyiahbudin_</p>
            </div>
          </div>
          <p className="description_developer">
                Saya adalah seorang Software Developer dengan pengalaman luas dalam
                pengembangan aplikasi web . Saya memiliki Beberapa keahlian
                dalam berbagai bahasa pemrograman dan framework, serta
                berkomitmen untuk menciptakan aplikasi yang bermanfaat bagi
                masyarakat.
          </p>
        </div>
        <div className="suggestion_box">
          <h3 className="title">Kotak Saran</h3>
          <TextArea placeholder="Masukkan saran Anda di sini..." value={saran} onChange={(e)=>setSaran(e.target.value)}></TextArea>
        
          <button className="btn_primary" onClick={handleSubmit}>Kirim Saran</button>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
