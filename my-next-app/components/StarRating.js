import styles from "./StarRating.module.css";
import { FaRegStar } from "react-icons/fa";


const StarRating = () => { 

    return (
        <div className={styles.starRating}>
            <div className={styles.starRatingContainer}>
            <FaRegStar />

       
            </div>

            <button className={styles.button}>Click me</button>

        </div>
    )
}

export default StarRating;