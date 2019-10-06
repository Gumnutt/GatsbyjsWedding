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
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam
            dapibus.
          </p>
        </div>
      </div>
    </section>
  </section>
);
export default Story;