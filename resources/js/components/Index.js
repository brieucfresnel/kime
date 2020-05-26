import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AuthDataProvider from './AuthDataProvider.js';
import Router from './Router.js';

function Index(props) {

    return (
      <div>
        <BrowserRouter>
          <AuthDataProvider>
            <Router/>
          </AuthDataProvider>
        </BrowserRouter>
      </div>
    );
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));