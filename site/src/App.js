import React from 'react';
import logo from './logo.svg';
import './App.css';

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
            <div id="intro">
                <div className="paperstack fade-in">
                    <div className="page cover">
                        <img src={logo} alt=""/>
                        <p>10001000111 010010110 0011110</p>
                    </div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                </div>
                <div className="vertical-break-200"></div>
                <div className="circle-75">
                    <h2>ME</h2>
                </div>
                <div className="vertical-break-200"></div>
            </div>
            <div id="contact" style={{display: 'none'}}>
                <p>
                    Email: <a className="email" href="mailto:me@briangebel.com">me@briangebel.com</a><br />
                    GitHub: <a className="profile" href="https://github.com/ductiletoaster" target="_blank">https://github.com/ductiletoaster</a>
                </p>
            </div>
            <div id="objective" style={{display: 'none'}}>
                <p>My objective is to attain a position that can utilize my skills as an honest, responsible, and hardworking individual to further my experience in software development.</p>
            </div>
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
                            <li>7+ years of experience in all stages of Web and software development life-cycle, from concept and development through quality assurance (QA) and tuning.</li>
                            <li>Highly versed in cutting edge web technologies with skills in creating web applications utilizing many cutting edge technologies.</li>
                            <li>In-depth understanding of modern software development concepts including Agile development, revision control, system design and maintenance.</li>
                            <li>Extensive knowledge with various programming and scripting languages, web design, project management and multi-variable testing.</li>
                            <li>Proven background in web development with an emphasis on a customer centric pay for performance work ethic.</li>
                            <li>Superior communication, analytical and interpersonal skills.</li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                    <div className="category column">
                        <h4>Skills</h4>
                    </div>
                    <div className="information column">
                        <h4>Software Development Technologies</h4>
                        <ul>
                            <li>Front-end development (HTML5, CSS3, JavaScript + JSON + AJAX).</li>
                            <li>Back-end development (PHP5.6+, Python, MySQL, SQLite, Azure SQL, MongoDB)</li>
                            <li>Application programing  (C, C++, Java).</li>
                            <li>Source/Revision (GIT, Mercurial, SVN).</li>
                        </ul>
                        <h4>Software Development Methodologies</h4>
                        <ul>
                            <li>Object Oriented Programming (OOP)</li>
                            <li>Object Relational Mapping (ORM)</li>
                            <li>Model View Controller (MVC)</li>
                            <li>RESTful Principles</li>
                            <li>Agile Methods</li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="row">
                    <div className="category column">
                        <h4>Experience</h4>
                    </div>
                    <div className="information column">
                        <h4>GoFundMe </h4>
                        <p className="title">Software Engineer - San Diego, CA - 2015-Present</p>
                        <p>Currently part of a rapidly growing team of Software Engineers, QA Analysts, and product specialists tasked with growing the GoFundMe platform.</p>
                        <ul>
                            <li>Responsible for building and maintaining numerous customer service and business development tools that integrate heavily into our user facing product.</li>
                            <li>Worked as part of a team to build an image review tool that handles approximately 18 thousands images a day.</li>
                            <li>Integrated with a third party service to do advanced keyword analysis with the goal of protecting our visitors from malicious users.</li>
                        </ul>

                        <h4>Conversion Voodoo </h4>
                        <p className="title">Web Developer - San Diego, CA - 2011–2015</p>
                        <p>Worked with a small team of developers and designers, using advanced development strategies, to implement and maintain custom reporting and testing systems for numerous clients.</p>
                        <ul>
                            <li>Maintained a multitude of custom web applications and systems for an ever changing client base.</li>
                            <li>Assisted in the implementation of automated DNS fail over, DB synchronization and Revision control systems for each of our applications.</li>
                            <li>Helped with the creation and maintenance of a custom analytics and testing engine using both JavaScript and PHP.</li>
                            <li>Implement front-end AB and multivariate tests to improve site performance. Many of our clients saw a 15% - 150% improvement in conversion rate. Resulting in millions of dollars in additional revenue.</li>
                        </ul>

                        <h4>San Diego Luxury Transportation </h4>
                        <p className="title">Web Designer/IT Administrator - San Diego, CA - 2009-2011</p>
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
                        <p><strong>Certificate: </strong> Web Development with Emphasis in Java/Open Source <br /><small className="title">Dean's list Spring 2009</small></p>
                    </div>
                    <div className="clear" />
                </div>
                <div className="row">
                    <div className="category column">
                        <h4>Volunteerism</h4>
                    </div>
                    <div className="information column">
                        <h4>San Pasqual High School</h4>
                        <p className="title">Wrestling Coach - Escondido, CA - 2007-2009</p>
                        <p>Helped maintain after school wrestling program for San Pasqual High School athletes.</p>
                    </div>
                    <div className="clear" />
                </div>
                <div className="row">
                    <div className="category column">
                        <h4>References</h4>
                    </div>
                    <div className="information column">
                        <p>Available upon request <br /> <small className="title">I honor my references' privacy while displaying my resume online. Feel free to contact me for more information!</small></p>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
