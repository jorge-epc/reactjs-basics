import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';

export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Route path={`${this.props.match.url}/:id`} component={Home} />
            <Route exact path={this.props.match.url} render={() => (
              <h3>Hello React!</h3>
            )} />
          </div>
        </div>
      </div>
    );
  }
}
