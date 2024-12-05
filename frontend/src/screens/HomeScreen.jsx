// import axios from "axios";
// import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const { data } = await axios.get("/api/products");
  //       // Ensure data is an array
  //       if (Array.isArray(data)) {
  //         setProducts(data);
  //       } else {
  //         console.error("API response is not an array:", data);
  //         setProducts([]); // Fallback to empty array
  //       }
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setProducts([]); // Fallback to empty array on error
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <>
      <h1>Best tours</h1>
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        ) : (
          <p>No tours currently available.</p>
        )}
      </Row>
    </>
  );
};

export default HomeScreen;
