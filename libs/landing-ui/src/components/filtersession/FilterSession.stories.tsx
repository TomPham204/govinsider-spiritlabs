import FilterSession from './FilterSession';
import type { CheckboxList, DataFilters, DefaultValues } from './FilterSession';

const storiesOptions = {
  title: 'FilterSession',
};

export default storiesOptions;

//data
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

//handle data before passing to component
const filterValues = (checkboxLists: CheckboxList[]) => {
  for (let i = 0; i < checkboxLists.length; i++) {
    defaultValues[`${checkboxLists[i].name}`] = false;
  }
};

const createDefaultValue = (dataFilters: DataFilters[]): void => {
  const array: CheckboxList[] = [];
  for (let i = 0; i < dataFilters.length; i++) {
    array.push(...dataFilters[i].checkboxList);
  }
  filterValues(array);
  console.log('defaultValues from storybook session', defaultValues);
};

createDefaultValue(dataFilters);

// components
export const FilterSession1 = () => (
  <FilterSession dataFilters={dataFilters} defaultValues={defaultValues} />
);
