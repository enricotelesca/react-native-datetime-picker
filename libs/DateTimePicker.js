'use strict';

import React from 'react-native';
import {
    Platform
} from 'react-native';

var DateTimePickerAndroid = require('./android/DateTimePicker.js');
var DateTimePickerIOS= require('./ios/DateTimePicker.js');
var DateTimePicker = (Platform.OS === 'android') ? DateTimePickerAndroid : DateTimePickerIOS;


module.exports = DateTimePicker;
