import React from 'react';
// import {
//   Framework7App, Views, View, Pages, Page, Panel, 
//   Navbar, NavLeft, NavCenter, NavRight, Statusbar, 
//   Input, Label, Link, List, ListItem, ListButton, LoginScreen, LoginScreenTitle,
//   GridRow, GridCol, ContentBlock, ContentBlockTitle, Button, Popup
// } from 'framework7-react';
import {
  Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
  List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';

import {routes} from '../routes';

export const App = () => (
	<Framework7App themeType="ios" routes={routes}>
		{/* Statusbar */}
		<Statusbar />

		{/* Left Panel */}
		<Panel left reveal layout="dark">
			<View id="left-panel-view" navbarThrough dynamicNavbar="true">
				<Navbar title="Left Panel"></Navbar>
					<Pages>
						<Page>
							<ContentBlock inner>
								<p>Left panel content goes here</p>
							</ContentBlock>
							<ContentBlockTitle>Load page in panel</ContentBlockTitle>
							<List>
								<ListItem link="/about/" title="About"></ListItem>
								<ListItem link="/form/" title="Form"></ListItem>
							</List>
							<ContentBlockTitle>Load page in main view</ContentBlockTitle>
							<List>
								<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
								<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
							</List>
						</Page>
					</Pages>
			</View>
		</Panel>

		{/* Right Panel */}                
		<Panel right cover layout="dark">
			<View id="right-panel-view" navbarThrough dynamicNavbar={true}>
				<Navbar title="Right Panel" sliding />
				<Pages>
					<Page>
						<ContentBlock>
							<p>Right panel content goes here</p>
						</ContentBlock>
						<ContentBlockTitle>Load page in panel</ContentBlockTitle>
						<List>
							<ListItem link="/about/" title="About"></ListItem>
							<ListItem link="/form/" title="Form"></ListItem>
						</List>
						<ContentBlockTitle>Load page in main view</ContentBlockTitle>
						<List>
							<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
							<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
						</List>
					</Page>
				</Pages>
			</View>
		</Panel>

		{/* Main Views */}
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Navbar */}
				<Navbar>
					<NavLeft>
						<Link icon="icon-bars" openPanel="left" />
					</NavLeft>
					<NavCenter sliding>Framework7</NavCenter>
					<NavRight>
						<Link icon="icon-bars" openPanel="right"></Link>
					</NavRight>
				</Navbar>
				{/* Pages */}
				<Pages>
					<Page>
						<ContentBlockTitle>Welcome to my App</ContentBlockTitle>
						<ContentBlock inner>
							<p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
						</ContentBlock>
						<ContentBlockTitle>Navigation</ContentBlockTitle>
						<List>
							<ListItem link="/about/" title="About"></ListItem>
							<ListItem link="/form/" title="Form"></ListItem>
							<ListItem link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></ListItem>
						</List>
						<ContentBlockTitle>Side Panels</ContentBlockTitle>
						<ContentBlock>
							<GridRow>
								<GridCol width={50}>
									<Button openPanel="left">Left Panel</Button>
								</GridCol>
								<GridCol width={50}>
									<Button openPanel="right">Right Panel</Button>
								</GridCol>
							</GridRow>
						</ContentBlock>
						<ContentBlockTitle>Modals</ContentBlockTitle>
						<ContentBlock>
							<GridRow>
								<GridCol width={50}>
									<Button openPopup="#popup">Popup</Button>
								</GridCol>
								<GridCol width={50}>
									<Button openLoginScreen="#login-screen">Login Screen</Button>
								</GridCol>
							</GridRow>
						</ContentBlock>
					</Page>
				</Pages>
			</View>
		</Views>

		{/* Popup */}
		<Popup id="popup">
			<View navbarFixed>
				<Pages>
					<Page>
						<Navbar title="Popup">
							<NavRight>
								<Link closePopup>Close</Link>
							</NavRight>
						</Navbar>
						<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
					</Page>
				</Pages>
			</View>
		</Popup>    

		{/* Login Screen */}
		<LoginScreen id="login-screen">
			<View>
				<Pages>
					<Page loginScreen>
						<LoginScreenTitle>Login</LoginScreenTitle>
						<List form>
							<ListItem>
								<FormLabel>Username</FormLabel>
								<FormInput name="username" placeholder="Username" type="text" />
							</ListItem>
							<ListItem>
								<FormLabel>Password</FormLabel>
								<FormInput name="password" type="password" placeholder="Password" />
							</ListItem>
						</List>
						<List>
							<ListButton title="Sign In" closeLoginScreen />
							<ListLabel>
								<p>Click Sign In to close Login Screen</p>
							</ListLabel>
						</List>
					</Page>
				</Pages>
			</View>
		</LoginScreen>
		
	</Framework7App>  
);
