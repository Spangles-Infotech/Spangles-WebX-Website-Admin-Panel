import React from 'react'
import './Featuredwork.css'
import elyonimage from '../../img/hermione.jpg'

export const Featuredwork = () => {
    const projects = [
        {
            title: "Elyon - Billing Management System",
            description:
                "A streamlined solution to manage invoices, payments, and reports with ease. Designed for efficiency and accuracy in financial tracking.",
            image: elyonimage,
        },
        {
            title: "Hospital Management System",
            description:
                "A complete solution to handle hospital operations, billing, and records seamlessly for doctors, staff, and patients.",
            image: elyonimage,
        },
        {
            title: "Church Management System",
            description:
                "A digital platform to manage offerings, family records, attendance, and reports with efficiency and transparency.",
            image: elyonimage,
        },
    ];
    return (
        <div className='container-fluid feature-background' id='featuredworks'>
            <div className="sticky-wrapper">
                <div className="featured-work-headers">
                    <p>OUR RECENT PROJECTS</p>
                    <p>Featured Work</p>
                    <p>
                        Browse through some of our latest digital success stories — from <br />
                        web platforms to mobile apps and branding overhauls.
                    </p>
                </div>
            </div>
            <div className="card-scroll">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass-container"
                        style={{ zIndex: projects.length + index }} // higher card stays on top
                    >
                        <div className="glass-card">
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="card-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
