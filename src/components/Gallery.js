import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import ImgWithOrient from "../components/imageOrient"

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(quality: 100) {
              aspectRatio
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
    id: node.id,
    aspectRatio: node.childImageSharp.fluid.aspectRatio,
    name: node.name
  }));
};

const Gallery = () => {
    const images = useGallery()
    return (
        <div className='gallery-wrapper'>
            {images.map(({ id, fluid, aspectRatio, name }) => (
                <ImgWithOrient
                  key={id}
                  aspectRatio={aspectRatio}
                  alt={name}
                  fluid={fluid}
                />
            ))}
        </div>
        
    )
}

export default Gallery;