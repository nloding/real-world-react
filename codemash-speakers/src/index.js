import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/App'

import './styles/styles.css';

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
)

// if (module.hot) {
//   module.hot.accept('./containers/App', () => {
//     const NextApp = require('./containers/App').default;
//     render(
//       <Provider store={store}>
//         <ConnectedRouter history={history}>
//           <NextApp />
//         </ConnectedRouter>
//       </Provider>,
//       rootElement
//     );
//   }); 
// }