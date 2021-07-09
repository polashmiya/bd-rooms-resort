import React, { useState } from "react";
import Title from "./Title";
import { FaWifi, FaWrench, FaAppleAlt, FaLockOpen } from "react-icons/fa";
const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <FaWifi />,
      title: "Solving Wifi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, atque.",
    },
    {
      icon: <FaWrench />,
      title: "Settings Everything",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, atque.",
    },
    {
      icon: <FaAppleAlt />,
      title: "Apple Unlock",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, atque.",
    },
    {
      icon: <FaLockOpen />,
      title: "Unlock Everything",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, atque.",
    },
  ]);
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((service, index) => (
          <article className="service" key={index}>
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
