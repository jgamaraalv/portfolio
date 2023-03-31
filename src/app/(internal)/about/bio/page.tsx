import styles from "../about.module.css";

export default function Bio() {
  return (
    <section>
      <article>
        <p className={styles.comment}>
          <b>Hello, my name is João and I&apos;m from Brazil</b> 🇧🇷
        </p>

        <br />

        <p className={styles.comment}>
          I&apos;m 29 years old and I started my career as a developer when I
          was 16, as a fullstack developer with <strong>Javascript</strong>,{" "}
          <strong>jQuery</strong>, <strong>PHP</strong>, and{" "}
          <strong>MySQL</strong>.
        </p>

        <br />

        <p className={styles.comment}>
          Today I&apos;m <strong>senior front-end developer</strong> with 12+
          years of experience in web development, and I work with{" "}
          <strong>React</strong> and <strong>Typescript</strong> since 2017.
        </p>

        <br />

        <p className={styles.comment}>
          My mission is to create beautiful, easy-to-use, and performant
          internet applications.
        </p>

        <br />

        <p className={styles.comment}>
          <b>Accomplishments:</b>
        </p>

        <p className={styles.comment}>
          - I actively participated in the expansion of a cryptocurrency
          platform to another country, where in a few months it already moved
          half a million dollars a day;
        </p>

        <br />

        <p className={styles.comment}>
          - I participated in the refactoring of a legacy code to
          React/Typescript/Next.JS for an ecommerce of a large Brazilian
          retailer, with millions of monthly customers, where we brought a 3%
          increase in conversions with the new page;
        </p>

        <br />

        <p className={styles.comment}>
          - I made a whole frontend from scratch (from UI to code) of a system
          for bank correspondents, with React and Typescript;
        </p>

        <br />

        <p className={styles.comment}>
          - Created a set of custom React hooks that were adopted by the rest of
          the development team, improving code reuse and maintenance, and a lot
          of different UI components.
        </p>

        <br />

        <p className={styles.comment}>
          <b>Skills:</b>
        </p>

        <p className={styles.comment}>
          - Proficient in React, Typescript, Jest and many other amazing
          libraries (redux, styled-components, react-testing-library and
          others);
        </p>

        <br />

        <p className={styles.comment}>
          - Experience with full-stack development using PHP, Node, MySQL,
          Firebase, Mongodb, and Socket.io;
        </p>

        <br />

        <p className={styles.comment}>
          - Experience with some AWS services (S3, Cloudfront, Route 53,
          CodeBuild);
        </p>

        <br />

        <p className={styles.comment}>
          - Always looking for evolution, studying new technologies (Web3) and
          improving current ones.
        </p>

        <br />

        <p className={styles.comment}>
          <b>Personality:</b>
        </p>

        <p className={styles.comment}>
          I&apos;m a lifelong learner and problem-solver, always looking for new
          challenges and ways to improve. In my free time, you&apos;ll find me
          tinkering with new technologies, reading or doing some physical
          activity.
        </p>

        <br />
      </article>
    </section>
  );
}
