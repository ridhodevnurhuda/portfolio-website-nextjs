import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, motionValue } from "framer-motion";
import article3 from "../../public/images/articles/create loading screen in react js.jpg";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  //BAWAH INI WAKTU 03:24:00 - 03:28.48 ,  MOVING IMAGE, imgRef.current.style.display ADA ERROR : TypeError: Cannot read properties of null (reading 'style')
  // FUNGSINYA BUAT MENAMPILKAN PREVIEW GAMBAR SAAT MOUSE DIARAHKAN KE JUDUL ARTIKEL

  // const x = motionValue(0);
  // const y = motionValue(0);
  // const imgRef = useRef(null);

  // function handleMouse(event) {
  //     imgRef.current.style.display = "inline-block";
  //     x.set(event.pageX);
  //     y.set(-10);
  // }
  // function handleMouseLeave (event) {
  //     imgRef.current.style.display = "inline-block";
  //     x.set(0);
  //     y.set(0);

  // }
  // onMouseMove={handleMouse} onMouseMoveLeave={handleMouseLeave} . INI DITARUH DI {*}

  // FUNGSINYA BUAT MENAMPILKAN PREVIEW GAMBAR SAAT MOUSE DIARAHKAN KE JUDUL ARTIKEL
  //ATAS INI WAKTU 03:24:00 - 03:28.48 ,  MOVING IMAGE, imgRef.current.style.display ADA ERROR : TypeError: Cannot read properties of null (reading 'style')
  return (
    // {*} = DALEM BAWAH INI
    <Link href={link} target="_blank">
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <h2>
        <Image
          src={img}
          alt={title}
          className="w-96 h-auto hidden absolute rounded-lg"
        />
      </h2>
    </Link>
  );
};

const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duartion: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 ">{summary}</p>
      <p className="text-primary font-semibold dark:text-primaryDark">{time}</p>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link}></MovingImg>
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>Ridho Nurhuda | Articles Page</title>
        <meta name="description " content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Word Can Change the World" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1 md:gap-y-16 ">
            <FeatureArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeatureArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="/"
              img={article3}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
