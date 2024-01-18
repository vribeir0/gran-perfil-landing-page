import Image from "next/image";

import Logo from "../assets/logo.png";
import { ItemMenu } from "./header/ItemMenu";
import WhatsAppIcon from "../assets/wpp-icon.svg";

export function Header() {
  return (
    <header
      className="w-full h-20 bg-pale-grey rounded ma-4 gap-12
    "
    >
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" height={80} />
            <ul className="flex items-center gap-14">
              <li>
                <ItemMenu name="Home" />
              </li>
              <li>
                <ItemMenu name="Sobre nós" />
              </li>
              <li>
                <ItemMenu name="Produtos" />
              </li>
              <li>
                <ItemMenu name="Contato" />
              </li>
            </ul>
          </div>
          <div className="flex items-center divide-x2 gap-3">
            <span className="font-bold">41 99784-4448</span>
            <div>
              <button className="bg-white rounded pa-8">
                <Image src={WhatsAppIcon} alt="Whatsapp" height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
