import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const All_pages_option = () => {

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
        // setUserEmail("")
        localStorage.removeItem("token");
        navigate("../home");
        alert("You succsefully Logout!!")
    };
    const [userData, setUserData] = useState(null);

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
            <div>
                {userData ? (
                    <ul>
                        <li>Display Name: {userData.displayName}</li>
                        <li>Email: {userData.email}</li>
                        <img src={userData.image} alt="User Avatar" />
                        {/* Add more user data fields as needed */}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="First_box_first">
                <div className="First_box_first_div">
                    <img src="./Admin_images/user_img.svg" alt="" />
                    <p>{Username ? Username : "Admin"}</p>
                </div>
                <div id="hidden">
                    <Link to="/admin_layout/admin_home"><h2>Home</h2></Link>
                    <hr />
                    <Link to="/admin_layout/admin_addproduct"><h2>Add Products</h2></Link>
                    <hr />
                    <Link><h2>All Products</h2></Link>
                    <hr />
                    <Link to="/admin_layout/admin_oderdetail"><h2>Order </h2></Link>
                    <hr />
                    <Link to="/admin_layout/admin_brand"><h2>Brands</h2></Link>
                    <hr />
                    <Link to="/admin_layout/admin_coupon"><h2>Coupon</h2></Link>
                    <hr />
                    <Link><h3 onClick={handlelogout}>Logout</h3></Link>
                </div>
            </div>
        </>
    );
}
export default All_pages_option;
