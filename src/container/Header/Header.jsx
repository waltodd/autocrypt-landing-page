import React from "react";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <h1 className="head-text">Easiest way to mining your bitcoin</h1>
              <p className="p-text">
                Easiest way to mining your bitcoin Autocryp is the place to buy
                and sell Bitcoin, Ethereum and various kinds of Digital Assets
                in Indonesia. Then, book your weekly, bi-weekly or one-off clean
                online with imminent confirmation.
              </p>
              <button className="app__header-btn">get started</button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.artboard} alt="artboard" />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
