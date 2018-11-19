import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import Container from 'components/ui/Container';
import {Flex} from 'rebass';
import {Link} from 'gatsby';
import Markdown from 'components/ui/Markdown';
import React from 'react';
import SurveyPageLayout from 'components/survey/SurveyPageLayout';
import {graphql} from 'gatsby';
import {routes} from 'enums';

function HomePage({data}) {
  const {rawMarkdownBody} = data.allMarkdownRemark.edges[0].node;
  return (
    <SurveyPageLayout>
      <Container>
        <Card>
          <Markdown source={rawMarkdownBody} />
        </Card>
        <Flex justifyContent="center">
          <Link to={routes.SURVEY}>
            <Button label="Begin survey" mt={4} />
          </Link>
        </Flex>
      </Container>
    </SurveyPageLayout>
  );
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
