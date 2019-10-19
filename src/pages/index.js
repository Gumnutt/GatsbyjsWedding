import React from 'react';
//import { Link } from 'gatsby';
//import Image from '../components/Image';

import Layout from '../components/layout';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import Story from '../components/Story';
import LeftImageBlock from '../components/ImageLeftBlock';
import RightImageBlock from '../components/ImageRightBlock';
import Hotel from '../components/Hotel';
import FAQ from '../components/FAQ';
import { Link } from 'gatsby-plugin-modal-routing'
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div id="wrapper">
      <Home />
      <Story alt="Gatsby in Space" filename="bg.jpg" />
      <LeftImageBlock alt="Gatsby in Space" filename="actewagl.jpg" heading="ActewAGL building" address="40 Bunda St, Canberra ACT" time="2.45pm for 3pm start" />
      <RightImageBlock alt="Gatsby in Space" filename="royal.jpg" heading="The Royal Queanbeyan" address="85 Monaro St, Queanbeyan" time="6pm til late" />
      <section id="three" className="wrapper hotel-row">
        <div className="inner">
          <div className="textBlock">
            <h2>Places to stay</h2>
            <p>We have a few recommendations of great places to stay while in town that are smack bang in the middle of the Ceremony and Reception.</p>
          </div>
          <div className="hotel-card-row">
            <Hotel filename="realm.JPG" heading="Hotel Realm" address="18 National Circuit, Canberra ACT" distanceToCeremony="5km" distanceToReception="11.8km" link="https://www.booking.com/searchresults.en-gb.html?aid=311984;label=realm-qmofxKTWgWRLsMH4mAhUGgS162172153916%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t2%3Aneg%3Afi%3Atiaud-462398066042%3Akwd-8643389137%3Alp9071948%3Ali%3Adec%3Adm;sid=383c1bb3cea5a7a4ddfee73b7eb4faf7;city=-1563952;expand_sb=1;highlighted_hotels=441574;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=Cj0KCQjwlJfsBRDUARIsAIDHsWrHdUm-T0CS4Rt1YX4GwCNv9-Jw3Ef1RzqicnTZUH_R4pWynmF37tMaAtPWEALw_wcB&" buttonText="Book Now"/>
            <Hotel filename="east.jpg" heading="East Hotel" address="69 Canberra Ave, Kingston ACT" distanceToCeremony="6.7km" distanceToReception="10.4km" link="https://www.booking.com/searchresults.en-gb.html?aid=311984;label=east-bx73Ho89Fv_cWPHuuMJFbgS266324051733%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-462398066042%3Akwd-658608798%3Alp9071948%3Ali%3Adec%3Adm;sid=383c1bb3cea5a7a4ddfee73b7eb4faf7;city=-1563952;expand_sb=1;highlighted_hotels=384567;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=Cj0KCQjwlJfsBRDUARIsAIDHsWqP5JVsWtLn9Sf7W7_nb0r6RTIIl6d8u4wSLejlzBHwWwBpmMRwmdIaAktFEALw_wcB&" buttonText="Book Now"/>
            <Hotel filename="diplomat.jpeg" heading="Diplomat Hotel" address="2 Hely St, Griffith ACT" distanceToCeremony="7.6km" distanceToReception="9.4km" link="https://www.booking.com/hotel/au/diplomat-griffith.en-gb.html?aid=356980;label=gog235jc-1DCAsoD0IRZGlwbG9tYXQtZ3JpZmZpdGhIM1gDaA-IAQGYAQm4AQfIAQzYAQPoAQGIAgGoAgO4Ao29m-wFwAIB;sid=383c1bb3cea5a7a4ddfee73b7eb4faf7;dist=0&keep_landing=1&sb_price_type=total&type=total&" buttonText="Book Now"/>
          </div>
        </div>
      </section>
      <section id="four" className="wrapper getting-around">
        <div className="inner">
          <div className="textBlock">
            <h2>Getting around</h2>
            <p>Betweeen the Ceremony and the Reception is about a 15min trip. We recommend Uber for getting around on the day, but if you are wanting to drive there is plenty of close parking at both locations.</p>
            <p>If you are intending to drive please be aware that there is only paid parking in the city.</p>
            <p>Below are links that will open the Uber app on your phone with the destinations prefilled.</p>
            <a href="https://m.uber.com/ul/fmeqzJHkpzc1w0tdeZQfex5ETQQxGYRw&action=pickup=my_location&dropoff[nickname]=ActewAGL%20Building&dropoff[formatted_address]=40%20Bunda%20S%2CCanberra%20ACT%2C2600" className="button">Get me to the Ceremony</a>
            <a href="https://m.uber.com/ul/fmeqzJHkpzc1w0tdeZQfex5ETQQxGYRw&action=pickup=my_location&dropoff[nickname]=The%20Royal%20Hotel%20QBN&dropoff[formatted_address]=85%20Monaro%20St%2CQueanbeyan%20NSW%202620" className="button">Get me to the Reception</a>
          </div>
        </div>
      </section>
      <section id="five" className="wrapper">
        <div className="inner">
          <h2>Wedding FAQs</h2>
          <FAQ question="What should you wear?" answer="Sequins are encouraged, but not mandatory." />
          <FAQ question="What is the parking like?" answer="There is plenty of parking at both locations, but we do suggest using Uber to get to the reception as its only a 15min trip and we would like you to enjoy your night." />
          <FAQ question="Are the venues accessible?" answer="The Ceremony is on the ground level. The reception is held in the upper house, the venue has a private lift inside." />
          <FAQ question="When should you RSVP by?" answer="If you could let us know if you're coming by the 8th of January that would be greatly appricated." />
          <FAQ question="I'm getting you a gift, what should I get you 😬?" answer="We wanted to enjoy this day with you, so you are gift enough! But if you are desperate to show us how much you love us then there will be a wishing well that will help contribute to our honeymoon." />
        </div>
      </section>
      <section id="six" className="wrapper rsvp">
        <div className="inner">
          <h2>RSVP</h2>
          <Link className="button" to="/attending/">Hell Yeah, Baby!</Link>
          <Link className="button" to="/notAttending/">I love you, just not that much</Link>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
