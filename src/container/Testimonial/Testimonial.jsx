import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

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
  return <></>;
};

export default Testimonial;
