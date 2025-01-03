import styles from "./page.module.css";

export default function Home() {
  return (
    <div id={styles.wrapper} className={styles["fade-in"]}>
      <div id={styles.header}>
        <div id={styles.me}>
          <h1>Brian Gebel</h1>
          <h2>Senior Engineering Manager</h2>
          <br />
          <div className={styles["horizontal-break-150"]}></div>
        </div>
      </div>
      <div id={styles.content}>
        <div id={styles.cover} className={styles["hide-on-print"]}>
          <div className={styles.row}>
            <div className={`${styles.category} ${styles.column}`}>
              <h4>My Story</h4>
            </div>
            <div className={`${styles.information} ${styles.column}`}>
              <p>
                My career journey has been a transformative experience,
                beginning from the bustling domain of freelance web development.
                Transitioning from retail and sales, I plunged into web
                development in 2009, working as a freelance designer and
                developer. This early chapter was an exciting time where I fused
                my educational foundation in computer science with practical
                insights gained through my previous retail experience.
              </p>

              <p>
                This freelance pursuit opened doors to a part-time role with San
                Diego Luxury Transportation, a premier service specializing in
                luxury transportation. Here, I spearheaded the creation of
                targeted websites for regional advertising campaigns across key
                cities like San Diego, Los Angeles, San Francisco, and Las
                Vegas. My responsibilities were diverse, involving the
                integration of crucial infrastructure technologies and providing
                administrative support to optimize operational efficiencies such
                as dispatching and payroll management.
              </p>

              <p>
                Following this diverse experience, I joined GoFundMe in 2015 as
                a Software Engineer II. It was here that I joined a team
                dedicated to developing internal tools that play a pivotal role
                in supporting our core product. One of my standout contributions
                was the development of moderation tools that continue to be
                instrumental for our customer review processes. My work also
                extended to implementing risk detection mechanisms, including
                keyword analysis and a proprietary MFA service for enhanced
                security.
              </p>

              <p>
                As my journey progressed, I rose to the role of Senior Manager
                in Software Engineering within the Platform & Services
                organization. Currently, I lead two dynamic teams—Auth &
                Identity, which focuses on IAM solutions, and Integrity,
                committed to safeguarding our platform for both internal and
                external stakeholders. Guiding these teams is not just about
                leadership; it&apos;s about fostering an environment where innovation
                and collaboration thrive.{" "}
              </p>

              <p>
                After more than 12 years in the field, I&apos;m continually driven by
                a passion for full-stack development and the relentless pursuit
                of creating robust, scalable solutions. My journey from a
                freelance designer to a Senior Manager has been marked by
                continuous learning and adaptation, and I am committed to
                nurturing the same growth in my teams and projects.
              </p>
            </div>
          </div>
        </div>
        <div id={styles.resume}>
          <div className={styles.row}>
            <div className={`${styles.category} ${styles.column}`}>
              <h4>Find Me</h4>
            </div>
            <div className={`${styles.information} ${styles.column}`}>
              <p>
                My resume is available upon request. Come find me on LinkedIn!{" "}
                <br />
              </p>
              <ul>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    className={styles.profile}
                    href="https://www.linkedin.com/in/briangebel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/in/briangebel
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    className={styles.profile}
                    href="https://github.com/ductiletoaster"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ductiletoaster
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
