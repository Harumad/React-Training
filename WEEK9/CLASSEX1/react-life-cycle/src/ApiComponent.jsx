import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiComponent = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setPosts(response.data);
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "200px",
              backgroundColor: "#e45a5aff"
              
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
              }}
            />

            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiComponent;
