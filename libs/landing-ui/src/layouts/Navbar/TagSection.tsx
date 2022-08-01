import { useState } from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';

interface TagSectionType {
  title: string;
  tags: string[];
}

export default function TagSection(props: TagSectionType) {
  const [chosenTags, setChosenTags] = useState<string[]>([]);
  console.log(chosenTags);

  const handleTagClick = (tagParam: string) => () => {
    setChosenTags(prevChosenTags => {
      if (prevChosenTags.includes(tagParam)) {
        return prevChosenTags.filter(tag => tag !== tagParam);
      }
      return [...prevChosenTags, tagParam];
    })
  }

  return (
    <TagSectionWrapper>
      <h1>{props.title}</h1>
      <TagWrapper>
        {props.tags.map((tag) => (
          <Tag
            key={tag}
            onClick={handleTagClick(tag)}
            targetMode={
              chosenTags.includes(tag.toLowerCase()) ? 'targeted' : 'normal'
            }
          >
            {tag}
          </Tag>
        ))}
      </TagWrapper>
    </TagSectionWrapper>
  );
}

const TagSectionWrapper = styled('div', {
  maxWidth: '40%',
  margin: '0 auto',
  marginTop: '$x10',
  height: 'auto',
  '& > h1': {
    fontSize: '$28px',
    textAlign: 'center',
  },
});

const TagWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$x7',
  flexWrap: 'wrap',
});

const Tag = styled('div', {
  textTransform: 'uppercase',
  padding: '$x2 $x4',
  border: '1px solid $grey400',
  borderRadius: '4px',
  '&:hover': {
    opacity: 0.7,
  },
  variants: {
    targetMode: {
      targeted: {
        background: '$secondary',
      },
      normal: {
        background: '$white1',
      },
    },
  },
});
