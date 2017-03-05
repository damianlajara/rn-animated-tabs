import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNAnimatedTabs from 'rn-animated-tabs';
import PushedDownView from '../lib/pushedDownView';
const DATA = ['Top Tab 1 Content', 'Extra Stuff for Top Tab 2', 'More stuff for Top Tab 3'];

export default class TabTop extends Component {
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
          <RNAnimatedTabs
            height={55}
            tabTitles={['Top Tab 1', 'Top Tab 2', 'Top Tab 3']}
            onChangeTab={this.handleTabChange} />
            <View style={[styles.container, styles.center]}>
              <Text>
                {DATA[this.state.currentTab]}
              </Text>
            </View>
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
