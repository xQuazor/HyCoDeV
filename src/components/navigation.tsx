import styles from "../../styles/components/navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Navigation = () => {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const [isOpen, setIsOpen] = useState(false);
  const imageSizeDesktop = {
    width: (392 / 3) * 1.25,
    height: (100 / 3) * 1.25,
  };
  const imageSizeMobile = {
    width: 392 / 4,
    height: 100 / 4,
  };
  const checkHandler = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  const variantsList = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variantsItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <navigation className={styles.container}>
      <a href={"/home"}>
        <Image
          src="/../public/images/logo-hycodev.png"
          alt={"hycodev logo"}
          width={width < 600 ? imageSizeMobile.width : imageSizeDesktop.width}
          height={
            width < 600 ? imageSizeMobile.height : imageSizeDesktop.height
          }
          className={styles.navbar_image}
        />
      </a>
      <div
        style={
          width < 600
            ? {
                display: "flex",
                width: "4rem",
                height: "4rem",
                marginRight: "2rem",
                justifyContent: "center",
                alignItems: "center",
              }
            : { display: "none" }
        }
      >
        <input
          type="checkbox"
          className={styles.nav_toggle}
          id="nav-toggle"
          checked={!isOpen}
          onChange={checkHandler}
        />
        <label className={styles.navicon} htmlFor="nav-toggle">
          <span className={styles.navicon_bar}></span>
          <span className={styles.navicon_bar}></span>
          <span className={styles.navicon_bar}></span>
        </label>
      </div>
      <div
        className={styles.links}
        style={width >= 600 ? { display: "block" } : { display: "none" }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <Link href="/home" className={styles.navbar_item}>
          HOME
        </Link>
        <Link href="/the-team" className={styles.navbar_item}>
          THE TEAM
        </Link>
        <Link href="/publications-all" className={styles.navbar_item}>
          PUBLICATIONS
        </Link>
        <Link href="/software" className={styles.navbar_item}>
          SOFTWARE
        </Link>

        <Link href="/join-us" className={styles.navbar_item}>
          JOIN US
        </Link>
      </div>
      <motion.nav
        className={styles.links}
        style={
          isOpen && width < 600 ? { display: "block" } : { display: "none" }
        }
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <motion.ul variants={variantsList}>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/home" className={styles.navbar_item}>
              HOME
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/the-team" className={styles.navbar_item}>
              THE TEAM
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/publications-all" className={styles.navbar_item}>
              PUBLICATIONS
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/software" className={styles.navbar_item}>
              SOFTWARE
            </Link>
          </motion.li>
          <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/join-us" className={styles.navbar_item}>
              JOIN US
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </navigation>
  );
};
export default Navigation;