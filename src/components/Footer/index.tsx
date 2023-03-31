import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.content}>
        <p>find me in:</p>

        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-amaral-a0020679/"
          target="_blank"
        >
          <i className="ri-linkedin-box-fill"></i>
        </a>

        <a href="https://github.com/jgamaraalv" target="_blank">
          <i className="ri-github-fill"></i>

          <span>@jgamaraalv</span>
        </a>
      </div>
    </footer>
  );
}
