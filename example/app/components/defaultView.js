import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DefaultView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Examples</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={Actions.tabTop}>
            <View>
              <Text style={styles.buttonText}>Top Tab</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={Actions.tabBottom}>
            <View>
              <Text style={styles.buttonText}>Bottom Tab</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={Actions.tabScrollable}>
            <View>
              <Text style={styles.buttonText}>Scrollable Tab</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={Actions.tabCustom}>
            <View>
              <Text style={styles.buttonText}>Custom Tab</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  button: {
    height: 130,
    width: 130,
    padding: 4,
    backgroundColor: 'teal',
    borderRadius: 250,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  title: {
    paddingBottom: 16,
    fontSize: 26,
    textAlign: 'center'
  }
});
