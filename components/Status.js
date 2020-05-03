import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native'
import { Constant } from 'expo'
import NetInfo from '@react-native-community/netinfo';


export default class Status extends Component {
    state = {
        info: null
    }

    async componentWillMount() {
        this.unsubscribe = NetInfo.addEventListener(state => {
          const { type } = state
          console.log(type)
          this.setState({ info: type})
          });
          
          // To unsubscribe to these update, just use:
         
        
    }

    componentWillUnmount() {
            this.unsubscribe();
    }

    render() {
        const { info } = this.state;
        const { isConnectedColor, notConnectedColor } = this.props
        const isConnected = info !== 'none'
        const backgroundColor = isConnected ? isConnectedColor : notConnectedColor

        const statusBar = (
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={isConnected ? 'dark-content' : 'light-content'}
                animated={false} 
            />
        )

        const messageContainer = (
            <View style={styles.messageContainer}>
            {statusBar}
            {!isConnected && (
                <View style={styles.bubble}>
                    <Text style={styles.text}>No network connection</Text>
                </View>
            )

            }
            </View>
        )

        if(Platform.OS === 'ios') {
            return <View style={[styles.status, { backgroundColor }]}>{statusBar}</View>
        }
        return messageContainer;
    }
}

const styles = StyleSheet.create({
    messageContainer: {
        zIndex: 1,
        position: 'absolute',
        top:  20,
        right: 0,
        left: 0,
        height: 80,
        alignItems: 'center',
    },
    bubble: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
        },
    text: {
        color: 'white',
    },
})