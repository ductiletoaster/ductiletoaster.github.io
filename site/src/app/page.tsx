import styles from "./page.module.css";

export default function Home() {
  return (
    <div id={styles.wrapper}>
      <div id={styles.header}>
        <div id={styles.me}>
          <h1>Brian Gebel</h1>
          <h2>Software Engineering Manager</h2>
          <div className={styles["horizontal-break-150"]}></div>
        </div>
      </div>
      <div id={styles.content}>
        <div id={styles.resume}>
          <div className={styles.row}>
            <div className={`${styles.category} ${styles.column}`}>
              <h4>Summary</h4>
            </div>
            <div className={`${styles.information} ${styles.column}`}>
              <h4>Professional Statement</h4>
              <p>
                Experienced Staff Software Engineer & Manager specializing in
                full-stack development with a passion for creating robust and
                scalable applications. Over 12 years of hands-on experience in
                designing, implementing, testing, and maintaining software
                solutions. Thrives in collaborative environments, committed to
                continuous learning and improvement.
              </p>
              <h4>Qualifications</h4>
              <ul>
                <li>
                  <strong>Leadership and Management:</strong> Fostered the
                  growth of three distinct teams providing clear guidelines for
                  success and advancement for everyone in my reporting lines.
                </li>
                <li>
                  <strong>Project Management:</strong> Led critical projects,
                  ensuring successful and timely delivery, showcasing a
                  consistent ability to manage projects efficiently and deliver
                  impactful results across different organizations.
                </li>
                <li>
                  <strong>Team Building and Development:</strong> Built and led
                  high-performance teams at GoFundMe, fostering a collaborative
                  work environment and contributing to the establishment of the
                  Identity Platform and Comms Platform Teams.
                </li>
                <li>
                  <strong>Strategic Planning:</strong> Played a key role in
                  strategic planning at GoFundMe, proposing plans for executing
                  on key goals across a degree of focuses including Pay Out User
                  Experiences, Email & Communications, and IAM Experiences &
                  Infrastructure Improvements.
                </li>
                <li>
                  <strong>Technical Leadership:</strong> Provided technical
                  leadership in critical projects, guiding teams on software
                  architecture, design, and implementation, showcasing strong
                  analytical and problem-solving skills.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.category} ${styles.column}`}>
              <h4>Experience</h4>
            </div>
            <div className={`${styles.information} ${styles.column}`}>
              <h4>GoFundMe</h4>
              <h6 className={styles.subtitle}>San Diego, CA</h6>
              <div className={styles.timeline}>
                <h5>Staff Software Engineer, Manager II</h5>
                <h6 className={styles.subtitle}>
                  Platform & Services, Mar 2021 - Present (2 years 11 months)
                </h6>
                <p>Manage the Identity Platform Team</p>
                <ul>
                  <li>
                    Oversee the development of Identity and Access Management
                    (IAM) solutions for various use cases.
                  </li>
                  <li>
                    Currently leading the adoption and implementation of a 3rd
                    Party IAM solution with the goal to implement Adaptive MFA,
                    SSO, Social Sign On, Biometrics, and more.
                  </li>
                </ul>

                <p>Established Comms Platform Team</p>
                <ul>
                  <li>
                    Collaborated with the product management team & engineering
                    leadership to propose and create the Comms Platform.
                  </li>
                  <li>
                    Promoted and established a new manager, from within the
                    Identity Platform Team, to lead the newly formed Comms
                    Platform.
                  </li>
                  <li>
                    Modernized communications infrastructure through CRM
                    platform adoption, event-driven data platform, and a
                    complete redesign of the email template workflow.
                  </li>
                </ul>

                <h5>Senior Software Engineer, Manager I</h5>
                <h6 className={styles.subtitle}>
                  Core Product, Aug 2019 - Mar 2021 (1 year 8 months)
                </h6>
                <p>Redesign of Checkout Flow</p>
                <ul>
                  <li>
                    Led a team to modernize the checkout flow, introducing new
                    payment methods like ApplePay, GooglePay, Klarna, and
                    Paypal.
                  </li>
                  <li>
                    Conducted AB split testing to optimize the flow for Gross
                    Donation Volume (GDV) and Revenue.
                  </li>
                </ul>

                <p>Cross-Team Collaboration</p>
                <ul>
                  <li>
                    Collaborated closely with another team to deliver a seamless
                    credit card checkout flow redesign.
                  </li>
                  <li>
                    Executed experiments to incorporate additional payment
                    methods, enhancing user experience and increasing donation
                    volume while continuously reporting our progress & impact to
                    executive leadership.
                  </li>
                </ul>

                <h5>Senior Software Engineer</h5>
                <h6 className={styles.subtitle}>
                  Core Product, Sep 2017 - Aug 2019 (2 years)
                </h6>
                <p>Technical Lead on Critical Projects</p>
                <ul>
                  <li>
                    Orchestrated a complete rewrite of the withdrawal flow and
                    underlying API, enabling payouts to organizers and
                    beneficiaries through integrations with WePay, Stripe, and
                    Adyen.
                  </li>
                  <li>
                    Pioneered a new mono-repo/multi-application workflow for
                    Front development, enhancing efficiency and code
                    maintainability.
                  </li>
                </ul>

                <p>Campaign Page Redesign</p>
                <ul>
                  <li>
                    Led the development team in a full redesign of the campaign
                    page and supporting API, handling high traffic and
                    concurrent requests efficiently.
                  </li>
                </ul>

                <h5>Software Engineer II</h5>
                <h6 className={styles.subtitle}>
                  Internal Tools, Oct 2015 - Sep 2017 (2 years)
                </h6>
                <p>Internal Tool & Service Development</p>
                <ul>
                  <li>
                    Contributed to the development of internal tools, including
                    moderation tools for reviewing customer images and content.
                  </li>
                  <li>
                    Spearheaded the implementation of risk detection and
                    prevention features such as Keyword analysis and the MFA
                    Service for 2-factor authentication.
                  </li>
                </ul>
              </div>
              <div className={styles.timeline}>
                <h4>Conversion Voodoo</h4>
                <h6 className={styles.subtitle}>San Diego, CA</h6>
                <h5>Senior Software Engineer</h5>
                <h6 className={styles.subtitle}>
                  Conversion Voodoo | Maxly, Oct 2014 - Oct 2015 (1 year 1
                  month)
                </h6>
                <p>Maxly SaaS Platform</p>
                <ul>
                  <li>
                    Led the company towards the production of Maxly, a user
                    tracking, testing, and reporting software platform.
                  </li>
                  <li>
                    Managed server monitoring, web page speed testing, automated
                    alerting, real-time data analytics, conversion tracking, and
                    user behavior reporting.
                  </li>
                </ul>

                <p>Client Servicing</p>
                <ul>
                  <li>
                    Serviced nearly 120 clients, generating over 1 million
                    alerts & reports, and consumed millions of user events each
                    month.
                  </li>
                  <li>
                    Continued supporting Conversion Voodoo clients through our
                    legacy reporting and testing systems.
                  </li>
                </ul>
              </div>
              <div className={styles.timeline}>
                <h5>Software Engineer</h5>
                <h6 className={styles.subtitle}>
                  Conversion Voodoo, Jan 2011 - Oct 2014 (3 years 10 months)
                </h6>
                <p>Custom Reporting and Testing Systems</p>
                <ul>
                  <li>
                    Implemented and maintained custom reporting and testing
                    systems for numerous clients, resulting in a 15% to 150%
                    improvement in conversion rates.
                  </li>
                  <li>
                    Contributed to the creation of automated DNS failover,
                    database synchronization, and revision control systems.
                  </li>
                </ul>

                <p>AB and Multivariate Testing</p>
                <ul>
                  <li>
                    Conducted full stack AB and multivariate tests to improve
                    site performance and user experience on behalf of our
                    clients.
                  </li>
                </ul>
              </div>
              <div className={styles.timeline}>
                <h4>PixelOven</h4>
                <h6 className={styles.subtitle}>Escondido, CA</h6>
                <h5>Software Engineer</h5>
                <h6 className={styles.subtitle}>
                  San Diego Luxury Transportation, Oct 2009 - Jan 2011 (1 year 4
                  months)
                </h6>
                <p>Transition to Part-Time Position</p>
                <ul>
                  <li>
                    Seamlessly evolved freelance endeavors into a part-time
                    position with San Diego Luxury Transportation.
                  </li>
                  <li>
                    Applied expertise in web development, design, and
                    advertising to oversee the company&apos;s online presence
                    and marketing strategies.
                  </li>
                </ul>

                <p>Administrative and Software Support</p>
                <ul>
                  <li>
                    Provided crucial administrative support for the
                    company&apos;s software systems, managing dispatching,
                    payroll, and various essential software services.
                  </li>
                  <li>
                    Integrated new infrastructure technologies, such as
                    printers, fax machines, computers, centralized data backup,
                    and company phone & email services.
                  </li>
                </ul>

                <h5>Web Developer</h5>
                <h6 className={styles.subtitle}>
                  Freelance, Mar 2009 - Oct 2009 (8 months)
                </h6>
                <p>Freelance Design and Development</p>
                <ul>
                  <li>
                    Established the brand &quot;Lost Propaganda&quot; (later
                    rebranded as PixelOven) during this time.
                  </li>
                  <li>
                    Designed, built, tested, and deployed applications for San
                    Diego-based companies.
                  </li>
                  <li>
                    Set up and maintained LAMP stacks, providing basic
                    administration through various hosting providers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.category} ${styles.column}`}>
              <h4>Education</h4>
            </div>
            <div className={`${styles.information} ${styles.column}`}>
              <h4>San Diego State University</h4>
              <h6 className={styles.subtitle}>
                Bachelor&apos;s Degree, Computer Science
              </h6>
              <h6 className={styles.subtitle}>2010 - 2013</h6>

              <h4>Palomar Community College</h4>
              <h6 className={styles.subtitle}>
                Certificate, Computer Science and Information Technology
              </h6>
              <h6 className={styles.subtitle}>2006 - 2010</h6>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.category} ${styles.column}`}>
              <h4>References</h4>
            </div>
            <div className={`${styles.information} ${styles.column}`}>
              <p>
                <strong>LinkedIn:</strong>
                <a
                  className={styles.profile}
                  href="https://www.linkedin.com/in/briangebel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/briangebel
                </a>
                <br />
                <strong>GitHub:</strong>
                <a
                  className={styles.profile}
                  href="https://github.com/ductiletoaster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/ductiletoaster
                </a>
              </p>
              <p>
                Available upon request <br />
                <small className={styles.subtitle}>
                  I honor my references&apos; privacy while displaying my resume
                  online. Feel free to contact me for more information.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
