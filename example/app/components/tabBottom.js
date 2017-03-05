import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNAnimatedTabs from 'rn-animated-tabs';
import PushedDownView from '../lib/pushedDownView';
const DATA = ['Bottom Tab 1 Content', 'Extra Stuff for Bottom Tab 2', 'More stuff for Bottom Tab 3'];

export default class TabBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }

  handleTabChange = (value) => {
    console.log('setting tab state with', value);
    this.setState({ currentTab: value });
  };

  render() {
    return (
      <PushedDownView>
        <View style={styles.container}>
          <View style={[styles.container, styles.center]}>
            <Text>
              {DATA[this.state.currentTab]}
            </Text>
          </View>
          <RNAnimatedTabs
            top={true}
            height={55}
            tabTitles={['Bottom Tab 1', 'Bottom Tab 2', 'Bottom Tab 3']}
            onChangeTab={this.handleTabChange} />
        </View>
      </PushedDownView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
