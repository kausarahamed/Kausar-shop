import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((json) => setServices(json));
  }, []);
  return (
    <div>
      <h2>This is services: {services.length}</h2>
    </div>
  );
};

export default Services;
