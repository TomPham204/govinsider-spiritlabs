import Select from './RadixSelect';

const storiesOptions = {
  title: 'FormElements',
};

export default storiesOptions;

export const RadixSelect = () => <Select name="datepicker" options={options} />;

const options = [
  { text: 'text 1', value: 'value 1' },
  { text: 'text 2', value: 'value 2' },
  { text: 'text 3', value: 'value 3' },
  { text: 'text 4', value: 'value 4' },
];
