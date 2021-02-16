import React from 'react';
import { shape, any, arrayOf } from 'prop-types';
import { graphql } from 'gatsby';
import { Box } from 'rebass';
import Header from '../components/Header';
import Thumbnail from '../components/Thumbnail';

export const thumbFluid = graphql`
  fragment thumbFluid on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    allFile(
      filter: { relativePath: { regex: "/pics/.*jpg/" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          ...thumbFluid
        }
      }
    }
  }
`;

const Gallery = ({ data }) => {
  return (
    <div>
      <Header />
      <Box
        className="imgs"
        sx={{
          display: 'grid',
          gridGap: 3, // theme.space[3]
          gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
        }}
      >
        {data.allFile.edges.map((img) => (
          <Thumbnail
            key={img.node.id}
            width={200}
            fluid={img.node.childImageSharp.fluid}
          />
        ))}
      </Box>
    </div>
  );
};

Gallery.propTypes = {
  data: shape({
    allFile: shape({
      edges: arrayOf(any),
    }),
  }),
};

export default Gallery;
