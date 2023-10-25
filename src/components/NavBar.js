import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  TwitterIcon,
  DribbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwithcer from "./hooks/useThemeSwithcer";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
      h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }
      dark:bg-light
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
      h-[1px] inline-block  dark:bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }
      bg-light
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [mode, setMode] = useThemeSwithcer();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" relative w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light my-2 z-10 lg:px-16 md:px-12 sm:px-8">
      {/* HAMBURGER MENU START */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>
      {/* HAMBURGER MENU END */}

      {/* NAVBAR MENU WHEN SCREEN LAPTOP START */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink 
          rel="stylesheet" 
          href="/" 
          title="Home" 
          className="mr-4" />
          <CustomLink
            rel="stylesheet"
            href="/about"
            title="About"
            className="mr-4"
          />
          <CustomLink
            rel="stylesheet"
            href="/projects"
            title="Projects"
            className="mr-4"
          />
          <CustomLink
            rel="stylesheet"
            href="/articles"
            title="Articles"
            className="mr-4"
          />
        </nav>
        <nav className="flex items-center justify-center ">
          <motion.a
            rel="stylesheet"
            href="https://www.twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className=" w-6 mr-3 "
          >
            <TwitterIcon />{" "}
          </motion.a>
          <motion.a
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            rel="stylesheet"
            href="https://www.github.com"
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            rel="stylesheet"
            href="https://www.linkedin.com"
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a>
          {/* <motion.a className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}} rel="stylesheet" href="https://www.pinterest.com" target={"_blank"}><PinterestIcon/></motion.a> */}
          <motion.a
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            rel="stylesheet"
            href="https://www.dribble.com"
            target={"_blank"}
          >
            <DribbleIcon />
          </motion.a>
          <button
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${
              mode == "light" ? "bg-dark text-light" : "bg-light text-dark"
            }
              `}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-light"} />
            )}
          </button>
        </nav>
      </div>
      {/* NAVBAR MENU WHEN SCREEN LAPTOP END */}

      {/* NAVBAR MENU WHEN SCREEN UNDER LAPTOP START */}
      {isOpen ? (
        <motion.div initial={{scale:0, opacity:0, x:"-50%", y:'-50%'}} animate={{scale:1, opacity:1}} className=" min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              toggle={handleClick}
              rel="stylesheet"
              href="/"
              title="Home"
              className="mr-4"
            />
            <CustomMobileLink
              toggle={handleClick}
              rel="stylesheet"
              href="/about"
              title="About"
              className="mr-4"
            />
            <CustomMobileLink
              toggle={handleClick}
              rel="stylesheet"
              href="/projects"
              title="Projects"
              className="mr-4"
            />
            <CustomMobileLink
              toggle={handleClick}
              rel="stylesheet"
              href="/articles"
              title="Articles"
              className="mr-4"
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2 ">
            <motion.a
              rel="stylesheet"
              href="https://www.twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className=" w-6 mr-3 sm:mx-1 "
            >
              <TwitterIcon />{" "}
            </motion.a>
            <motion.a
              className="w-6 mx-3  sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              rel="stylesheet"
              href="https://www.github.com"
              target={"_blank"}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              className="w-6 mx-3  sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              rel="stylesheet"
              href="https://www.linkedin.com"
              target={"_blank"}
            >
              <LinkedInIcon />
            </motion.a>
            {/* <motion.a className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}} rel="stylesheet" href="https://www.pinterest.com" target={"_blank"}><PinterestIcon/></motion.a> */}
            <motion.a
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              rel="stylesheet"
              href="https://www.dribble.com"
              target={"_blank"}
            >
              <DribbleIcon />
            </motion.a>
            <button
              className={`ml-4 flex items-center justify-center rounded-full p-1 ${
                mode == "light" ? "bg-dark text-light" : "bg-light text-dark"
              }
              `}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-light"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* NAVBAR MENU WHEN SCREEN UNDER LAPTOP END */}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
