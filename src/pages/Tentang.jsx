import React, { useContext, useEffect, useState } from "react";
import { DirectButton, ScrollTop } from "../components/Button";
import { ThemeContext } from "../context/themeContext";
import { Pict } from "../components/Assets";
import {
  LayoutOFBeranda,
  LayoutOFTK,
  PPGithubHendri,
} from "../components/Assets";
import {
  AssetsCode,
  FooterCode,
  HeaderCode,
  NavBarCode,
} from "../components/CodeRenderer";

const Tentang = () => {
  const { theme } = useContext(ThemeContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    });
  }, []);
  return (
    <>
      <main className={theme}>
        {showScrollButton && (
          <ScrollTop
            actions={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
           />
        )}
        <h1 style={{ marginBottom: 20 }}>Data Diri Saya</h1>
        <div className="container column minimal-gap">
          <div className="container column half-width minimal-gap">
            <h3 id="komponenhalaman">Nama : Jody Fabian Lingga</h3>
            <h3 id="komponenhalaman">Nim : 120140035</h3>
            <h3 id="komponenhalaman">Kelas : PWL-RB</h3>
            <p>
            Halo, saya Jody Fabian Lingga, merupakan seorang mahasiswa dengan program studi Teknik Informatika. Saya berasal dari Sumatera Utara, lebih tepatnya di Kabupaten Dairi, Kecamatan Pegagan Julu I, Sumbul Pegagan. Sekarang saya berumur 20 tahun, dan sedang menjalani perkuliahan semester 7. Saya merupakan anak kedua dari tiga bersaudara dan merupakan anak laki-laki satu-satunya di keluarga saya. Hobby saya adalah olahraga dan saya suka bermain game Online
            </p>
          </div>
          <Pict />
        </div>
      </main>
    </>
  );
};

export default Tentang;
