import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery, useQueryClient } from 'react-query';

import { styled } from '_@landing-ui/design-system/stitches.config';
import { getArticles } from '_@landing-ui/state/mockApi';

import type {
  DataFilters,
  DefaultValues,
} from '_@landing-ui/components/filtersession/FilterSession';

import FilterSession from '_@landing-ui/components/filtersession/FilterSession';
import Card from 'libs/landing-ui/src/components/Card';

export default function SearchResult() {
  const [length, setLength] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPerPage = 4;
  const searchPhrase = 'Covid';
  const queryClient = useQueryClient();

  const fetch = async (currentPage: number) => {
    const data = (
      await getArticles({
        limit: maxPerPage,
        skip: (currentPage - 1) * maxPerPage,
      })
    ).data;

    const length = 20;
    setLength(length);
    setTotalPage(Math.ceil(length / maxPerPage));
    return data;
  };

  const handlePageClick = async ({ selected }: { selected: number }) => {
    setCurrentPage(Math.max(selected + 1, 1));
    const temp: number = selected + 2;
    if (temp < totalPage) {
      await queryClient.prefetchQuery(['items', temp], () => fetch(temp));
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const { data, status } = useQuery<Article[], string>(
    ['items', currentPage],
    () => fetch(currentPage),
    {
      keepPreviousData: true,
      staleTime: 60 * 1000,
    },
  );

  if (data !== undefined) {
    return (
      <Wrapper>
        <span className="count-sort">
          <div>
            {length} Results for &ldquo;{searchPhrase}&rdquo;
          </div>
          <div>Sort</div>
        </span>
        <span className="result">
          {/* {items.map((article, index) => (
          <Card
            key={index}
            type={article.post_type}
            title={article.post_title}
            tag={article.post_status}
            url={article.guid}
            timestamp={''}
            dir={'horizontal'}
            collapse={false}
            mediaUrl={'https://fakeimg.pl/100x65/000000'}
          />
        ))} */}

          {data.map((article, index) => (
            <Card
              key={index}
              type={article.post_type}
              title={article.post_title}
              tag={article.post_status}
              url={article.guid}
              timestamp={''}
              dir={'horizontal'}
              collapse={false}
              mediaUrl={'https://fakeimg.pl/100x65/000000'}
            />
          ))}
          <StyledReactPaginate
            previousLabel={'Previous page'}
            nextLabel={'Next page'}
            onPageChange={handlePageClick}
            pageCount={totalPage}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            breakClassName={'page-item'}
            activeClassName={'active'}
          />
        </span>
        <span>
          <FilterSession
            dataFilters={dataFilters}
            defaultValues={defaultValues}
          />
        </span>
      </Wrapper>
    );
  } else {
    return <div>{status}</div>;
  }
}

type Article = {
  comment_count: number;
  comment_status: string;
  guid: string;
  menu_order: number;
  ping_status: string;
  pinged: string;
  post_author: number;
  post_content: string;
  post_content_filtered: string;
  post_date: string;
  post_date_gmt: string;
  post_excerpt: string;
  post_mime_type: string;
  post_modified: string;
  post_modified_gmt: string;
  post_name: string;
  post_parent: number;
  post_password: string;
  post_status: string;
  post_title: string;
  post_type: string;
  to_ping: string;
};

const Wrapper = styled('div', {
  maxWidth: '100vw',
  padding: '$x5',
  normalBody: '$18px',
  display: 'grid',
  gap: '$x5',
  gridTemplateAreas: `'countsort filter' 'result filter'`,
  gridTemplateColumns: '3fr 1fr',
  gridTemplateRows: '$x15 auto',
  '.count-sort': {
    gridArea: 'countsort',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mx: '$x5',
    my: '$x2',
    height: '100%',
    '&:first-child': {
      fontWeight: '$semiBold',
      semiBoldBody: '$24px',
    },
  },
  '.result': {
    gridArea: 'result',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '$x3',
    padding: '$x2',
  },
  '.filter': {
    gridArea: 'filter',
  },
});

const StyledReactPaginate = styled(ReactPaginate, {
  listStyle: 'none',
  display: 'flex',
  flexPosition: 'center',
  fontWeight: 'bold',
  '.active': {
    color: '$orange600',
  },
  '.page-item': {
    margin: '$x3',
    cursor: 'pointer',
  },
  '.disabled': {
    color: '$grey300',
  },
});

//mock data
const dataFilters: DataFilters[] = [
  {
    titleCategory: 'Content type',
    checkboxList: [
      {
        name: 'articles',
        id: 'articles',
        label: 'Articles',
      },
      {
        name: 'videos',
        id: 'videos',
        label: 'Videos',
      },
      {
        name: 'events',
        id: 'events',
        label: 'Events',
      },
    ],
  },

  {
    titleCategory: 'Date',
    checkboxList: [
      {
        name: 'past24Hours',
        id: 'past24Hours',
        label: 'Past 24 hours',
      },
      {
        name: 'thisWeek',
        id: 'thisWeek',
        label: 'This week',
      },
      {
        name: 'thisMonth',
        id: 'thisMonth',
        label: 'This month',
      },
      {
        name: 'thisYear',
        id: 'thisYear',
        label: 'This year',
      },
    ],
  },
  {
    titleCategory: 'Topics',
    checkboxList: [
      {
        name: 'health',
        id: 'health',
        label: 'Health',
      },
      {
        name: 'connected',
        id: 'connected',
        label: 'Connected',
      },
      {
        name: 'resilience',
        id: 'resilience',
        label: 'Resilience',
      },
      {
        name: 'digital Identity',
        id: 'digital Identity',
        label: 'Digital Identity',
      },
      {
        name: 'cyberFutures',
        id: 'cyberFutures',
        label: 'Cyber Futures',
      },
    ],
  },
  {
    titleCategory: 'Reporters',
    checkboxList: [
      {
        name: 'cameronWilliamson',
        id: 'cameronWilliamson',
        label: 'Cameron Williamson',
      },
      {
        name: 'darrellSteward',
        id: 'darrellSteward',
        label: 'Darrell Steward',
      },
      {
        name: 'dianneRussell',
        id: 'dianneRussell',
        label: 'Dianne Russell',
      },
      {
        name: 'bessieCooper',
        id: 'bessieCooper',
        label: 'Bessie Cooper',
      },
      {
        name: 'robertFox',
        id: 'robertFox',
        label: 'Robert Fox',
      },
    ],
  },
];

// store data
const defaultValues: DefaultValues = {};
