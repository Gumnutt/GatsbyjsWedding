import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import '../assets/sass/main.scss';

const Attending = () => (
  <Layout>
    <div id="wrapper">
      <section id="main" className="wrapper fullscreen light">
        <div className="inner">
          <h1>🥺 Say it ain't so</h1>
          <form name="contact-form" method="post" action="/ohwell" data-netlify="true" data-netlify-honeypot="bot-field">
            <p className="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <label>First name</label>
                <input type="text" name="first-name" placeholder="Gabe" defaultValue="" />
              </div>
              <div className="col-6 col-12-xsmall">
                <label>Last name</label>
                <input type="text" name="last-name" placeholder="Newell" defaultValue="" />
              </div>
              <div className="col-6 col-12-xsmall">
                <label>Your email</label>
                <input type="email" name="email" placeholder="name@name.com" defaultValue="" />
              </div>
              <div className="col-12 col-12-xsmall">
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
