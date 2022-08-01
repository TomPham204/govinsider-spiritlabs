import { useState } from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';
import TagSection from '_@landing-ui/layouts/Navbar/TagSection';
import Logo from '_@landing-ui/icons/gov-logo';
import DownMark from '_@landing-ui/icons/down-mark';
import Launchpad from '_@landing-ui/icons/launchpad';
import Search from '_@landing-ui/icons/search';
import Link from 'next/link';
import RightArrow from '_@landing-ui/icons/right-arrow';
import Close from '_@landing-ui/icons/close';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const launchPadItems = [
  'Covid19',
  'Security',
  'Transformation',
  'Emerging Tech',
  'Health',
  'IOT',
  'Digital Gov',
  'Digital Transformation',
  'Innovation',
  'Education',
  'Smart cities',
  'Security',
  'Data',
  'Digital Economy',
  'Digital Society',
  'Sustainability',
];

const languages = ['english', 'english', 'english', 'english', 'english'];
const leftSectionItems = ['Articles', 'Events', 'Videos'];
const dropdownValues = ['All', 'Title', 'Description', 'Topic', 'Reporter'];

export default function Navbar() {
  return (
    <StyledMenu>
      <LeftSection>
        <Logo />
        <StyledContentList>
          {leftSectionItems.map((item, index) => {
            return (
              <StyledContentItem key={index}>
                <Link href="#">{item}</Link>
              </StyledContentItem>
            );
          })}
        </StyledContentList>
      </LeftSection>
      <RightSection>
        <StyledContentList>
          <StyledContentItem>
            <StyledTrigger>
              Edition
              <DownMark />
            </StyledTrigger>
          </StyledContentItem>

          <StyledContentItem>
            <StyledTrigger>
              En
              <DownMark />
            </StyledTrigger>
          </StyledContentItem>

          <StyledContentItem>
            <StyledTrigger>
              <Search />
            </StyledTrigger>
            <StyledContent color="grey">
              <StyledSub layout="search">
                <SearchHeaderWrapper>
                  <SearchHeader>Search</SearchHeader>
                  <SearchCloseWrapper>
                    <SearchCloseContent>Close</SearchCloseContent>
                    <Close />
                  </SearchCloseWrapper>
                </SearchHeaderWrapper>

                <SearchSection>
                  <SearchWrapper>
                    <SearchBar placeholder="TYPE HERE TO SEARCH" />
                    <SearchIconWrapper>
                      <Search />
                    </SearchIconWrapper>
                  </SearchWrapper>
                  <StyledSelect>
                    {dropdownValues.map((value, index) => {
                      return (
                        <StyledOption value={value} key={index}>
                          {value}
                        </StyledOption>
                      );
                    })}
                  </StyledSelect>
                  {/* <StyledSelect defaultValue="All">
                    <SelectTrigger>
                      <SelectValue />
                      <SelectIcon>
                        <ChevronDownIcon />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectViewport>
                        {dropdownValues.map((value, index) => {
                          return (
                            <SelectItem value={value} key={index}>
                              <SelectItemText>{value}</SelectItemText>
                            </SelectItem>
                          )
                        })}
                      </SelectViewport>
                    </SelectContent>
                  </StyledSelect> */}
                </SearchSection>

                <TagSection
                  title="What others are looking for"
                  tags={[
                    'singpapore',
                    'covid',
                    'ukraine',
                    'social media',
                    'malaysia',
                    'shooting',
                    'invest',
                  ]}
                />
                <TagSection
                  title="Trending topics"
                  tags={['covid-19', 'health', 'ai', 'foi', 'open data']}
                />
              </StyledSub>
            </StyledContent>
          </StyledContentItem>

          <StyledContentItem>
            <StyledTrigger>
              <Link href="#">Login/signup</Link>
            </StyledTrigger>
          </StyledContentItem>

          <StyledContentItem>
            <StyledTrigger>
              <StyledLaunchpad />
              <StyledContent>
                <StyledSub layout="launchpad">
                  <StyledSubList layout="topics">
                    <ListHeading>Hot topics</ListHeading>
                    {launchPadItems.map((item, index) => {
                      return (
                        <StyledSubListItem key={index}>
                          <Link href="#">{item}</Link>
                        </StyledSubListItem>
                      );
                    })}
                  </StyledSubList>

                  <StyledSubList layout="language">
                    <ListHeading>site language</ListHeading>
                    {languages.map((language, index) => {
                      return (
                        <StyledSubListItem key={index}>
                          <Link href="#">{language}</Link>
                        </StyledSubListItem>
                      );
                    })}
                  </StyledSubList>

                  <StyledTrigger extendInfo>
                    <Link href="#">View more</Link>
                    <RightArrow />
                  </StyledTrigger>
                </StyledSub>
              </StyledContent>
            </StyledTrigger>
          </StyledContentItem>
        </StyledContentList>
      </RightSection>
    </StyledMenu>
  );
}

const StyledLaunchpad = styled(Launchpad, {
  width: '100%',
});

const StyledMenu = styled(NavigationMenu.Root, {
  display: 'flex',
  position: 'fixed',
  top: '0',
  right: '0',
  left: '0',
  height: '83px',
  zIndex: '9999',
  background: '$white1',
  borderBottom: '1px solid $black1',
  borderTop: '1px solid $black1',
});

const LeftSection = styled(NavigationMenu.Item, {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '$x15',
  '& ul li': {
    border: 'none',
  },
});

const RightSection = styled(NavigationMenu.Item, {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  '& ul li': {
    padding: '0',
  },
});

const StyledTrigger = styled(NavigationMenu.Trigger, {
  fontFamily: '$fonts',
  fontSize: '$18px',
  textTransform: 'uppercase',
  border: 'none',
  background: 'transparent',
  height: '$navbar$default',
  display: 'flex',
  alignItems: 'center',
  padding: '$x8',
  gap: '$x2',
  variants: {
    extendInfo: {
      true: {
        height: 'auto',
        padding: 0,
        marginBottom: '$x10',
        fontWeight: 'bold',
        width: 'fit-content',
      },
    },
  },
});

const StyledContentList = styled(NavigationMenu.List, {
  listStyle: 'none',
  display: 'flex',
});

const StyledContentItem = styled(NavigationMenu.Item, {
  height: '$navbar$default',
  display: 'flex',
  alignItems: 'center',
  padding: '$x8',
  position: 'relative',
  margin: 0,
  borderLeft: '1px solid $grey300',
  '& a': {
    display: 'block',
    fontSize: '$18px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '$black1',
  },
  '&:hover': {
    cursor: 'pointer',
  },
  '& a:hover': {
    cursor: 'pointer',
  },
});

const StyledContent = styled(NavigationMenu.Content, {
  position: 'fixed',
  top: '$navbar$default',
  left: 0,
  right: 0,
  width: '100%',
  height: 'auto',
  background: 'white',
  borderBottom: '1px solid $black1',
  variants: {
    color: {
      grey: {
        background: '$grey50',
      },
    },
  },
});

const StyledSub = styled(NavigationMenu.Sub, {
  padding: '0',
  margin: '0 auto',
  background: 'none',
  marginLeft: '$x30',
  marginRight: '$x30',
  variants: {
    layout: {
      search: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '$x15',
      },
      launchpad: {
        display: 'grid',
        gap: '$x8',
        gridTemplateColumns: '3fr 1fr',
      },
    },
  },
});

const StyledSubList = styled(NavigationMenu.List, {
  background: 'white',
  width: 'fit-content',
  listStyle: 'none',
  postiion: 'relative',
  textAlign: 'left',
  padding: 0,
  paddingTop: '$x22',
  paddingBottom: '$x10',
  variants: {
    layout: {
      topics: {
        display: 'grid',
        gridRowStart: 1,
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      },
      language: {
        display: 'grid',
        gridRowStart: 1,
        gridTemplateColumns: '1fr',
      },
    },
  },
});

const ListHeading = styled('h1', {
  fontSize: '$24px',
  position: 'absolute',
  left: 0,
  top: '$x10',
});

const StyledSubListItem = styled(NavigationMenu.Item, {
  padding: '0',
  border: 'none',
  width: '100%',
  background: 'transparent',
  fontSize: '$16px',
  marginTop: '$x4',
  marginRight: '$x8',
  '& a': {
    textTransform: 'capitalize',
  },
});

const SearchHeaderWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  marginTop: '$x10',
  justifyContent: 'space-between',
});

const SearchHeader = styled('h1', {
  textTransform: 'uppercase',
  fontSize: '$36px',
});

const SearchCloseWrapper = styled('div', {
  marginLeft: 'auto',
  display: 'flex',
  justifyContent: 'flexEnd',
  alignItems: 'center',
  gap: '$x2',
});

const SearchCloseContent = styled('h1', {});

const SearchWrapper = styled('div', {
  position: 'relative',
  width: '80%',
});

const SearchBar = styled('input', {
  border: '1px solid $black1',
  padding: '$x4',
  width: '100%',
});

const SearchIconWrapper = styled('div', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '$x4',
});

const SearchSection = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledSelect = styled('select', {
  width: '19%',
  border: '1px solid black',
  padding: '$x2',
});

const StyledOption = styled('option', {});

// const StyledSelect = styled(Select.Root, {
//   maxWidth: '100%',
//   fontFamily: '$ff',
//   fontSize: '$13px',
//   fontWeight: '$w3',

// });

// const SelectTrigger = styled(Select.Trigger, {
//   marginLeft: 'auto',
//   width: '19%',
//   border: '1px solid $black1',
//   background: '$white1',
//   textAlign: 'left',
//   paddingLeft: '$x2',
//   textTransform: 'uppercase',

//   fontFamily: '$ff',
//   fontSize: '$13px',
//   fontWeight: '$w3',

// });

// const SelectValue = styled(Select.Value, {
//   display: 'flex',
//   justifyContent: 'space-between',
//   fontFamily: '$ff',
//   fontSize: '$13px',
//   fontWeight: '$w3',
// });

// const SelectContent = styled(Select.Content, {
//   paddingLeft: '$x2',
//   fontFamily: '$ff',
//   fontSize: '$13px',
//   fontWeight: '$w3',
// })

// const SelectIcon = styled(Select.Icon, {

// })

// const SelectViewport = styled(Select.Viewport, {

// })

// const SelectItem = styled(Select.Item, {
//   padding: '$x4 0',
//   paddingLeft: '$x2',
//   background: '$white1',
//   borderBottom: '1px solid $black1',
//   borderLeft: '1px solid $black1',
//   borderRight: '1px solid $black1',

//   textTransform: 'uppercase',
//   '&:first-child': {
//     borderTop: '1px solid $black1',
//   }

// })

// const SelectItemText = styled(Select.ItemText, {

// })
