import Image from "next/image";

import Logo from "../assets/logo.png";
import WhatsAppIcon from "../assets/wpp-icon.svg";
import Location from "../assets/location.svg";
import { ItemMenu } from "./header/ItemMenu";

export function Header() {
  return (
    <header>
      <div className="h-20 mx-5 rounded bg-pale-grey">
        <div className="w-full px-3">
          <div className="flex items-center justify-between">
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
            <div className="flex items-center gap-3 divide-x divide-gray">
              <div>
                <span className="font-semibold">41 99784-4448</span>
              </div>

              <div className="flex gap-2 px-2">
                <button className="p-1 bg-white rounded">
                  <Image src={WhatsAppIcon} alt="Whatsapp" height={20} />
                </button>
                <button className="p-1 bg-white rounded">
                  <Image src={Location} alt="Location" height={20} />
                </button>
              </div>
              <div className="mx-5 px-2">
                <button className="bg-light-green p-1 rounded ">
                  <span className="font-bold font">Escolha um produto</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
