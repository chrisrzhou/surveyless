import {Link} from 'gatsby';
import React from 'react';
import SurveyLayout from 'components/survey/SurveyLayout';

export default function SurveyPage() {
  return (
    <SurveyLayout>
      Survey
      <Link to="/">Go back to the homepage</Link>
    </SurveyLayout>
  );
}
