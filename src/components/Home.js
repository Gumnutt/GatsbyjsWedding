import React from 'react';
import '../assets/sass/main.scss';
import { Link } from 'gatsby';
const Home = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner inner-no-margin">
      <h1>We got hitched baby</h1>
      <p>8th March 2020</p>
      <Link className="button primary gallery" to="/gallery/" style={{background:'white', color:'#333'}}>Click here to see photos from the day</Link>
    </div>
  </section>
);

export default Home;
