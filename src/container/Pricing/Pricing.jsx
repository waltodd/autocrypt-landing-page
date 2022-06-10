import React, { useState, useEffect } from "react";
import "./Pricing.scss";
import { motion } from "framer-motion";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
const Pricing = () => {
  const [prices, setPrices] = useState([]);
  const [activeFilter, setActiveFilter] = useState("MONTHLY");
  const border = prices[Math.floor(prices.length / 2)];

  console.log(border);
  useEffect(() => {
    const query = '*[_type == "pricing"]';

    client.fetch(query).then((data) => {
      setPrices(data);
    });
  }, []);

  const handlePriceFilter = (item) => {
    setActiveFilter(item);
  };
  return (
    <>
      <div className="app__pricing">
        <h2>
          Paid plan starts with a 7-day free trial,
          <br /> No credit card required
        </h2>
        <div className="app__price-container">
          <div className="app__flex app__price-filter">
            {["MONTHLY", "YEARLY - 2 MONTH FREE"].map((item, index) => (
              <div className="app__filter-content" key={`${item}-${index}`}>
                <button
                  onClick={() => handlePriceFilter(item)}
                  className={`app__price-filter-item app__flex p-text ${
                    activeFilter === item ? "item-active" : ""
                  }`}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div className="app__price-item-container">
            {prices.map((price, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                key={`${price}-${index}`}
                className={`app__price-item ${
                  price === border ? "item-border-top" : ""
                }`}
              >
                <p className="app__price-item-title">{price.name}</p>
                <p className="app__price-item-price">${price.price}</p>
                <p className="app__price-item-period">{price.period}</p>
                <div className="app__price-item-description">
                  {price.description.map((desc, index) => (
                    <p key={`${desc}-${index}`}>{desc}</p>
                  ))}
                </div>
                <button className="app__price-item-btn">
                  Start free trial
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Pricing, "app__pricing"),
  "pricing",
  "app__primarybg"
);
