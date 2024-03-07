import "../../css/Services.css";
import { FiShield, FiChevronRight  } from 'react-icons/fi'; // Importing icons from react-icons package
import { CiMobile1 } from "react-icons/ci";
import { FaExchangeAlt } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
const Services = () => {
  return (
    <>
      <div className='our-services'>
        <h1>Our Services</h1>
        <p>Trusted. Secure. Reliable</p>
      </div>

      <div className='protect-container'>
        <div className='custom-content'>
          <div>
            <h2>Mobihub Screen Protect <FiChevronRight /></h2>
            <p>Screen Protection against Accidental, Liquid Damage Avail 2 Claims Per year</p>
          </div>
          <div className='logo-container'> {/* Change the class name here */}
            <FiShield />
          </div>
        </div>
        <div className='custom-content'>
          <div>
            <h2>Mobihub Complete Protect<FiChevronRight /></h2>
            <p>Safeguard your smartphone Against Accidental & Liquid Damages</p>
          </div>
          <div className='logo-container'> {/* Change the class name here */}
          <GoShieldCheck />
          </div>
        </div>
        <div className='custom-content'>
          <div>
            <h2>Smartphone Quality<FiChevronRight /></h2>
            <p>We are committed to provide the best quality at an honest price.</p>
          </div>
          <div className='logo-container'> {/* Change the class name here */}
          <CiMobile1 />
          </div>
        </div>
        <div className='custom-content'>
          <div>
            <h2>Mobihub Exchange<FiChevronRight /></h2>
            <p>Exchange your old Smart Phone in three simple steps</p>
          </div>
          <div className='logo-container'> {/* Change the class name here */}
            <FaExchangeAlt />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
