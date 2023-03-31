import styles from "./home.module.css";

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

          <p className="comment">
            I&apos;m passionate <strong>senior front-end</strong> developer with
            12+ years of experience,
          </p>
          <p className="comment">
            skilled in <strong>React</strong>, <strong>Typescript</strong>, and
            a variety of other technologies.
          </p>

          <br />

          <p className="comment">My mission is to create beautiful,</p>
          <p className="comment">
            easy-to-use, and performant internet applications.
          </p>
        </div>

        <div></div>
      </div>
    </section>
  );
}
