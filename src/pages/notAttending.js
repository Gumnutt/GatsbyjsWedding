import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import '../assets/sass/main.scss';

const Attending = () => (
  <Layout>
    <div id="wrapper">
      <section id="main" className="wrapper dark">
        <div className="inner">
          <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <label>First name</label>
                <input type="text" name="first-name" placeholder="Gabe" value="" />
              </div>
              <div class="col-6 col-12-xsmall">
                <label>Last name</label>
                <input type="text" name="last-name" placeholder="Newell" value="" />
              </div>
              <div class="col-6 col-12-xsmall">
                <label>Your email</label>
                <input type="email" name="email" placeholder="name@name.com" value="" />
              </div>
              <div class="col-12 col-12-xsmall">
                <button>Send</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </Layout>
);

export default Attending;
