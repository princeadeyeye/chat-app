import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
