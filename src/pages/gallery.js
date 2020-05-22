import React from 'react';
import Layout from '../components/layout';
import Gallery from '../components/Gallery'

const ThankYou = () => (
  <Layout>
    <div id="wrapper">
      <section id="main" className="wrapper gallery">
        <div className="inner">
          <Gallery></Gallery>
        </div>
      </section>
    </div>
  </Layout>
);

export default ThankYou;
