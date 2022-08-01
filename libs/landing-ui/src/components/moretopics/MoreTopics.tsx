import { useState } from 'react';

import { styled } from '_@landing-ui/design-system/stitches.config';

import Topics from 'libs/landing-ui/src/components/moretopics/Topics';

export default function MoreTopics() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Wrapper>
      <h3>EXPLORE MORE TOPICS</h3>
      <Topics linksArray={isExpanded ? linksExpanded : links} />
      {!isExpanded && <button onClick={toggleExpand}>Load more topics</button>}
    </Wrapper>
  );
}

const links = [
  [
    'Covid-19',
    'Health',
    'Innovation',
    'Data',
    'Security',
    'IOT',
    'Education',
    'Digital Economy',
    'Transformation',
    'Digital Gov',
  ],
  [
    'Smart Cities',
    'Digital Society',
    'Emerging Tech',
    'Digital Transformation',
    'Security',
    'Sustainability',
    'Artificial Intelligence',
    'Future of Innovation/ Innovation',
    'Open Data',
    'Connected',
  ],
  [
    'Digital',
    'Inclusive',
    'Resilience',
    'Smart Gov',
    'Security',
    'Citizen-Centric',
    'Cyber September',
    'Secure Gov',
    'Digital Identity',
    'Data & Transformation - AI & Machine Learning',
  ],
];

const linksExpanded = [
  [
    'Covid-19',
    'Health',
    'Innovation',
    'Data',
    'Security',
    'IOT',
    'Education',
    'Digital Economy',
    'Transformation',
    'Digital Gov',
    'Intelligent Gov',
    'Healthcare',
    'Cyber Futures',
    'Future of Health',
    'Deep Tech',
    'Regulatory',
    'Data & Analytics',
    'Smart cities',
    'Fintech',
    'Blockchain',
  ],
  [
    'Smart Cities',
    'Digital Society',
    'Emerging Tech',
    'Digital Transformation',
    'Security',
    'Sustainability',
    'Artificial Intelligence',
    'Future of Innovation/ Innovation',
    'Open Data',
    'Connected',
    'Data & Transformation',
    'Connected Gov',
    'Future of Work',
    'Insights',
    'Vision',
    'Inclusive Gov',
    'Agile',
    'Innovation',
    'Strategies & Models',
    'Investments',
  ],
  [
    'Digital',
    'Inclusive',
    'Resilience',
    'Smart Gov',
    'Security',
    'Citizen-Centric',
    'Cyber September',
    'Secure Gov',
    'Digital Identity',
    'Data & Transformation - AI & Machine Learning',
    'Technology',
    'Science',
    'Media',
    'Cloud',
    'Finance',
    'Insurtech',
    'AI',
    'DLT',
    'Cybersecurity',
  ],
];

const Wrapper = styled('div', {
  display: 'flex',
  maxWidth: '100vw',
  my: '$x6',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  fontFamily: '$ff',
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    px: '$x3',
    py: '$x6',
    color: 'purple',
    backgroundColor: '$transparent',
    border: '$transparent',
    cursor: 'pointer',
  },
  h3: {
    fontWeight: 'bold',
    py: '$x3',
    mb: '$x6',
    mx: '$x10',
    borderBottom: '1px solid $tertiary300',
  },
});
