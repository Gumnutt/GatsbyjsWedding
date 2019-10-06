import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../assets/sass/main.scss';

const RightImageBlock = props => (
  <section id="two" className="wrapper fade-up image-block right-block flex">
    <div className="text-container">
      <h2>{props.heading}</h2>
      <p>{props.address}</p>
      <p>{props.time}</p>
    </div>
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
  </section>
);

export default RightImageBlock