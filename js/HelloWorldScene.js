'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ViroScene, ViroText, Viro360Image, Viro360Video } from 'react-viro';

var HelloWorldScene = React.createClass({
  getInitialState() {
    return {};
  },
  render: function() {
    // <Viro360Image source={require('./res/guadalupe_360.jpg')} />
    return (
      <ViroScene>
        <Viro360Video
          source={require('./res/video.mp4')}
          loop={true}
          paused={false}
          volume={1.0}
        />
        <ViroText
          text="Hello World!"
          width={2}
          height={2}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
        />
      </ViroScene>
    );
  }
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = HelloWorldScene;
