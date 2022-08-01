import { FormProvider, useForm } from 'react-hook-form';

import CheckboxForm from '_@landing-ui/components/checkbox-form/CheckboxForm';
import type {
  CheckboxList,
  DefaultValues,
} from '_@landing-ui/components/filtersession/FilterSession';
import { styled } from '_@landing-ui/design-system/stitches.config';

type DataIntentAndInterest = {
  intents: { title: string; checkboxList: CheckboxList[] };
  interests: { title: string; checkboxList: CheckboxList[] };
};

export default function () {
  const formMethods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, getValues } = formMethods;
  const onChangeCheckbox = (value: boolean): void => {
    console.log(getValues());
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <CheckboxForm
          titleCategory={dataIntentAndInterest.intents.title}
          checkboxList={dataIntentAndInterest.intents.checkboxList}
          onChangeCheckbox={onChangeCheckbox}
          numberOfColumns="2"
        />

        <CheckboxForm
          titleCategory={dataIntentAndInterest.interests.title}
          checkboxList={dataIntentAndInterest.interests.checkboxList}
          onChangeCheckbox={onChangeCheckbox}
          numberOfColumns="3"
        />
        <ButtonSave type="submit">Save</ButtonSave>
      </form>
    </FormProvider>
  );
}

const ButtonSave = styled('button', {
  color: 'white',
  backgroundColor: 'black',
  width: '164px',
  height: '51px',
  marginTop: '$x10',
  cursor: 'pointer',
});

const dataIntentAndInterest: DataIntentAndInterest = {
  intents: {
    title: 'Intent',
    checkboxList: [
      {
        name: 'discoverADifferentPerspective',
        id: 'discoverADifferentPerspective',
        label: 'Discover a different perspective',
      },
      {
        name: 'recapOnLearnings',
        id: 'recapOnLearnings',
        label: 'Recap on learnings',
      },
      {
        name: 'beInspired',
        id: 'beInspired',
        label: 'Be inspired',
      },
      {
        name: 'getAGlimpseIntoTheFuture',
        id: 'getAGlimpseIntoTheFuture',
        label: 'Get a glimpse into the future',
      },
      {
        name: 'keepUpdatedOnIssuesThatMatter',
        id: 'keepUpdatedOnIssuesThatMatter',
        label: 'Keep updated on issues that matter',
      },
      {
        name: 'seekForSolutions',
        id: 'seekForSolutions',
        label: 'Seek for solutions',
      },
    ],
  },
  interests: {
    title: 'Interests',
    checkboxList: [
      {
        name: 'transformation',
        id: 'transformation',
        label: 'Transformation',
      },
      {
        name: 'artificialIntelligence',
        id: 'artificialIntelligence',
        label: 'Artificial Intelligence',
      },
      {
        name: 'cybersecurity',
        id: 'cybersecurity',
        label: 'Cybersecurity',
      },
      {
        name: 'agile',
        id: 'agile',
        label: 'Agile',
      },
      {
        name: 'investments',
        id: 'investments',
        label: 'Investments',
      },
      {
        name: 'intelligentGov',
        id: 'intelligentGov',
        label: 'Intelligent Gov',
      },
      {
        name: 'resilience',
        id: 'resilience',
        label: 'Resilience',
      },
      {
        name: 'health',
        id: 'health',
        label: 'Health',
      },
      {
        name: 'inclusiveGov',
        id: 'inclusiveGov',
        label: 'Inclusive Gov',
      },
      {
        name: 'security',
        id: 'security',
        label: 'Security',
      },
      {
        name: 'intelligentGov',
        id: 'intelligentGov',
        label: 'Intelligent Gov',
      },
      {
        name: 'cyberSeptember',
        id: 'cyberSeptember',
        label: 'Cyber September',
      },
      {
        name: 'covid19',
        id: 'covid19',
        label: 'Covid-19',
      },
      {
        name: 'transformation',
        id: 'transformation',
        label: 'Transformation',
      },
      {
        name: 'cyberSeptember',
        id: 'cyberSeptember',
        label: 'Cyber September',
      },
      {
        name: 'innovation',
        id: 'innovation',
        label: 'Innovation',
      },
      {
        name: 'security',
        id: 'security',
        label: 'Security',
      },
      {
        name: 'data&Transformation',
        id: 'data&Transformation',
        label: 'Data & Transformation',
      },
      {
        name: 'digital',
        id: 'digital',
        label: 'Digital',
      },
      {
        name: 'citizenCentric',
        id: 'citizenCentric',
        label: 'Citizen-Centric',
      },
      {
        name: 'vision',
        id: 'vision',
        label: 'Vision',
      },
      {
        name: 'vision',
        id: 'vision',
        label: 'Data',
      },
      {
        name: 'digitalEconomy',
        id: 'digitalEconomy',
        label: 'Digital Economy',
      },
      {
        name: 'resilience',
        id: 'resilience',
        label: 'Resilience',
      },
      {
        name: 'iOT',
        id: 'iOT',
        label: 'IOT',
      },
      {
        name: 'insights',
        id: 'insights',
        label: 'Insights',
      },
      {
        name: 'cyberFutures',
        id: 'cyberFutures',
        label: 'Cyber Futures',
      },
      {
        name: 'digitalEconomy',
        id: 'digitalEconomy',
        label: 'Digital Economy',
      },
      {
        name: 'data&TransformationAI&MachineLearning',
        id: 'data&TransformationAI&MachineLearning',
        label: 'Data & Transformation - AI & Machine Learning',
      },
      {
        name: 'digitalEconomy',
        id: 'digitalEconomy',
        label: 'Digital Economy',
      },
      {
        name: 'openData',
        id: 'openData',
        label: 'Open Data',
      },
      {
        name: 'digitalIdentity',
        id: 'digitalIdentity',
        label: 'Digital Identity',
      },
      {
        name: 'security',
        id: 'security',
        label: 'Security',
      },
    ],
  },
};

// store data
const defaultValues: DefaultValues = {};

//handle data before passing to component
const createDefaultValue = (
  dataIntentAndInterest: DataIntentAndInterest,
): void => {
  const array: CheckboxList[] = [];
  array.push(...dataIntentAndInterest.intents.checkboxList);
  array.push(...dataIntentAndInterest.interests.checkboxList);
  array.forEach((checkbox) => {
    defaultValues[`${checkbox.name}`] = false;
  });
};

createDefaultValue(dataIntentAndInterest);
