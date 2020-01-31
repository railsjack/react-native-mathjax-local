import React from 'react';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

class MathJax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 1,
      opacity: 0,
    };
  }

  handleMessage(message) {
    try {
      console.log('message.nativeEvent.data', message.nativeEvent.data)
      const { width, height } = JSON.parse(message.nativeEvent.data);
      this.setState({
        width,
        height,
        opacity: 1,
      });
    } catch (error) {
      console.log('error on displaying latex')
    }
  }

  render() {
    let formula = escape(this.props.children);
    const props = Object.assign({}, this.props, { html: undefined });
    // const assetsPathPrefix = 
    const assetsPathPrefix =
      this.props.debug === true ? 'http://192.168.0.213:8000/'
        : Platform.OS === 'android' ? 'file:///android_asset/'
          : './';

    const injectScript = `
      writeMathJax("${formula}"); 
      parseMathJax(); 
      applyStyle("${this.props.style}");
      true;
    `;

    return (
      <View style={{ opacity: this.state.opacity, width: this.state.width, height: this.state.height, ...props.containerStyle, }}>
        <WebView
          style={{ backgroundColor: 'transparent' }}
          scrollEnabled={false}
          onMessage={this.handleMessage.bind(this)}
          source={{ uri: assetsPathPrefix + 'MathJax/MathJax.html' }}
          allowFileAccess={true}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
          mixedContentMode={"always"}
          cacheEnabled={false}
          allowingReadAccessToURL="file://"
          originWhitelist={['*']}
          injectedJavaScript={injectScript}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default MathJax;