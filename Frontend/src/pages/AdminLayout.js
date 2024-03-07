
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faPlus, faListAlt, faTags, faTicketAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const AdminLayout = () => {
  const [userData, setUserData] = useState(null);
  const [Username, setUserName] = useState("");
  // const [Userdata, setUserData]=useState({});
  // const [UserEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const decodetoken = parseJwt(token);
      let name = decodetoken.Name;
      // let email = decodetoken.Email;
      setUserName(name);
      // setUserEmail(email);
    }
    catch (error) {
      console.log(error)
    }

  }, [])
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
  const handlelogout = () => {
    setUserName("")
    setUserData("")
    // setUserEmail("")
    localStorage.removeItem("token");
    alert("You succsefully Logout!!")
    navigate("/home");
  };


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/apilogin/user/data", { withCredentials: true });
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div style={{ border: "1px solid black", padding: "2%" }}>Header </div>

      <div className="app">
        <div className="navbar">
          <div className="brand">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span className="brand-text">Admin Panel</span>
          </div>
          <div style={{ height:"20%"}}>
            {userData ? (
              <ul>

                <img src={userData.image} alt="User Avatar" height="80" width="80" style={{ borderRadius: "50%", marginLeft: "20%" }} />
                <li style={{ textAlign: "center", listStyle: "none", marginTop: "10%" }}>{userData.displayName}</li>

                {/* Add more user data fields as needed */}
              </ul>
              
            ) : (
              <p>{Username ? Username : "Admin"}</p>
            )}
        
          </div>
          <Link to="/admin_layout/Admin_dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
          <Link to="/admin_layout/ProductList">
            <FontAwesomeIcon icon={faBox} /> Products
          </Link>
          <Link to="/admin_layout/add_product">
            <FontAwesomeIcon icon={faPlus} /> Add Product
          </Link>
          <Link to="/admin_layout/orderdetails">
            <FontAwesomeIcon icon={faListAlt} /> Order Details
          </Link>
          <Link to="/admin_layout/add-brand">
            <FontAwesomeIcon icon={faTags} /> Add Brand
          </Link>
          <Link to="/admin_layout/add-coupon">
            <FontAwesomeIcon icon={faTicketAlt} /> Add Coupon
          </Link>
          <div onClick={handlelogout} className="logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </div>
        </div>
        <div className="content">
          {/* Your main content goes here */}
          <Outlet />
        </div>
      </div>




      <div style={{ border: "1px solid black", padding: "2%" }}>Footer </div>
    </>
  )
}
export default AdminLayout;