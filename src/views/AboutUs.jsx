import React from 'react';
import teamMember1 from "../assets/images/team-member1.jpg";
import teamMember2 from "../assets/images/team-member2.jpg";
import teamMember3 from "../assets/images/team-member3.jpg";
import './AboutUs.css';

const AboutUs = () => (
  <div className="container mt-4">
    <section className="mt-4">
      <h2 className="section-title">Our Mission</h2>
      <p className="section-text">
        At Purrfect Adoption, we are committed to creating lasting connections between cats and loving families. 
        Our mission is rooted in the belief that every feline deserves a life filled with care, safety, and happiness. 
        We strive to make the adoption process smooth.
      </p>
    </section>

    <section className="mt-5">
      <h2 className="section-title">Our History</h2>
      <p className="section-text">
        Purrfect Adoption was founded in 2020 with a dream of helping cats find their forever homes. 
        Starting as a small community initiative, we have grown into a well-recognized organization, 
        rehoming over 1,000 cats in just a few years. Our team consists of dedicated professionals and volunteers 
        who share a passion for animal welfare.
      </p>
    </section>

    <section className="mt-5">
      <div className="d-flex align-items-center mb-4">
        <h2 className="section-title">Meet Our Team</h2>
      </div>
      <div className="team-section">
        <div className="team-member">
          <div className="team-box">
            <img src={teamMember1} alt="Jane Doe" className="team-photo" />
            <h5 className="team-name">Jane Doe</h5>
            <p className="team-role">Founder & CEO</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-box">
            <img src={teamMember2} alt="John Smith" className="team-photo" />
            <h5 className="team-name">John Smith</h5>
            <p className="team-role">Adoption Specialist</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-box">
            <img src={teamMember3} alt="Emily Johnson" className="team-photo" />
            <h5 className="team-name">Emily Johnson</h5>
            <p className="team-role">Volunteer Coordinator</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
