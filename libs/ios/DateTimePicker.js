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
    let datePickerStyle = styles.datePicker
    if (this.props.datePickerStyle)
      datePickerStyle = this.props.datePickerStyle
    let datePickerContainerStyle = styles.actionSheetContainer
    if (this.props.datePickerContainerStyle)
      datePickerContainerStyle = this.props.datePickerContainerStyle

    return this.state.visible && (
        <Overlay visible={this.state.visible}>
          <View style={styles.datePickerContainerStyle}>
            <View style={styles.actionsContainer}>
              <TouchableHighlight
                onPress={this.onComplete}
                underlayColor="#f4f7f7"
                style={styles.button}>
                <Text style={this.props.textStyleSelect}>{this.props.selectLabel}</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.onClose}
                underlayColor="#f4f7f7"
                style={styles.button}>
                <Text style={this.props.textStyleClose}>{this.props.closeLabel}</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.separator}/>
            <DatePickerIOS
              date={this.state.date}
              mode={this.state.mode}
              onDateChange={this.onDateChange}
              style = {datePickerStyle}
              />
          </View>
        </Overlay>
      );
  },
});

var height =  Dimensions.get('window').height
var width =  Dimensions.get('window').width

var styles = StyleSheet.create({
  actionSheetContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: width
  },
  datePicker: {
    backgroundColor: 'rgba(255, 255, 255, 0.96125)',
    width: width,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  touchableOpacity: {
    flex: 1,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.96125)',
    flex: 1
  },
  buttonSeparator:{

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
  actionsContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
});
