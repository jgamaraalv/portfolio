import styles from "./home.module.css";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "João Vequiato",
    email: "hello@vequiato.dev",
    jobTitle: "Senior Front-End Developer",
    url: "https://www.vequiato.dev/",
    knowsAbout:
      "Senior Front-end Developer from Brazil with over 12 years of experience in web development",
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={`${styles.content} content-height`}>
        <div>
          <p>
            <small>Hello, I am</small>
          </p>

          <h1>João Vequiato</h1>

          <h2>
            <em>&gt; Senior Front-End Developer</em>
          </h2>

          <p className="comment">
            I&apos;m passionate <em>senior front-end</em> developer with 12+
            years of experience,
          </p>
          <p className="comment">
            skilled in <em>React</em>, <em>Typescript</em>, and a variety of
            other technologies.
          </p>

          <br />

          <p className="comment">My mission is to create beautiful,</p>
          <p className="comment">
            easy-to-use, and performant internet applications.
          </p>
        </div>
      </div>
    </section>
  );
}
