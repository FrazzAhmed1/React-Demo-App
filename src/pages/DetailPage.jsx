import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setDetailData(json))
      .catch((error) => console.error("Error fetching detail data:", error));
  }, [id]);

  return ( 
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-topbar">
          <button className="detail-button" onClick={() => navigate("/main")}>
            ← Back to List
          </button>
        </div>

        
        {detailData ? (
          <div className="detail-content">
            <h1 className="detail-title">{detailData.title}</h1>
            <p className="detail-body">{detailData.body}</p>
          </div>
        ) : (
          <p className="detail-loading">Loading post details...</p>
        )}
      </div>
    </div>
  );
};

export default DetailPage;