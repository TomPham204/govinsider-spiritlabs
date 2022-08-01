import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { Link, Outlet } from '@remix-run/react';
import React from 'react';
// import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { styled } from '_@landing-ui/design-system/stitches.config';

type NavItem = {
  title: string;
  to?: string;
  children?: NavItem[];
};

const CollapsibleContent = CollapsiblePrimitive.Content;

export default function () {
  return (
    <Flex>
      <NavBar>
        {navItem.map((item) =>
          item.children ? (
            <CollapsibleIem key={item.title}>
              <CollapsibleTrigger>{item.title}</CollapsibleTrigger>
              {item.children?.map((nestedItem) => (
                <CollapsibleContent key={nestedItem.title} asChild>
                  <StyledLink
                    // prefetch="intent"
                    type="child"
                    to={nestedItem.to || '/'}
                  >
                    {nestedItem.title}
                  </StyledLink>
                </CollapsibleContent>
              ))}
            </CollapsibleIem>
          ) : (
            <StyledLink key={item.title} to={item.to || '/'}>
              {item.title}
            </StyledLink>
          ),
        )}
      </NavBar>

      <Content>
        <Outlet />
      </Content>
    </Flex>
  );
}

const navItem: NavItem[] = [
  {
    title: 'Account',
    children: [
      {
        title: 'Account setting',
        to: '/account',
      },
      {
        title: 'Intent and interest',
        to: 'intent-and-interest',
      },
      {
        title: 'Subscription settings',
        to: '/subscription',
      },
    ],
  },
  {
    title: 'Bookmarks',
    children: [
      {
        title: 'Something',
        to: '/bookmark',
      },
    ],
  },
  {
    title: 'Watch history',
    to: '/history',
  },
];

const Flex = styled('div', {
  display: 'flex',
  padding: '$x15',
  gap: '$x15',
});

const NavBar = styled('nav', {
  flexBasis: '300px',
  border: '1px solid $primary500',
});

const CollapsibleIem = styled(CollapsiblePrimitive.Root, {});

const CollapsibleTrigger = styled(CollapsiblePrimitive.Trigger, {
  display: 'block',
  size: '100% 58px',
  textAlign: 'left',
  border: 'none',
  background: 'transparent',
  fontSize: '$18px',
  padding: 0,
});

const StyledLink = styled(Link, {
  display: 'flex',
  flexPosition: 'flex-start center',
  height: '58px',
  fontSize: '$18px',
  variants: {
    type: {
      child: {
        paddingLeft: '$x10',
        transition: '.3s',
        '&:hover': {
          background: '$grey50',
        },
      },
    },
  },
});

const Content = styled('main', {
  flex: 1,
  border: '1px solid $primary500',
});
