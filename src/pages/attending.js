import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import '../assets/sass/main.scss';

const Attending = () => (
  <Layout>
    <div id="wrapper">
      <section id="main" className="wrapper dark">
        <div className="inner">
          <form name="Wedding Attending Form" method="thank-you" action="" data-netlify="true" data-netlify-honeypot="bot-field">
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
                <input type="radio" id="vegan" name="vegan" />
                <label htmlFor="vegan">Vegan</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="radio" id="vegaterian" name="vegaterian"  />
                <label htmlFor="vegaterian">Vegaterian</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="radio" id="gluten" name="gluten"  />
                <label htmlFor="gluten">Gluten Free</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="radio" id="dairy" name="dairy"  />
                <label htmlFor="dairy">Dairy Free</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="radio" id="fish" name="fish"  />
                <label htmlFor="fish">Fish Allergy</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="radio" id="other" name="other"  />
                <label htmlFor="other">Other</label>
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
