import React from 'react';
import {
    App,
    Panel,
    View,
    Statusbar,
    Popup,
    Page,
    Navbar,
    NavRight,
    Block,
    Link,
    LoginScreen,
    LoginScreenTitle,
    Label,
    List,
    ListItem,
    Input,
    ListButton,
    BlockFooter
} from 'framework7-react';

import routes from '../routes';

export default function (props) {
  let theme = 'auto';

  if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
  }

  return (
    <App params={{ theme, routes }}>
      <Statusbar />
      <Panel left cover>
        <View url="/panel-left/" linksView=".view-main" />
      </Panel>
      <Panel right reveal>
        <View url="/panel-right/"/>
      </Panel>
      <View url="/" main className="ios-edges"/>

      <Popup id="popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</Block>
          </Page>
        </View>
      </Popup>

      <LoginScreen id="login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListItem>
                <Label>Username</Label>
                <Input name="username" placeholder="Username" type="text"></Input>
              </ListItem>
              <ListItem>
                <Label>Password</Label>
                <Input name="password" type="password" placeholder="Password"></Input>
              </ListItem>
            </List>
            <List>
              <ListButton title="Sign In" loginScreenClose></ListButton>
              <BlockFooter>
                <p>Click Sign In to close Login Screen</p>
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>      
    </App>
  );
};
