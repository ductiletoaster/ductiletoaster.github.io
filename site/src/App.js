import React from 'react';
import "./App.css"

function App() {
  return (
    <div id="wrapper">
        <div id="header">
            <div id="me">
                <h1>Brian Gebel</h1>
                <h2>Software Engineer</h2>
                <div className="horizontal-break-150"></div>
                <h3>Hacking away at the web for over 10 years</h3>
            </div>
            <div id="objective">
                <p>My objective is to attain a position that can utilize my skills as an honest, responsible, and hardworking individual to further my experience in software development. As an engineering manager it is my intention to help foster a collaborative, inclusive and fun enviroment for my team to build on their own technical experience.</p>
            </div>
            <div className="vertical-break-150"></div>
        </div>
        <div id="content">
            <div id="resume">
                <div className="row">
                    <div className="category column">
                        <h4>Qualifications</h4>
                    </div>
                    <div className="information column">
                        <h4>Knowledge Base</h4>
                        <ul>
                            <li>10+ years of experience in all stages of Web and software development life-cycle, from concept and development through quality assurance (QA) and tuning.</li>
                            <li>Highly versed in micro service and modular system design patterns.</li>
                            <li>In-depth understanding of modern software management concepts including Agile development, data analysis, technical reporting and roadmapping.</li>
                            <li>Extensive knowledge with various programming and scripting languages, web design, system design and multi-variable &amp; AB testing.</li>
                            <li>Proven background in leading teams, including hiring, coaching and talent development.</li>
                            <li>Superior communication, analytical and interpersonal skills.</li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                    <div className="category column">
                        <h4>Skills</h4>
                    </div>
                    <div className="information column">
                        <h4>Project Management</h4>
                        <ul>
                            <li>Scrum and agile methodologies</li>
                            <li>Data analytics &amp; technical reporting</li>
                            <li>Technical onboarding and training</li>
                        </ul>
                        <h4>Engineering</h4>
                        <ul>
                            <li><strong>Architecture:</strong> Amazon AWS and Microsoft Azure</li>
                            <li><strong>Programming:</strong> JavaScript, TypeScript, PHP, Python, Java, Kotlin, SQL, CSS and HTML</li>
                            <li><strong>Frameworks:</strong> React, React Native, Laravel, Django, Flask and Spring Boot</li>
                            <li><strong>Runtimes:</strong> NodeJS, GraphQL, Browser and Native iOS &amp; Android</li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="row">
                    <div className="category column">
                        <h4>Experience</h4>
                    </div>
                    <div className="information column">
                        <h4>GoFundMe</h4>
                        <h5>Senior Software Engineer, Manager</h5>
                        <h6 className="subtitle">Aug. 2019-Present</h6>
                        <h6 className="subtitle">San Diego, CA</h6>
                        <br />
                        <h5>Senior Software Engineer</h5>
                        <h6 className="subtitle">Oct. 2015-Aug. 2019</h6>
                        <h6 className="subtitle">San Diego, CA</h6>
                        <br />
                        <p>Currently part of a rapidly growing team of Software Engineers, QA Analysts, and product specialists tasked with growing the GoFundMe platform.</p>
                        <ul>
                            <li>Responsible for building and maintaining numerous customer service and business development tools that integrate heavily into our user facing product.</li>
                            <li>Worked as part of a team to build an image review tool that handles approximately 18 thousands images a day.</li>
                            <li>Integrated with a third party service to do advanced keyword analysis with the goal of protecting our visitors from malicious users.</li>
                        </ul>

                        <h4>Conversion Voodoo</h4>
                        <h5>Senior Web Developer</h5>
                        <h6 className="subtitle">Oct. 2014-Oct. 2015</h6>
                        <h6 className="subtitle">San Diego, CA</h6>
                        <br />
                        <h5>Web Developer</h5>
                        <h6 className="subtitle">Jan. 2011-Oct. 2015</h6>
                        <h6 className="subtitle">San Diego, CA</h6>
                        <br />
                        <p>Worked with a small team of developers and designers, using advanced development strategies, to implement and maintain custom reporting and testing systems for numerous clients.</p>
                        <ul>
                            <li>Maintained a multitude of custom web applications and systems for an ever changing client base.</li>
                            <li>Assisted in the implementation of automated DNS fail over, DB synchronization and Revision control systems for each of our applications.</li>
                            <li>Helped with the creation and maintenance of a custom analytics and testing engine using both JavaScript and PHP.</li>
                            <li>Implement front-end AB and multivariate tests to improve site performance. Many of our clients saw a 15% - 150% improvement in conversion rate. Resulting in millions of dollars in additional revenue.</li>
                        </ul>

                        <h4>San Diego Luxury Transportation</h4>
                        <h5>Web Designer/IT Administrator</h5>
                        <h6 className="subtitle">Oct. 2009-Jan. 2011</h6>
                        <h6 className="subtitle">San Diego, CA</h6>
                        <br />
                        <p>Created web sites geared toward specific regional ad campaigns, implemented new infrastructure technologies and provided administrative support for company systems.</p>
                        <ul>
                            <li>Designed and implemented websites for various marketing campaigns including PPC and affiliate traffic.</li>
                            <li>Optimized specific sites for Organic traffic sources.</li>
                            <li>Developed an internal network with centralized data backup, web mail, and a customer call tracking system.</li>
                        </ul>

                    </div>
                    <div className="clear"></div>
                </div>
                <div className="row">
                    <div className="category column">
                        <h4>Education</h4>
                    </div>
                    <div className="information column">
                        <h4>San Diego State University</h4>
                        <p><strong>Major:</strong> B.S. in Computer Science</p>
                        <h4>Palomar Community College</h4>
                        <p><strong>Certificate: </strong> Web Development with Emphasis in Java/Open Source <br /><small className="subtitle">Dean's list Spring 2009</small></p>
                    </div>
                    <div className="clear" />
                </div>
                <div className="row">
                    <div className="category column">
                        <h4>Volunteerism</h4>
                    </div>
                    <div className="information column">
                        <h4>San Pasqual High School</h4>
                        <p className="subtitle">Wrestling Coach - Escondido, CA - 2007-2009</p>
                        <p>Helped maintain after school wrestling program for San Pasqual High School athletes.</p>
                    </div>
                    <div className="clear" />
                </div>
                <div className="row">
                    <div className="category column">
                        <h4>References</h4>
                    </div>
                    <div className="information column">
                        <p>
                            <strong>LinkedIn:</strong> <a className="profile" href="https://www.linkedin.com/in/briangebel" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/briangebel</a><br />
                            <strong>GitHub:</strong> <a className="profile" href="https://github.com/ductiletoaster" target="_blank" rel="noopener noreferrer">https://github.com/ductiletoaster</a>
                        </p>
                        <p>Available upon request <br /> <small className="subtitle">I honor my references' privacy while displaying my resume online. Feel free to contact me for more information!</small></p>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
