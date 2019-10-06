import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../assets/sass/main.scss';

const Hotel = props => (

    <div className="card">
      <div className="card__image card__image--fence">
      <StaticQuery
          query={graphql`
            query {
              images: allFile {
                edges {
                  node {
                    relativePath
                    name
                    childImageSharp {
                      fluid(maxWidth: 600) {
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
      <div className="card__content">
        <div className="card__title">{props.heading}</div>
        <p className="card__text">{props.address}</p>
        <a href={props.link} className="button">Book Now</a>
      </div>
    </div>

);

export default Hotel


