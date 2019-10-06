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
              <div class="col-6 col-12-small">
                <label>First name</label>
                <input type="text" name="first-name" placeholder="Gabe" value="" />
              </div>
              <div class="col-6 col-12-small">
                <label>Last name</label>
                <input type="text" name="last-name" placeholder="Newell" value="" />
              </div>
              <div class="col-6 col-12-small">
                <label>Your email</label>
                <input type="email" name="email" placeholder="name@name.com" value="" />
              </div>
              <div class="col-6 col-12-small">
                <label>A song that will get you dancing</label>
                <input type="text" name="song" placeholder="Gold Digger - Kanye West" value="" />
              </div>

              <div class="col-4 col-12-small">
                <input type="radio" id="vegan" name="vegan" />
                <label for="vegan">Vegan</label>
              </div>
              <div class="col-4 col-12-small">
                <input type="radio" id="vegan" name="vegan"  />
                <label for="vegan">Vegaterian</label>
              </div>
              <div class="col-4 col-12-small">
                <input type="radio" id="gluten" name="gluten"  />
                <label for="gluten">Gluten Free</label>
              </div>
              <div class="col-4 col-12-small">
                <input type="radio" id="dairy" name="dairy"  />
                <label for="dairy">Dairy Free</label>
              </div>
              <div class="col-4 col-12-small">
                <input type="radio" id="fish" name="fish"  />
                <label for="fish">Fish Allergy</label>
              </div>
              <div class="col-4 col-12-small">
                <input type="radio" id="other" name="other"  />
                <label for="other">Other</label>
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
