import styles from "./page.module.css";
import StarRating from "@/components/StarRating";

export default function Home() {
  return (
    <div>
        <div className={styles.container}>
          <StarRating />
        </div>

    
    </div>
  );
}
