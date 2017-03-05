import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

export default class PushedDownView extends Component {
  render() {
    return (
      <View style={[styles.container, { marginTop: Platform.OS === 'ios' ? 64 : 54 }]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
