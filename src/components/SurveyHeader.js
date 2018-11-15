import {StaticQuery, graphql} from 'gatsby';

import Header from 'components/ui/Header';
import React from 'react';
import logo from 'images/logo.png';

function SurveyHeader() {
  return (
    <StaticQuery
      query={graphql`
        query SurveyHeader {
          allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/README.md/"}}
          ) {
            edges {
              node {
                frontmatter {
                  subtitle
                  title
                  mode
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {frontmatter} = data.allMarkdownRemark.edges[0].node;
        const {subtitle, title} = frontmatter;
        return <Header src={logo} subtitle={subtitle} title={title} />;
      }}
    />
  );
}

export default SurveyHeader;
