import React from "react";
import Jody from "../assets/1.png";
import Foto from "../assets/saya.jpg";
import layoutofberanda from "../assets/Layout of beranda.png";
import layoutoftentangandkontak from "../assets/Layout of tentang and kontak.png";

export const Curious = ({ width }) => {
  return (
    <>
      <a
        href="https://storyset.com/illustration/job-hunt/cuate#E25E3EFF&hide=&hide=complete"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={width == null ? 300 : width}
          height={width == null ? 300 : width}
          src={Jody}
          alt="1.png"
        />
      </a>
    </>
  );
};
export const LayoutOFBeranda = () => {
  return (
    <>
      <img
        className="full-width"
        src={layoutofberanda}
        alt="Layout of beranda.png"
      />
    </>
  );
};
export const LayoutOFTK = () => {
  return (
    <>
      <img
        className="full-width"
        src={layoutoftentangandkontak}
        alt="Layout of tentang and kontak.png"
      />
    </>
  );
};
export const Pict = () => {
  return (
    <>
      <img
        className="full-width"
        src={Foto}
        alt="saya.jpg"
        style={{ width: 500 }}
      />
    </>
  );
};
