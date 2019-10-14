import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import '../assets/sass/main.scss';

const Attending = () => (
  <Layout>
    <div id="wrapper">
      <section id="main" className="wrapper light fullscreen">
        <div className="inner">
          <h1>I'm in. Get me on the list</h1>
          <form name="Wedding Attending Form" id="wedForm" method="POST" action="/thankyou" data-netlify="true" data-netlify-honeypot="bot-field">
          <p className="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
          <input type="hidden" name="form-name" value="Wedding Attending Form" />
            <div className="row gtr-uniform">
              <div className="col-6 col-12-small">
                <label>First name</label>
                <input type="text" name="first-name" placeholder="Gabe" />
              </div>
              <div className="col-6 col-12-small">
                <label>Last name</label>
                <input type="text" name="last-name" placeholder="Newell" />
              </div>
              <div className="col-6 col-12-small">
                <label>Your email</label>
                <input type="email" name="email" placeholder="name@name.com" />
              </div>
              <div className="col-6 col-12-small">
                <label>A song that will get you dancing</label>
                <input type="text" name="song" placeholder="Gold Digger - Kanye West" />
              </div>

              <div className="col-4 col-12-small">
                <input type="checkbox" id="vegan" name="vegan" />
                <label htmlFor="vegan">Vegan</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="checkbox" id="vegaterian" name="vegaterian"  />
                <label htmlFor="vegaterian">Vegaterian</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="checkbox" id="gluten" name="gluten"  />
                <label htmlFor="gluten">Gluten Free</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="checkbox" id="dairy" name="dairy"  />
                <label htmlFor="dairy">Dairy Free</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="checkbox" id="fish" name="fish"  />
                <label htmlFor="fish">Fish Allergy</label>
              </div>
              {/* <div className="col-4 col-12-small">
                <input type="checkbox" id="other" name="other"  />
                <label htmlFor="other">Other</label>
              </div> */}

              <div id="hiddenAllergy" className="col-12 col-12-small">
                <label htmlFor="other-allergy">Got an allergy thats not on the list? Let us know.</label>
                <textarea name="other-allery" placeholder="Things that taste good but you can't have them" />
              </div>

              <div className="col-12 col-12-small">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </Layout>
);

export default Attending;
