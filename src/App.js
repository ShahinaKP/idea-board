import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import whitetheme from '../config/theme/whitetheme';
import darktheme from '../config/theme/darktheme';
import GlobalStyles from './components/GlobalStyles';
import Modal from './components/Modal';

import Home from './pages/Home';
import Page404 from './pages/Page404';

export default class App extends React.Component {
  static loadTheme = (themes) => {
    let theme = {};

    if (themes.selected.id === 'white_theme') {
      theme = whitetheme;
    } else if (themes.selected.id === 'dark_theme') {
      theme = darktheme;
    }

    return theme;
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  onModalClose = () => this.setState({ showModal: false });

  // renderModal = () => (
  //   this.state.showModal ? (
  //     <Modal onClose={this.onModalClose}>
  //       <div>
  //         <header><h2>Modal header</h2></header>
  //         <hr />
  //         <article>
  //           <p>This is an example of a modal!</p>
  //           <p><code>Esc</code> works too, if onClose is passed ;)</p>
  //         </article>
  //         <hr />
  //         <footer><button onClick={this.onModalClose}>Close</button></footer>
  //       </div>
  //     </Modal>
  //   ) : null
  // );

  render() {
    return (
      <ThemeProvider theme={whitetheme}>
        <div>
          <GlobalStyles theme={whitetheme} />
          <Router>
            {/* Please update the code below for your project requirements */}
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={Page404} />
              </Switch>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}
