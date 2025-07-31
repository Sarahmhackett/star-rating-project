"use client";
import styles from "./StarRating.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = () => { 

    const [rating, setRating] = useState(0);

    const handleIncreaseRating = () => {
        if (rating < 10) {
          setRating(rating + 1);
        }
      };

    const handleDecreaseRating = () => {
        if (rating > 0) {
          setRating(rating - 1);
        }
      };

      return (
        <div className={styles.starRating}>
          <div className={styles.starRatingContainer}>

            {/* create a new empty array with 5 elements, map over it and return a FaStar component if the index 
            is less than the rating, otherwise return a FaRegStar component */}
            {[...Array(5)].map((_, index) =>
              index < rating ? (
                <FaStar key={index} className={styles.star} />
              ) : (
                <FaRegStar key={index} className={styles.star} />
              )
            )}
          </div>
    
          <button className={styles.button} onClick={handleIncreaseRating}>
            Rating Up
          </button>
          <button className={styles.button} onClick={handleDecreaseRating}>
            Rating Down
          </button>
    
        </div>
      );
    };
    
    export default StarRating;