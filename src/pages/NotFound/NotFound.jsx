import React from "react";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.error}>
      <div className={styles.box}>
        <p>
          앗 당신은 길을 잃었어요~!
          <br />
          주머니 속의 돈을 저에게 주세요
        </p>

        <div className={styles["image-group"]}>
          <img src="/assets/images/img-money.jpeg" alt="give me money" />
          <p>많이 주세요</p>
        </div>
      </div>
    </section>
  );
}
