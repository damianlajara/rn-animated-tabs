import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';

const { width } = Dimensions.get('window');
const TabPadding = 15;
const ActiveTabHeight = 3;
const FullTabsWidth = width;

export default class RNAnimatedTabs extends Component {

  // https://babeljs.io/blog/2015/06/07/react-on-es6-plus
  static propTypes = {
    tabTitles: PropTypes.array.isRequired,
    onChangeTab: PropTypes.func,
    initialActiveTabIndex: PropTypes.number,
    top: PropTypes.bool,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    currentTab: PropTypes.number
  }

  static defaultProps = {
    initialActiveTabIndex: 0,
    top: false, // Default active line to bottom
    height: 60,
    backgroundColor: '#fff',
    currentTab: null
  }

  constructor(props) {
    super(props);
    this.state = {
      left: new Animated.Value(0),
      tabWidth: FullTabsWidth / this.props.tabTitles.length
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currentTab } = nextProps;
    currentTab != null && currentTab !== this.props.currentTab && this.moveTo(currentTab);
  }

  componentDidMount() {
    // Give option to make component controlled with currentTab
    const { currentTab, initialActiveTabIndex } = this.props;
    this.moveTo(currentTab == null ? initialActiveTabIndex : currentTab);
  }

  moveTo = (index) => {
    this.props.onChangeTab && this.props.onChangeTab(index);
		Animated.timing(this.state.left, { toValue: this.state.tabWidth * index }).start();
	}

  renderTabs = () => {
    return this.props.tabTitles.map((title, index) => {
      return (
        <TouchableOpacity key={`customTab${index}`} style={styles.tabButton} onPress={() => this.moveTo(index)} activeOpacity={0.8}>
          <Text style={styles.tabText}>
            {title}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    const { height, backgroundColor } = this.props;
    const activeLineDirection = this.props.top ? { top: 0 } : { bottom: 0 } // Stick to bottom or top
    return (
      <View style={[styles.tabView, { width, height, backgroundColor, elevation: 4 } ]}>
        <View style={styles.tabs}>
          {this.renderTabs()}
        </View>
        <View style={[styles.animatedLineContainer, activeLineDirection]}>
          <Animated.View style={[styles.activeTabIndicator, { marginLeft: this.state.left, width: this.state.tabWidth }]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabView: {
    position: 'relative',
    left: 0,
    right: 0
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animatedLineContainer: {
    position: 'absolute',
    left: 0,   // ignore parent padding
    right: 0,   // ignore parent padding
    height: ActiveTabHeight,
    flexDirection: 'row'
  },
  activeTabIndicator: {
    height: ActiveTabHeight,
    backgroundColor: '#FE5F55'
  },
  tabText: {
    color: '#6B6868',
    fontSize: 16,
    fontWeight: '500',
    padding: 2
  }
});
