import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../assets/sass/main.scss';

const Story = props => (
  <section id="one" className="wrapper spotlights story">
    <section>
    <div className="image">
      <StaticQuery
        query={graphql`
          query {
            images: allFile {
              edges {
                node {
                  relativePath
                  name
                  childImageSharp {
                    fluid(maxWidth: 980, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const image = data.images.edges.find(n => {
            return n.node.relativePath.includes(props.filename);
          });
          if (!image) {
            return null;
          }
          //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
          return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
        }}
      />
    </div>
      <div className="content">
        <div className="inner">
          <h2>Our story</h2>
          <p>After 10 years of Brynn finally made it offical and asked Estelle on a date and we want you to be there. We were going to write a really loving and heart felt rendition of our life together.</p>
          <p>Instead we thought we would try and sum up or relationship in a song.</p>
          <p>Enjoy.</p>
          <a className="button" target="_blank" href="https://www.youtube.com/watch?v=AbhVMGVCdpo">Brynn to Estelle</a>
          <a className="button" target="_blank" href="https://www.youtube.com/watch?v=LAzodf69rfk">Estelle to Brynn</a>
        </div>
      </div>
    </section>
  </section>
);
export default Story;