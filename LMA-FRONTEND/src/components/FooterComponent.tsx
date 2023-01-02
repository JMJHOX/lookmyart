import React from "react";
import FooterLine from "../icons/FooterLine";

const FooterComponent = () => {
  return (
    <div className="bg-[#B6D9FF] text-[#000000] text-[12px] md:text-[14px] flex flex-col items-center h-[110px]">
      <FooterLine />
      <p>
        Copyrigth <b>© 2022 </b>LookMyArt. Todos los derechos reservados
      </p>
    </div>
  );
};
export default FooterComponent;
