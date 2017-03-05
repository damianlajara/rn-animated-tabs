import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import RNAnimatedTabs from 'rn-animated-tabs';
import PushedDownView from '../lib/pushedDownView';
const DATA = ['Search our database for delicious foods', 'Write down your recipes!', 'Some links for inspiration!'];

export default class TabCustom extends Component {
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

  renderTabs = (title, index) => {
    switch (index) {
      case 1:
        return (
          <View style={styles.row}>
            <Image source={require('../img/black-light-bulb.png')} />
            <Text style={styles.tabText}>{title}</Text>
          </View>
        )
      case 2:
        return (
          <View style={styles.row}>
            <Image source={require('../img/link-symbol.png')} />
            <Text style={styles.tabText}>{title}</Text>
          </View>
        )
      default:
        return (
          <View style={styles.row}>
            <Image source={require('../img/magnifier-tool.png')} />
            <Text style={styles.tabText}>{title}</Text>
          </View>
        )
    }
  }

  render() {
    return (
      <PushedDownView>
        <View style={styles.container}>
          <View style={[styles.header, styles.center]}>
            <Text style={styles.headerText}> Tabs Are Very Customizable ! </Text>
          </View>
          <RNAnimatedTabs
            renderTabContent={this.renderTabs}
            activeTabIndicatorHeight={4}
            activeTabIndicatorColor="#34495E"
            containerStyle={{borderWidth: 2, borderColor: 'orange'}}
            tabButtonStyle={{backgroundColor: '#aaa'}}
            tabTitles={['Search', 'Ideas', 'Links']}
            onChangeTab={this.handleTabChange} />
            <View style={[styles.container, styles.center]}>
              <Text>
                {DATA[this.state.currentTab]}
              </Text>
            </View>
            <Text style={{textAlign: 'center'}}>
              Icons made by SimpleIcon
            </Text>
            <Text style={{textAlign: 'center'}}>
              (http://www.flaticon.com/authors/simpleicon)
            </Text>
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
  },
  header: {
    backgroundColor: '#34495E',
    height: 200
  },
  headerText: {
    color: '#fff',
    fontSize: 18
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
    paddingLeft: 8
  }
});
