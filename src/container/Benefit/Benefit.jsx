import React, { useState, useEffect } from "react";
import "./Benefit.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
const Benefit = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const query = '*[_type == "benefits"]';

    client.fetch(query).then((data) => {
      setBenefits(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="app__benefits">
      <div className="app__benefits-container">
        <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__benefit-item-content"
        >
          {benefits.map((benefit, index) => (
            <div className="app__benefit-item" key={index}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                <img src={urlFor(benefit.imgUrl)} alt={benefit.name} />
                <h5>{benefit.name}</h5>
                <div className="benefit-border"></div>
                <p>{benefit.description}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Benefit, "app__benefits"), "app__primarybg");
