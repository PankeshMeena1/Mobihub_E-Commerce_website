import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../css/AdminComponentCss/ProductList.css"
const ProductList = () => {
  var itemcount = 0;
  const [allproductsdisplay, setallproductsdisplay] = useState([])

  const mydata = async() => {
    await axios.post("http://localhost:5000/api/user/DisplayProduct").then((res) => {
      // console.log(res.data, "hello")
      setallproductsdisplay(res.data);
      // console.log(allproductsdisplay);
      console.log("displayed")

    })
  }
  useEffect(() => {
    mydata()
  }, [])


  // item delete 

  // const handleDelete = async (productId) => {
  //   try {
  //     // Make an API call to delete the product
  //     axios.delete(`http://localhost:5000/api/user/DeleteProduct/${productId}`)

  //     console.log("Product deleted successfully");
  //     // Update the product list after successful deletion
  //     mydata();
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   }
  // };

  const handleDelete = async (productId) => {
    try {
      // Make an API call to delete the product
      await axios.delete(`http://localhost:5000/api/user/DeleteProduct/${productId}`).then(()=>{
        console.log("yess")
      });
  
      console.log("Product deleted successfully");
  
      // Assuming mydata() is an asynchronous function, you can await it as well
      await mydata();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  

  // all item 

  const allitem = allproductsdisplay.map((product) => {
    itemcount++;
    return (
      <>
        <tr key={product._id}>
          <td>{itemcount}</td>
          <td><img src={product.Image_URL} alt={product.name} className="product-image1" /></td>
          <td>{product.Product_Name}</td>
          <td>{product.Product_Price}</td>
          <td>
            <button className="edit-btn1" >Edit</button>
            <button className="delete-btn1" onClick={() => handleDelete(product._id)}>Delete</button>
          </td>
        </tr>
      </>
    )
  })




  return (
    <div className="product-list-container1">
      <h1>Product List</h1>
      <table className="product-table1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allitem}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
