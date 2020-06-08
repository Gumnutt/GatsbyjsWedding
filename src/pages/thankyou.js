import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';

const ThankYou = () => (
  <Layout>
    <div id="wrapper">
      <section id="main" className="wrapper thankyou">
        <div className="inner">
          <div className="image-container">
          </div>
          <div className="text-container">
            <h1>Perfect. Bellissimo. <br />Bloody Beautiful.</h1>
            <h3>We can't wait to see you on the 8<sup>th</sup> of March 2020.</h3>
            <p>If you need anything coming up to the date of all dates, please let Brynn know and he will try and get the message back to Estelle. In the event that what you need is actually important, its most likely the best option to contact the wonderful and beautiful Estelle.</p>

            <h2>Do you need to register another family member?</h2>
            <Link className="button" to="/attending/">Yep!</Link>
            <Link className="button" to="/">Nope, just take me back home</Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default ThankYou;
