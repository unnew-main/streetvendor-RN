import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewContainer = () => {
  // const BASE_URL = 'http://10.0.2.2:3000'
  const BASE_URL = 'http://localhost:3000';

  return (
    <WebView
      source={{uri: BASE_URL}}
      geolocationEnabled={true}
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled={true}
    />
  );
};

export default WebViewContainer;
