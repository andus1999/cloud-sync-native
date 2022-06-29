import React from 'react'
import { ScrollView } from 'react-native'
import Banner from './components/Banner'
import LoginSection from './components/LoginSection'

const Login = () => {
  return (
    <ScrollView>
      <Banner />
      <LoginSection />
    </ScrollView>

  )
}

export default Login
