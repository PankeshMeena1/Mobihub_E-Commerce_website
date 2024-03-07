import React, { useState } from 'react';
import "../../css/Marquee.css";
const Marquee = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const speed = isHovered ? 1 : 5; // Adjust the speed based on hover
    const container = document.getElementById('marquee-container');
    const containerWidth = container.offsetWidth;
    const mouseX = e.pageX - container.offsetLeft;
    const diff = mouseX / containerWidth;
    container.style.setProperty('--scroll-amount', diff * speed);
  };

  return (
    <div
      id="marquee-container"
      className="marquee-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="marquee">
        {/* Render your logos here */}
        <img src="https://www.nokia.com/sites/default/files/styles/scale_720_no_crop/public/2023-02/nokia-refreshed-logo-1_1.jpg.webp" alt="Logo 1" className="logo" />
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png" alt="Logo 2" className="logo" />

        <img src="https://w7.pngwing.com/pngs/604/428/png-transparent-vivo-logo-vivo-logo-smartphone-branding-blue-angle-electronics-thumbnail.png" alt="Logo 2" className="logo" />
        <img src="https://www.freepnglogos.com/uploads/xiaomi-png/smartphone-aiot-nel-futuro-xiaomi-top-trade-9.png" alt="Logo 2" className="logo" />
        
        <img src="https://www.freepnglogos.com/uploads/oppo-logo-png/smartphone-oppo-logos-27.png" alt="Logo 2" className="logo" />
        <img src="https://www.freepnglogos.com/uploads/huawei-logo-png/huawei-black-logo-19.png" alt="Logo 2" className="logo" />
        

        <img src="https://www.freepnglogos.com/uploads/google-text-logo-png-26.png" alt="Logo 2" className="logo" />
        <img src="https://www.freepnglogos.com/uploads/bbm-blackberry-messenger-logo--free-vector-logo-16.png" alt="Logo 2" className="logo" />

        <img src="https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png" alt="Logo 2" className="logo" />


        {/* Add more logos as needed */}
      </div>
    </div>
  );
};

export default Marquee;
