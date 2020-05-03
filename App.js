import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Status from './components/Status'

export default class App extends Component {
    renderMessageList() {
      return (
        <View style={styles.content}></View>
      )
    }

    renderToolbar() {
      return (
        <View style={styles.toolbar}></View>
      )
    }

    renderInputMethodEditor() {
      return (
        <View style={styles.inputMethodEditor}></View>
      )
    }
    render() {
      return (
        <View style={styles.container}>
        <Status isConnectedColor='blue' notConnectedColor='red' />
          {this.renderMessageList()}
          {this.renderToolbar()}
          {this.renderInputMethodEditor()}
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
  }
});
