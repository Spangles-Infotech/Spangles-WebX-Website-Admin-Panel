import React, { useState } from 'react'
import "./Career.css";
import careerintroImg from '../../img/career-img.png.png'
import logo from '../../img/logo.png'
import logowebx from '../../img/Favi icon (1).jpg'
import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { LuClock5 } from 'react-icons/lu';
import { IoLocationSharp } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import successImg from '../../img/OBJECTS.png'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const Baseurl = process.env.REACT_APP_BACKEND_API_URL;

const jobsList = [
    {
        id: 1,
        type: "Full time",
        location: "Nagercoil",
        title: "Full Stack Developer(Mern Stack)",
    },
];


function JobCard({ job }) {
    const [open, setOpen] = useState(false);
    const [applyOpen, setApplyOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null);
    const initialFormState = {
        designation: "Full Stack Developer Mern",
        category: "Web Developer",
        name: "",
        email: "",
        mobile_number: "",
        alternative_mobile_number: "",
        experience: "",
        skills: "",
        salary_expectation: "",
        resume: null,
        description: "",
    };
    const [formData, setFormData] = useState(initialFormState);
    const [error, setError] = useState(null);
    const [resumeError, setResumeError] = useState('');



// const onSubmit = (e) => {
//   e.preventDefault();

//   // Simulate API call result
//   const success = Math.random() > 0.5; // replace with actual API response

//   setTimeout(() => {
//     setIsSuccess(success);
//     setApplyOpen(false);   // close form modal
//     setSuccessOpen(true);  // open result modal
//   }, 500);
// };
const onSubmit = async (e) => {
  e.preventDefault();

  if (resumeError) {
    return;
  }

  const fd = new FormData();
  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      if (key === "resume" && formData[key]) {
        fd.append("resume", formData[key]);
      } else if (key !== "resume") {
        fd.append(key, formData[key]);
      }
    }
  }

  try {
    // API call
    await axios.post("http://localhost:5050/api/applicant/apply", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setFormData(initialFormState);

    // If success → handle UI changes
    setApplyOpen(false);   // close form modal
    setSuccessOpen(true);  // open result modal
    setIsSuccess(true);    // optional, if you’re showing a success state

    // OR navigate if you prefer:
    // Navigate("/Successfully");

  } catch (error) {
    console.error("Error submitting form:", error);
    setError("Failed to submit the form. Please try again later.");
    setIsSuccess(false);
    setApplyOpen(false);
    setSuccessOpen(true);
  }
};


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'experience' || name === 'mobile_number' || name === 'alternative_mobile_number') {
      const sanitizedValue = value.replace(/[^0-9]/g, '');
      setFormData(prevData => ({
        ...prevData,
        [name]: name === 'experience' ? sanitizedValue.slice(0, 2) : sanitizedValue.slice(0, 10)
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setResumeError('Only PDF files are allowed.');
        setFormData(prevData => ({
          ...prevData,
          resume: null
        }));
      } else {
        setResumeError('');
        setFormData(prevData => ({
          ...prevData,
          resume: file
        }));
      }
    }
  };



    const points = [
        "Collaborate with the team to design and develop",
        "Write clean, efficient, and maintainable code following best practices.",
        "Debug and troubleshoot software issues to ensure optimal performance.",
        "Work closely with other developers, UI/UX designers, and product managers to understand requirements.",
        "Stay updated with the latest industry trends and technologies.",
        "Assist in documentation of the project and its components.",
    ];

    const skillspoint = [
        "Proficiency in HTML/CSS: A strong foundation in HTML5, CSS5, Bootstrap5 and responsive design principles.",
        "JavaScript: Familiarity with modern JavaScript (ES6+).",
        "React JS: Knowledge of front-end development with React.js.",
        "Node JS: Knowledge of back-end development with Node.js, including server-side programming.",
        "RESTful APIs: Understanding of APIs and how to interact with them.",
        "MongoDB: Skills include schema design, query optimization, aggregation, indexing, and backend integration.",
        "Version Control Systems (Git): Knowledge of Git for version control and collaboration.",
    ]
    return (
        <>
            <article className="job-card" role="article" aria-labelledby={`job-${job.id}`}>
                <div className="job-meta">
                    <span className="job-type">{job.type}</span>
                    <span className="job-location">{job.location}</span>
                </div>

                <div className="job-header">
                    <h4 id={`job-${job.id}`} className="job-title">
                        {job.title}
                    </h4>
                    <button
                        className="btn-know-more"
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-label={`Know more about ${job.title}`}
                    >
                        Know more <span className="arrow">➜</span>
                    </button>
                </div>



            </article>

            {/* ✅ Modal */}
            {open && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setOpen(false)}>
                            ✖
                        </button>
                        {/* <h2>{job.title}</h2> */}
                        <div className="row">
                            <div className="col-md-9 col-career-left">
                                <h1>{job.title}</h1>
                                <div className='job-summary'>
                                    <h5>Job Summary</h5>
                                    <p>As a Software Developer specializing in React.js, Node.js and MongoDB you will be part of a dynamic team working on modern web applications. They work on both the front-end and back-end of a project and are responsible for ensuring that the final product meets client expectations.</p>
                                </div>
                                <div className='expe-designation'>
                                    <div>
                                        <h5>Experience</h5>
                                        <p>0 - 2 Years</p>
                                    </div>

                                    <div>
                                        <h5>Designation</h5>
                                        <p>Junior Developer</p>
                                    </div>


                                </div>
                                <div className='preferred-skills'>
                                    <h5>Preferred Skills</h5>
                                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                                        {skillspoint.map((point, index) => (
                                            <li
                                                key={index}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: "12px",
                                                    lineHeight: "1.5"
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        width: "8px",
                                                        height: "8px",
                                                        backgroundColor: "#395563",
                                                        borderRadius: "50%",
                                                        flexShrink: 0,
                                                        marginRight: "12px"
                                                    }}
                                                ></span>
                                                <span style={{ flex: 1 }}>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='req-qual'>
                                    <h5>Required Qualification</h5>
                                    <p>Educational Background Bachelor’s degree in Computer Science, Information Technology, or a related field (or equivalent experience).</p>
                                </div>
                                <div className='res-and-duty'>
                                    <h5>Responsibilites and Duties:</h5>
                                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                                        {points.map((point, index) => (
                                            <li
                                                key={index}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: "12px",
                                                    lineHeight: "1.5"
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        width: "8px",
                                                        height: "8px",
                                                        backgroundColor: "#395563",
                                                        borderRadius: "50%",
                                                        flexShrink: 0,
                                                        marginRight: "12px"
                                                    }}
                                                ></span>
                                                <span style={{ flex: 1 }}>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-career-right">
                                <div className="modal-right-side">
                                    <div className="item">
                                        <MdDateRange className='icon-career' />
                                        <p>Full Time</p>
                                    </div>

                                    <div className="item">
                                        <LuClock5 className='icon-career' />
                                        <p>9.00 AM to 5.30 PM</p>
                                    </div>

                                    <div className="item">
                                        <IoLocationSharp className='icon-career' />
                                        <p>Nagercoil</p>
                                    </div>
                                </div>

                                <div>
                                    <button className='career-apply-now' onClick={() => setApplyOpen(true)}>Apply Now</button>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            )}

            {applyOpen && (
                <div className="modal-overlay">
                    <div
                        className="modal-content apply-form-modal"
                        style={{ width: "800px", height: "500px" }}
                    >
                        <button className="modal-close" onClick={() => setApplyOpen(false)}>✖</button>

                        <h3>Apply for {job.title}</h3>
                        <div className="contact-form">
                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Designation"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleInputChange}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Mobile Number"
                                            name="mobile_number"
                                            value={formData.mobile_number}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                </div>

                                <div className="row g-3 mt-2">
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Experience (in years)"
                                            name="experience"
                                          value={formData.experience}
                                          onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Skills"
                                            name="skills"
                                            value={formData.skills}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Salary Expectation"
                                            name="salary_expectation"
                                            value={formData.salary_expectation}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="resumeFile" className="profilesphoto form-label btn rounded p-1" style={{ width: '100%', height: '42px', color: 'rgba(52, 82, 97, 1)', borderColor: 'rgba(52, 82, 97, 1)', borderStyle: 'dotted' }}>
                                        Upload your Resume
                                    </label>
                                    <input
                                        type="file"
                                        name="resume"
                                        className="form-control"
                                        style={{ display: 'none' }}
                                        id="resumeFile"
                                    onChange={handleFileChange}
                                    />
                                    {resumeError && <div className="text-danger mt-2">{resumeError}</div>}
              {formData.resume && (
                <div className="mt-3 d-flex">
                  <strong>Uploaded File:</strong> 
                  <p>{formData.resume.name}</p>
                </div>
              )}
                                </div>

                                <div className="mt-3">
                                    <button type="submit" className="btn">SEND MESSAGE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {successOpen && (
                <div className="modal-overlay">
                    <div className="modal-content success-modal">
                        <button className="modal-close" onClick={() => setSuccessOpen(false)}>✖</button>

                        <div className="success-body">
                            {isSuccess ? (
                                <>
                                    <img
                                        src={successImg}
                                        alt="Success"
                                        className="success-img"
                                    />
                                    <h3>Application submitted successfully</h3>
                                </>
                            ) : (
                                <h5 style={{ color: "red" }}>
                                    Application not submitted. Please try again.
                                </h5>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

const Career = () => {
    return (
        <main id="career" className="career-page">
            {/* HERO */}
            <header className="career-hero">
                <div className="hero-overlay">
                    <div className="hero-inner container">
                        <nav className="breadcrumb">Home / Careers</nav>
                        <h1 className="hero-title">Careers</h1>
                    </div>
                </div>
            </header>

            {/* INTRO / CTA */}
            <section className="career-intro container-fluid">
                <div className="row">
                    <div className="col-md-5 career-intro-texts">
                        <p className="career-subtitle">Opportunities with us</p>
                        <p className="career-title">Join our innovative team</p>
                        <p className="career-description">
                            Spangles Webx is a tech-driven company passionate about delivering innovative
                            digital products. With a focus on design, usability, and performance, we help
                            startups and enterprises scale with impactful web and mobile solutions.
                        </p>
                        <button className="career-contact">Contact Us Now</button>
                    </div>

                    <div className="col-md-7 ">
                        <img className='careerintroimg' src={careerintroImg} alt="" />
                    </div>
                </div>
            </section>

            {/* OPENINGS */}
            <section id="openings" className="career-openings">
                <div className="container">
                    <div className="openings-header">
                        <p className="eyebrow small">Explore</p>
                        <h3 className="openings-title">Current Openings at Spangles Webx</h3>
                    </div>

                    <div className="jobs-grid">
                        {jobsList.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>

                    {/* <div className="show-all-wrap">
                        <a className="show-all" href="/careers">Show all ➜</a>
                    </div> */}
                </div>
            </section>

            <footer className="career-footer">
                {/* floating info card */}
                <div className="footer-card-wrap">
                    <div className="footer-card container">
                        <div className="card-grid">
                            <div className="card-logo">
                                <img src={logowebx} alt="Spangles Webx" className="career-logo" />
                            </div>

                            <div className="card-contact">
                                <h6>Call for Support</h6>
                                <a className="phone" href="tel:180012345678">7708784111</a>
                                <a className="email" href="mailto:webxspangles@gmail.com">webxspangles@gmail.com</a>
                            </div>

                            <div className="card-address">
                                <h6>Address</h6>
                                <address>
                                    389, Joe Daniel st, Near palpannai,
                                    <br />
                                    Nagercoil, KK District - 629003
                                </address>
                            </div>


                        </div>
                    </div>
                </div>

                {/* main footer area */}
                <div className="footer-main container-fluid">
                    <div className="footer-columns">
                        <div className="col left">
                            <img src={logo} alt="Spangles Webx" className="footer-main-logo" />
                            <p className="footer-desc">
                                We are the best world Information Technology Company. Providing the highest quality in hardware,
                                Software & Network solutions.
                            </p>
                        </div>

                        <div className="col center">
                            <h5 className="col-title">Quick Links</h5>
                            <div className="links-grid">
                                <a href="#">Home</a>
                                <a href="#">About Us</a>
                                <a href="#">Services</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Careers</a>
                                <a href="#">Contact us</a>
                            </div>
                        </div>


                    </div>
                </div>

                {/* divider line + bottom copyright area */}
                <div className="footer-bottom container-fluid">
                    <div className="bottom-left">
                        <small>Copyright © 2021 Spangles Webx. All Rights Reserved.</small>
                    </div>
                    <div className="bottom-right">
                        <a href="#">Privacy Policy</a>
                        <span className="sep" aria-hidden="true">|</span>
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Career