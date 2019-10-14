import React from 'react';
// import { Link } from 'gatsby'
import Layout from '../components/layout';
import { Link } from 'gatsby-plugin-modal-routing'
import image from '../images/a9xhxAxaqOfQs.gif'

const ThankYou = () => (
  <Layout>
    <div id="wrapper">
      <section id="main" className="wrapper thankyou">
        <div className="inner">
          <div className="image-container">
            <img src={image} alt="thankyou image" />
          </div>
          <div className="text-container">
            <h1>That's a shame :(</h1>
            <h3>We were really looking forward to seeing you.</h3>
            <p>That's okay though, there will be so many pictures of the day I'm sure you will feel like you were there.</p>

            <Link className="button" to="/">Take me back to the home page</Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default ThankYou;
