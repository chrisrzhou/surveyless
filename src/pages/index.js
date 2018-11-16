import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import ContentContainer from 'components/ui/ContentContainer';
import {Flex} from 'rebass';
import {Link} from 'gatsby';
import Markdown from 'components/ui/Markdown';
import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import SurveyHeader from 'components/SurveyHeader';
import {graphql} from 'gatsby';
import {routes} from 'enums';

function HomePage({data}) {
  const {rawMarkdownBody} = data.allMarkdownRemark.edges[0].node;
  const content = (
    <ContentContainer>
      <Card>
        <Markdown source={rawMarkdownBody} />
      </Card>
      <Flex justifyContent="center">
        <Link to={routes.SURVEY}>
          <Button label="Begin Survey" mt={4} />
        </Link>
      </Flex>
    </ContentContainer>
  );
  return <PageLayout header={<SurveyHeader />} content={content} />;
}

export default HomePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/README.md/"}}) {
      edges {
        node {
          rawMarkdownBody
        }
      }
    }
  }
`;
