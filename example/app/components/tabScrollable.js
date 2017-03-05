import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import RNAnimatedTabs from 'rn-animated-tabs';
import PushedDownView from '../lib/pushedDownView';

export default class TabScrollable extends Component {
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
            containerStyle={Platform.OS === 'ios' ? {
              shadowColor: 'black',
              shadowOpacity: 0.3,
              shadowRadius: 3,
              shadowOffset: { width: 0, height: 2 }
            } : { elevation: 4 }}
            tabTitles={['Scroll Tab 1', 'Scroll Tab 2', 'Scroll Tab 3']}
            currentTab={this.state.currentTab}
            onChangeTab={this.handleTabChange} />
          <SwipeableViews index={this.state.currentTab} onChangeIndex={this.handleTabChange}>
            <View style={[styles.slide, styles.slide1]}>
              <Text style={styles.text}>
                Something for scroll tab 1 goes here
              </Text>
            </View>
            <View style={[styles.slide, styles.slide2]}>
              <Text style={styles.text}>
                More stuff for scroll tab 2
              </Text>
            </View>
            <View style={[styles.slide, styles.slide3]}>
              <Text style={styles.text}>
                Last one for scroll tab 3
              </Text>
            </View>
          </SwipeableViews>
        </View>
      </PushedDownView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  slide: {
    flex: 1,
    padding: 15,
  },
  slide1: {
    backgroundColor: '#F4B350',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
