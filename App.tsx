import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebViewContainer from './src/components/webView/WebViewContainer';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <WebViewContainer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
