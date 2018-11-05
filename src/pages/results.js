import {Link} from 'gatsby';
import React from 'react';
import ResultsLayout from 'components/results/ResultsLayout';

export default function ResultsPage() {
  return (
    <ResultsLayout>
      Results
      <Link to="/">Go back to the homepage</Link>
    </ResultsLayout>
  );
}
