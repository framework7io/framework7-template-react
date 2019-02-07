import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListItem,
  ListInput,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Form" backLink="Back" />
    <BlockTitle>Form Example</BlockTitle>
    <List form>
      <ListInput
        label="Name"
        type="text"
        placeholder="Name"
      />
      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
      />
      <ListInput
        label="URL"
        type="url"
        placeholder="URL"
      />
      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
      />
      <ListInput
        label="Phone"
        type="tel"
        placeholder="Phone"
      />
      <ListInput
        label="Gender"
        type="select"
        defaultValue="Male"
      >
        <option>Male</option>
        <option>Female</option>
      </ListInput>
      <ListInput
        label="Birth date"
        type="date"
        placeholder="Birth date" value="2014-04-30"
      />
      <ListItem title="Toggle">
        <Toggle slot="after" />
      </ListItem>
      <ListInput
        label="Slider"
        input={false}
      >
        <Range label={true} slot="input" min={0} max={100} value={50} step={1} />
      </ListInput>
      <ListInput
        label="Textarea"
        type="textarea"
        placeholder="Bio"
      />
      <ListInput
        label="Resizable"
        type="textarea"
        placeholder="Bio"
        resizable
      />
    </List>

    <BlockTitle>Checkbox group</BlockTitle>
    <List form>
        {Array.from(Array(3).keys()).map(n => (
            <ListItem key={n} checkbox name="my-checkbox" value={n + 1} title={`Checkbox ${n + 1}`} />
        ))}
    </List>

    <BlockTitle>Radio buttons group</BlockTitle>
    <List form>
        {Array.from(Array(3).keys()).map(n => (
            <ListItem key={n} radio name="my-radio" defaultChecked={n === 0} value={n + 1} title={`Radio ${n + 1}`} />
        ))}
    </List>

    <BlockTitle>Buttons</BlockTitle>
    <Block strong>
      <Row tag="p">
        <Button className="col">Button</Button>
        <Button className="col" fill>Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" raised>Raised</Button>
        <Button className="col" raised fill>Raised Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" round>Round</Button>
        <Button className="col" round fill>Round Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" outline>Outline</Button>
        <Button className="col" round outline>Outline Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small outline>Small</Button>
        <Button className="col" small round outline>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small fill>Small</Button>
        <Button className="col" small round fill>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" large raised>Large</Button>
        <Button className="col" large fill raised>Large Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" large fill raised color="red">Large Red</Button>
        <Button className="col" large fill raised color="green">Large Green</Button>
      </Row>
    </Block>
  </Page>
);
