import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TabScrollable from './components/tabScrollable';
import TabTop from './components/tabTop';
import TabBottom from './components/tabBottom';
import TabCustom from './components/tabCustom';
import DefaultView from './components/defaultView';
export default class Example extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="main" component={DefaultView} hideNavBar initial />
          <Scene key="tabScrollable" title="Scrollable Tab"  component={TabScrollable} hideNavBar={false} />
          <Scene key="tabTop" title="Top Tab" component={TabTop} hideNavBar={false} />
          <Scene key="tabBottom" title="Bottom Tab" component={TabBottom} hideNavBar={false} />
          <Scene key="tabCustom" title="Custom Tab" component={TabCustom} hideNavBar={false} />
        </Scene>
      </Router>
    );
  }
}
