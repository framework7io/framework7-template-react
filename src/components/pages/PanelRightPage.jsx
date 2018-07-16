import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Right Panel" />
    <Block strong>
      <p>Right panel content goes here</p>
    </Block>
    <BlockTitle>Load page in panel</BlockTitle>
    <List>
      <ListItem link="/about/" title="About"></ListItem>
      <ListItem link="/form/" title="Form"></ListItem>
    </List>
    <BlockTitle>Load page in main view</BlockTitle>
    <List>
      <ListItem link="/about/" title="About" view="#main-view" panelClose></ListItem>
      <ListItem link="/form/" title="Form" view="#main-view" panelClose></ListItem>
    </List>
  </Page>
);
