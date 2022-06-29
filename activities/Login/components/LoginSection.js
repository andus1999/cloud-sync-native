import Colors from "../../../styles/Colors";
import Styles from "../../../styles/Styles";

import React from 'react'
import {
  Text,
  View,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from "../../Main/components/Button";

const LoginSection = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [info, setInfo] = React.useState("Login to continue");

  const signIn = async () => {
    setLoading(true)
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    }
    catch {
      setInfo("Login failed");
    }
    setLoading(false);
  }

  return (
    <View style={Styles.sectionContainer}>
      <Text
        style={[
          Styles.title,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Login
      </Text>
      <Text
        style={[
          Styles.subtitle,
          {
            color: isDarkMode ? Colors.primary : Colors.primary,
          },
        ]}>
        {info}
      </Text>
      <View style={{ margin: 20 }}>
        <TextInput style={Styles.input} placeholder='Email' onChangeText={(e) => setEmail(e)} />
        <TextInput style={Styles.input} placeholder='Password' secureTextEntry={true} onChangeText={(e) => setPass(e)} />
        {loading ? <ActivityIndicator color={Colors.primary} size='large' style={Styles.progress} /> :
          <Button text="Login" onPress={signIn} size="large" />
        }
      </View>

    </View>
  )
}

export default LoginSection
