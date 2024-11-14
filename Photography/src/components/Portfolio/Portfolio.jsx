import React, { useState } from "react";
import styles from "./portfolio.module.css";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.jpg";
import portfolio6 from "../../assets/portfolio6.jpg";
import portfolio7 from "../../assets/portfolio7.jpg";
import portfolio8 from "../../assets/portfolio8.jpg";
import portfolio9 from "../../assets/portfolio9.jpg";
import portfolio10 from "../../assets/portfolio10.jpg";
import portfolio11 from "../../assets/portfolio11.jpg";
import portfolio12 from "../../assets/portfolio12.jpg";
import portfolio13 from "../../assets/portfolio13.jpg";
import portfolio14 from "../../assets/portfolio14.jpg";

const images = [
  { id: 1, imgSource: portfolio1 },
  { id: 2, imgSource: portfolio2 },
  { id: 3, imgSource: portfolio3 },
  { id: 4, imgSource: portfolio4 },
  { id: 5, imgSource: portfolio5 },
  { id: 6, imgSource: portfolio6 },
  { id: 7, imgSource: portfolio7 },
  { id: 8, imgSource: portfolio8 },
  { id: 9, imgSource: portfolio9 },
  { id: 10, imgSource: portfolio10 },
  { id: 11, imgSource: portfolio11 },
  { id: 12, imgSource: portfolio12 },
  { id: 13, imgSource: portfolio13 },
  { id: 14, imgSource: portfolio14 },
];

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSource) => {
    setSelectedImage(imageSource);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.title}>Portfolio</h1>
      <p className={styles.description}>Some of my past photos</p>
      <div className={styles.imagesBox}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.imgSource}
            alt="photo"
            className={styles.img}
            onClick={() => openModal(image.imgSource)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <img
              src={selectedImage}
              alt="Full screen"
              className={styles.modalImage}
            />
            <button className={styles.closeButton} onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
