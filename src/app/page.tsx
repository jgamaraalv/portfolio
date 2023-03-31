import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <section>
      <div className={styles.content}>
        <div>
          <p>
            <small>Hello, I am</small>
          </p>

          <h1>João Vequiato</h1>

          <h2>
            <strong>&gt; Senior Front-End Developer</strong>
          </h2>

          <p>
            I&apos;m passionate front-end developer with 12+ years of
            experience,
          </p>
          <p>
            skilled in <strong>React</strong>, <strong>Typescript</strong>, and
            a variety of other technologies.
          </p>

          <br />

          <p>My mission is to create beautiful,</p>
          <p>easy-to-use, and performant internet applications.</p>
        </div>

        <div></div>
      </div>
    </section>
  );
}
