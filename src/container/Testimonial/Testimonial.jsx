import React, { useState, useEffect, useRef } from "react";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Testimonial.scss";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    const query = '*[_type =="testimonials"]';
    client
      .fetch(query)
      .then((result) => {
        setTestimonials(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="app__testimonial">
        <div className="app__flex app__testimonial-container">
          <div className="app__testimonial-left">
            <img width={278} src={images.DoubleQuotes} />
            <h2>
              What <br /> Customers Say
            </h2>
          </div>
          <motion.div className="app__testimonial-right">
            <motion.div className="app__testimonial-content">
              {testimonials.map((testimonial) => (
                <motion.div
                  className="app__testimonial-content-item"
                  key={testimonial}
                >
                  <img img width={100} src={images.DoubleQuotes} />
                  <div>
                    <p>"{testimonial.feedback}"</p>
                    <p>
                      {testimonial.name} /<span>{testimonial.company}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
