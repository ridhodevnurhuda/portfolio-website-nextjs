

import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {TwitterIcon,DribbleIcon, GithubIcon,LinkedInIcon,PinterestIcon, SunIcon, MoonIcon} from './Icons';
import {motion} from "framer-motion";
import useThemeSwithcer from './hooks/useThemeSwithcer';

const CustomLink =({href, title, className=""}) =>{
  const router = useRouter();
  console.log(router);
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
      h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ?'w-full' : "w-0"}
      dark:bg-light
      `}>
        &nbsp;
      </span>
    </Link>
  )
}
const NavBar = () => {


  const[mode, setMode] = useThemeSwithcer();


  return (
    <header 
    className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
        <nav>
            <CustomLink rel="stylesheet" href="/" title="Home" className='mr-4' />
            <CustomLink rel="stylesheet" href="/about" title="About" className='mr-4'/>
            <CustomLink rel="stylesheet" href="/projects" title="Projects" className='mr-4'/>
            <CustomLink rel="stylesheet" href="/articles" title="Articles" className='mr-4'/>
        </nav>
        <nav className='flex items-center justify-center '>
            <motion.a rel="stylesheet" href="https://www.twitter.com" target={"_blank"} whileHover={{y:-2}} className=' w-6 mr-3 '>
            <TwitterIcon/> </motion.a>
            <motion.a className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}} rel="stylesheet" href="https://www.github.com" target={"_blank"}><GithubIcon/></motion.a>
            <motion.a className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}} rel="stylesheet" href="https://www.linkedin.com" target={"_blank"}><LinkedInIcon/></motion.a>
            {/* <motion.a className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}} rel="stylesheet" href="https://www.pinterest.com" target={"_blank"}><PinterestIcon/></motion.a> */}
            <motion.a className='w-6 ml-3' whileHover={{y:-2}} whileTap={{scale:0.9}} rel="stylesheet" href="https://www.dribble.com" target={"_blank"}><DribbleIcon/></motion.a>
            <button
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${mode == "light" ? "bg-dark text-light": "bg-light text-dark"}
            `}
            onClick={() => setMode(mode === "light"? "dark" : "light")}
            >
              {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-light"}/>}
            </button>
        </nav>
        <div  className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
    </header>
  )
}

export default NavBar