/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
* @providesModule ActionSheet1
* @flow-weak
*/
'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    DatePickerIOS,
    TouchableOpacity,
    TouchableHighlight,
    Navigator,
    Dimensions,
    Text,
} from 'react-native';

var Overlay = require('./overlay.js');

module.exports =  React.createClass({
    getInitialState() {
        return {
            visible: false,
            mode: 'date',
            date: new Date(),
        };
    },
    showDatePicker(date, callback) {
        this.callback = callback;
        date = date || new Date();

        this.setState({
            mode: 'date',
            visible: true,
            date: date,
        });
    },
    showTimePicker(date, callback) {
        this.callback = callback;
        date = date || new Date();

        this.setState({
            mode: 'time',
            visible: true,
            date: date,
        });
    },
    onClose() {
        this.setState({
            visible: false,
        });
    },
    onComplete() {
        this.setState({
            visible: false,
        });
        this.callback(this.state.date);
    },
    onDateChange(date) {
        this.setState({date: date});
    },
    render() {
        return this.state.visible && (
            <Overlay visible={this.state.visible}>
                <View style={styles.actionSheetContainer}>
                    <TouchableHighlight
                      onPress={this.onComplete}
                      underlayColor="#f4f7f7"
                      style={styles.button}>
                        <Text style={styles.buttonText}>{this.props.selectLabel}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={this.onClose}
                      underlayColor="#f4f7f7"
                      style={styles.button}>
                        <Text style={styles.buttonText}>{this.props.close}</Text>
                    </TouchableHighlight>
                    <View style={styles.separator}/>
                    <DatePickerIOS
                        date={this.state.date}
                        mode={this.state.mode}
                        onDateChange={this.onDateChange}
                        style = {styles.datePicker}
                        />
                </View>
            </Overlay>
        );
    },
});

var styles = StyleSheet.create({
    actionSheetContainer: {
        height: Dimensions.get('window').height,
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    datePicker: {
        backgroundColor: 'white',
    },
    touchableOpacity: {
        flex: 1,
    },
    button: {
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    buttonText: {
        color: '#295bac',
        fontSize: 20,
        textAlign: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    },
});
