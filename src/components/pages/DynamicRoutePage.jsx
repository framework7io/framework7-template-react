import React, { Component } from 'react';
import { Page, Navbar, Block, Link } from 'framework7-react';

export default class DynamicRoutePage extends Component {
  render() {
    return (
      <Page>
        <Navbar title="Dynamic Route" backLink="Back" />
        <Block strong>
          <ul>
            <li><b>Url:</b> {this.props.f7route.url}</li>
            <li><b>Path:</b> {this.props.f7route.path}</li>
            <li><b>Params:</b>
              <ul>
                {Object.keys(this.props.f7route.params).map(key => (
                  <li key={key}><b>{key}:</b> {this.props.f7route.params[key]}</li>
                ))}            
              </ul>
            </li>
            <li><b>Query:</b>
              <ul>
                {Object.keys(this.$f7route.query).map(key => (
                  <li key={key}><b>{key}:</b> {this.props.f7route.query[key]}</li>
                ))}
              </ul>
            </li>
            <li><b>Route:</b> {JSON.stringify(this.props.f7route.route)}</li>
          </ul>
        </Block>
        <Block strong>
          <Link onClick={() => this.props.f7router.back()}>Go back via Router API</Link>
        </Block>
      </Page>
    );
  }
}