import Menu from "../Menu";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.content}>
        <p>joão-vequiato</p>

        <Menu />
      </div>
    </header>
  );
}
