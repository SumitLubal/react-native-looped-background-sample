/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Video from 'react-native-video';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput} from 'react-native-paper';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const styleTypes = ['default', 'dark-content', 'light-content'];

  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [text, setText] = React.useState('');
  const [styleStatusBar, setStyleStatusBar] = React.useState(styleTypes[0]);

  return (
    <>
      <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
      <View style={styles.container}>
        <Video
          source={require('./video.mp4')}
          rate={1.0}
          volume={1.0}
          muted={true}
          resizeMode={'cover'}
          repeat
          style={styles.video}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            color: 'white',
            opacity: 0.3,
            backgroundColor: 'black',
          }}
        />
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <View style={styles.content}>
            <TextInput
              label="Email"
              style={{
                margin: 20,
              }}
            />
            <TextInput
              label="Password"
              value={text}
              onChangeText={(text) => setText(text)}
              style={{
                margin: 20,
              }}
            />
            <TouchableWithoutFeedback>
              <Pressable
                style={{backgroundColor: 'blue', margin: 20}}
                onPress={() => {
                  console.log('hi');
                  Keyboard.dismiss();
                }}>
                <Text style={styles.text}>Hello</Text>
              </Pressable>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});

export default App;
