import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Root } from './components/Root';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Root} />
          <Route path={'/site'} component={Root} />
        </div>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById('app'));
