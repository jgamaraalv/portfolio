import styles from "./home.module.css";

export default function Loading() {
  return (
    <section>
      <div className={styles.content}>
        <div className="loader"></div>
      </div>
    </section>
  );
}
