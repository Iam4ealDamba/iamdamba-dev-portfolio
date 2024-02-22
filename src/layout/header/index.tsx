// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import LinkButton from "@/components/buttons/LinkButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Fragment, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

// ||||||||||||||||||||||||||||| Header Component ||||||||||||||||||||||||||||||||||||

interface IHeaderProps {}

const Header: FC<IHeaderProps> = ({}) => {
  // Hooks
  // Values
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [hide_menu, setHideMenu] = useState(false);
  const [hide_modal_menu, setHideModalMenu] = useState(true);
  const [scrollVal, setScrollVal] = useState(0);
  const router = usePathname().split("/")[1];

  // Functions
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollVal(position);
  };
  const HideMenuScroll = () => {
    if (window) {
      if (document.documentElement.scrollTop >= 250) {
        document.documentElement.scrollTop >= scrollVal
          ? setHideMenu(true)
          : setHideMenu(false);
      } else {
        setHideMenu(false);
      }
    }
  };

  // Effects
  useEffect(() => {
    const html_el = document.documentElement;
    const body_el = document.body;

    if (isMenuActive) {
      html_el.style.overflow = "hidden";
      body_el.style.overflow = "hidden";
    } else {
      html_el.style.overflow = "auto";
      body_el.style.overflow = "auto";
    }
  }, [isMenuActive]);
  useEffect(() => {
    window.addEventListener("scroll", HideMenuScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", HideMenuScroll);
    };
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return
  return (
    <Fragment>
      <header
        className={`fixed w-full top-0 left-0 z-10 transition-all ${
          hide_menu ? "-translate-y-[100%]" : "translate-y-0"
        } ${scrollVal > 100 ? "bg-tw_secondary" : "bg-transparent"}`}
      >
        <nav className="w-full max-w-[1600px] mx-auto flex px-6 py-6 items-center justify-between">
          <div aria-label="Logo">
            <Link href={"/"}>
              <Image src={"/logo.svg"} alt="Logo" width={220} height={220} />
            </Link>
          </div>
          <ul
            aria-label="Menu"
            className="flex items-center justify-center gap-x-4 max_md_2:hidden"
          >
            <li>
              <Link
                href={"/"}
                className={`${router == "" ? "active-link" : "text-tw_accent"}`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className={`${
                  router == "services" ? "active-link" : "text-tw_accent"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/portfolio"}
                className={`${
                  router == "portfolio" ? "active-link" : "text-tw_accent"
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <LinkButton link={"/contact"} text={"Contact"} />
            </li>
          </ul>
          <div
            aria-label="Menu Button"
            className="hidden px-4 py-4 rounded-full text-tw_text_dark bg-tw_primary max_md_2:block"
            onClick={() => {
              setHideModalMenu(!hide_modal_menu);
            }}
          >
            <FaBars className="text-xl" />
          </div>
        </nav>
      </header>
      <div
        className={`fixed z-[11] w-full h-[100vh] top-0 left-0 transition-all duration-300 bg-tw_bg ${
          hide_modal_menu ? "invisible opacity-0" : "visible opacity-100"
        }`}
      >
        <div
          aria-label="Close Button"
          onClick={() => {
            setHideModalMenu(!hide_modal_menu);
          }}
          className="absolute top-6 right-6 px-4 py-4 rounded-full text-tw_text_dark bg-tw_primary"
        >
          <FaX className="text-xl" />
        </div>
        <ul
          aria-label="Menu"
          className="w-full h-[100vh] flex-col items-center justify-center gap-y-12 flex"
        >
          <li>
            <Link
              href={"/"}
              className={`text-xl ${
                router == "" ? "active-link" : "text-tw_accent"
              }`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href={"/services"}
              className={`text-xl ${
                router == "services" ? "active-link" : "text-tw_accent"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href={"/portfolio"}
              className={`text-xl ${
                router == "portfolio" ? "active-link" : "text-tw_accent"
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <LinkButton
              link={"/contact"}
              text={"Contact"}
              style={"text-xl w-[250px]"}
            />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default Header;
