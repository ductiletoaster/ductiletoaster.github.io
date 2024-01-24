import styles from "./page.module.css";

// Fix issue with alignment when printing
// figure out 404, favicon, etc
// move v2 to another branch
// update current deployment to use v1 next js
// update this resume

// https://github.com/ibelick/nextjs-resume

export default function Home() {
  return (
    <div id={styles.wrapper}>
        <div id={styles.header}>
            <div id={styles.me}>
                <h1>Brian Gebel</h1>
                <h2>Software Engineer</h2>
                <div className={styles["horizontal-break-150"]}></div>
                <h3 className={styles["hide-on-print"]}>Hacking away at the web for over 10 years</h3>
            </div>
            <div id={styles.objective}>
                <p>My objective is to attain a position that can utilize my skills as an honest, responsible, and hardworking individual to further my experience in software development. As a senior-level staff engineer &amp; manager it is my intention to help foster a collaborative, inclusive and fun environment for my team to build on their own technical experience while balancing product and engineering requirements. </p>
            </div>
            <div className={`${styles["vertical-break-150"]} ${styles["hide-on-print"]}`} />
        </div>
        <div id={styles.content}>
            <div id={styles.resume}>
                <div className={styles.row}>
                    <div className={`${styles.category} ${styles.column}`}>
                        <h4>Qualifications</h4>
                    </div>
                    <div className={`${styles.information} ${styles.column}`}>
                        <h4>Knowledge Base</h4>
                        <ul>
                            <li>12+ years of experience in all stages of software development life-cycle, from concept, design and development through to quality assurance (QA) and release.</li>
                            <li>Highly versed in micro service and modular system design patterns.</li>
                            <li>In-depth understanding of modern software management concepts including agile development, waterfall, gantt and long term roadmapping &amp; planning.</li>
                            <li>Extensive experience with various programming and scripting languages, web design, system design and multi-variable &amp; AB split testing.</li>
                            <li>Proven background in leading teams, including hiring, coaching and talent development.</li>
                            <li>Superior communication, analytical and interpersonal skills. Extending to both internal and external partnerships.</li>
                        </ul>
                        <div className={styles.clear}></div>
                    </div>
                    <div className={`${styles.category} ${styles.column}`}>
                        <h4>Skills</h4>
                    </div>
                    <div className={`${styles.information} ${styles.column}`}>
                        <h4>Engineering</h4>
                        <ul>
                            <li><strong>Architecture:</strong> Amazon AWS and Microsoft Azure</li>
                            <li><strong>Programming:</strong> JavaScript, TypeScript, PHP, Python, Java, Kotlin, SQL, CSS and HTML</li>
                            <li><strong>Frameworks:</strong> React, Next.js, Laravel, Django, and Spring Boot</li>
                            <li><strong>Runtimes:</strong> NodeJS, GraphQL, Browser and Native iOS &amp; Android</li>
                        </ul>
                    </div>
                    <div className={styles.clear}></div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.category} ${styles.column}`}>
                        <h4>Experience</h4>
                    </div>
                    <div className={`${styles.information} ${styles.column}`}>
                        <h4>GoFundMe</h4>
                        <div className={styles.timeline}>
                            <h5>Staff Software Engineer, Manager II</h5>
                            <h6 className={styles.subtitle}>Mar. 2021-Present</h6>
                            <h6 className={styles.subtitle}>San Diego, CA</h6>
                            <br />
      
                            <h5>Senior Software Engineer, Manager I</h5>
                            <h6 className={styles.subtitle}>Aug. 2019-Mar. 2021</h6>
                            <h6 className={styles.subtitle}>San Diego, CA</h6>
                            <br />

                            <h5>Senior Software Engineer</h5>
                            <h6 className={styles.subtitle}>Sep. 2017-Aug. 2019</h6>
                            <h6 className={styles.subtitle}>San Diego, CA</h6>
                            <br />

                            <h5>Software Engineer II</h5>
                            <h6 className={styles.subtitle}>Oct. 2015-Sep. 2017</h6>
                            <h6 className={styles.subtitle}>San Diego, CA</h6>
                            <br />
                        </div>
                        <p>Currently leading a multi team effort to improve our Auth, Comms and Localization services while supporting our existing internal and external integrations.</p>
                        <ul>
                            <li>Responsible for managing 3 teams each dedicated to a single vertical.</li>
                            <li>Expanded and Improved upon an event drive email, push and sms based notification system.</li>
                            <li>Modernized authentication to a more standard pattern using JWT and a robust Redis based session management system.</li>
                            <li>Advised on an API based Localization Service for streamlined translation pipeline.</li>
                            <li>Designed and implemented a range of systems including our first server-side rendered isomorphic JavaScript SPA.</li>
                            <li>Led and implemented a variety of product initiatives ranging from Sign On, Account &amp; Campaign Management, Payout (Withdrawal) &amp; Payin (Checkout) and several other smaller experiments and projects. </li>
                        </ul>
    
                        <div className={styles.timeline}>
                            <h4>Conversion Voodoo</h4>
                            <h5>Senior Web Developer</h5>
                            <h6 className={styles.subtitle}>Oct. 2014-Oct. 2015</h6>
                            <h6 className={styles.subtitle}>San Diego, CA</h6>
                            <br />
                        </div>
                        <div className={styles.timeline}>
                            <h5>Web Developer</h5>
                            <h6 className={styles.subtitle}>Jan. 2011-Oct. 2015</h6>
                            <h6 className={styles.subtitle}>San Diego, CA</h6>
                            <br />
                        </div>
                        <p>Worked with a small team of developers and designers, using advanced development strategies, to implement and maintain custom reporting and testing systems for numerous clients.</p>
                        <ul>
                            <li>Maintained a multitude of custom web applications and systems for an ever changing client base.</li>
                            <li>Assisted in the implementation of automated DNS fail over, DB synchronization and Revision control systems for each of our applications.</li>
                            <li>Helped with the creation and maintenance of a custom analytics and testing engine using both JavaScript and PHP.</li>
                            <li>Implement front-end AB and multivariate tests to improve site performance. Many of our clients saw a 15% - 150% improvement in conversion rate. Resulting in millions of dollars in additional revenue.</li>
                        </ul>

                        <div className={styles.timeline}>
                            <h4>San Diego Luxury Transportation</h4>
                            <h5>Web Designer/IT Administrator</h5>
                            <h6 className={styles.subtitle}>Oct. 2009-Jan. 2011</h6>
                            <h6 className={styles.subtitle}>San Diego, CA</h6>
                            <br />
                        </div>
                        <p>Created web sites geared toward specific regional ad campaigns, implemented new infrastructure technologies and provided administrative support for company systems.</p>
                        <ul>
                            <li>Designed and implemented websites for various marketing campaigns including PPC and affiliate traffic.</li>
                            <li>Optimized specific sites for Organic traffic sources.</li>
                            <li>Developed an internal network with centralized data backup, web mail, and a customer call tracking system.</li>
                        </ul>

                    </div>
                    <div className={styles.clear}></div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.category} ${styles.column}`}>
                        <h4>Education</h4>
                    </div>
                    <div className={`${styles.information} ${styles.column}`}>
                        <h4>San Diego State University</h4>
                        <p><strong>Major:</strong> B.S. in Computer Science</p>
                        <h4>Palomar Community College</h4>
                        <p><strong>Certificate: </strong> Web Development with Emphasis in Java/Open Source <br /><small className={styles.subtitle}>Dean's list Spring 2009</small></p>
                    </div>
                    <div className={styles.clear} />
                </div>
                <div className={styles.row}>
                    <div className={`${styles.category} ${styles.column}`}>
                        <h4>Volunteerism</h4>
                    </div>
                    <div className={`${styles.information} ${styles.column}`}>
                        <h4>San Pasqual High School</h4>
                        <h5>Wrestling Coach</h5>
                        <h6 className={styles.subtitle}>Oct. 2007-Mar. 2007, Oct. 2008-Mar. 2009</h6>
                        <h6 className={styles.subtitle}>Escondido, CA</h6>
                        <br />
                        <p>Helped maintain after school wrestling program for San Pasqual High School athletes.</p>
                    </div>
                    <div className={styles.clear} />
                </div>
                <div className={styles.row}>
                    <div className={`${styles.category} ${styles.column}`}>
                        <h4>References</h4>
                    </div>
                    <div className={`${styles.information} ${styles.column}`}>
                        <p>
                            <strong>LinkedIn:</strong> <a className={styles.profile} href="https://www.linkedin.com/in/briangebel" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/briangebel</a><br />
                            <strong>GitHub:</strong> <a className={styles.profile} href="https://github.com/ductiletoaster" target="_blank" rel="noopener noreferrer">https://github.com/ductiletoaster</a>
                        </p>
                        <p>Available upon request <br /> <small className={styles.subtitle}>I honor my references' privacy while displaying my resume online. Feel free to contact me for more information.</small></p>
                    </div>
                    <div className={styles.clear} />
                </div>
            </div>
        </div>
    </div>
  );
}
