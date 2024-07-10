// About.js

import React from "react";
import AboutStyled from "./About.styled";

const About = () => {
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
          <h3 className="title">Kontak</h3>
          <p>Email  : covid-app-info@email.com</p>
          <p>Instagram &nbsp; : @covid_app_info</p>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
