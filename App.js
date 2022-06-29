/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, update, ref } from "firebase/database";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import Login from './activities/Login';
import Main from './activities/Main';

const firebaseConfig = {
  apiKey: "AIzaSyAhyAj4xZoz36pX5Fm4g-a8PnazteInyRQ",
  authDomain: "cloud-sync-iot.firebaseapp.com",
  databaseURL: "https://cloud-sync-iot-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cloud-sync-iot",
  storageBucket: "cloud-sync-iot.appspot.com",
  messagingSenderId: "956148285706",
  appId: "1:956148285706:web:d3bd87af649bd1b723faf3",
  measurementId: "G-QEQG8G8L2R"
};

initializeApp(firebaseConfig);

const App = () => {

  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
    const auth = getAuth();
    const database = getDatabase();

    // signOut(auth)

    onAuthStateChanged(auth, (u) => {
      if (u) {
        const uid = u.uid;
        update(ref(database, 'users/' + uid), {
          email: u.email,
        });
        setUser(u);
      } else {
        setUser(null);
      }
    });
  }, [])

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? Colors.darker : Colors.white} />
        <View style={{ height: '100%' }}>
          {user ?
            <Main user={user} /> :
            <Login />}
        </View>
      </SafeAreaView>
    </NavigationContainer>

  );
};

export default App;
