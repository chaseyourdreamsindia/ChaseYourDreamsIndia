import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, Modal, Alert } from 'react-native';
import * as eva from '@eva-design/eva';
import { useDispatch } from 'react-redux';
import { ApplicationProvider } from '@ui-kitten/components';
import tw from 'twrnc';
import axios from 'axios';
import BASE from '../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from '../../redux/store';
import { BASECOLOR } from "../../Assets/colors/colors";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const Signin = ({ navigation }) => {

  const dispatch = useDispatch();

  const [forgotPassModal, setForgotPassModal] = useState(false);

  const [otp, setOtp] = useState("");
  const [sentOtp, setSendOtp] = useState(false);
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState("")

  const [newPassword, setNewPassword] = useState({
    pass: "",
    confirmPass: ""
  });

  const [user, setUser] = useState({
    Email: "",
    Password: ""
  });

  const [helpers, setHelpers] = useState({
    Email: "",
    Password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  const SubmitHandler = () => {
    if (user.Email === "") {
      setHelpers({ ...helpers, Email: "This field is required !" })
      setTimeout(() => {
        setHelpers({ ...helpers, Email: "" });
      }, 3000);
    } else if (user.Password === "") {
      setHelpers({ ...helpers, Password: "This field is required !" })
      setTimeout(() => {
        setHelpers({ ...helpers, Password: "" });
      }, 3000);
    } else {
      axios.post(`${BASE}/user/signin`, user).then(async resp => {
        if (resp.data.success) {
          await AsyncStorage.setItem("cydi_TK", JSON.stringify(resp.data.token)).then(resp => {
            dispatch(Actions.setAuth(true));
            navigation.navigate("HomeMain");
          })
        } else if (resp.data.message === "not exist") {
          setHelpers({ ...helpers, Email: "User not Exist !" });
          setTimeout(() => {
            setHelpers({ ...helpers, Email: "" });
          }, 3000);
        } else if (resp.data.message === "invalid pass") {
          setHelpers({ ...helpers, Password: "Invalid Password !" });
          setTimeout(() => {
            setHelpers({ ...helpers, Password: "" });
          }, 3000);
        } else {
          console.log(resp.data.message);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const sendOtp = () => {
    axios.get(`${BASE}/user/forgotpassword/${email}`).then(resp => {
      Alert.alert(resp.data.message);
      if (resp.data.success) {
        setSendOtp(true);
      } else {
        Alert.alert(resp.data.message);
      }
    }).catch(err => {
      Alert.alert(err.message);
    })
  }

  const validateOtp = () => {
    if (otp) {
      axios.post(`${BASE}/user/forgotpassword/verify/${email}/${otp}`).then(resp => {
        if (resp.data.success) {
          setVerified(true);
          Alert.alert(resp.data.message);
        } else {
          Alert.alert(resp.data.message);
        }
      }).catch(Err => {
        Alert.alert(Err.message);
      })
    } else {
      Alert.alert("Please enter otp")
    }
  }

  const ChangePassword = () => {
    if (newPassword.pass === newPassword.confirmPass) {
      axios.post(`${BASE}/user/forgotpassword/change`, { password: newPassword.pass, email: email }).then(resp => {
        if (resp.data.success) {
          Alert.alert(resp.data.message);
          setForgotPassModal(false);
        } else {
          Alert.alert(resp.data.message);
        }
      }).catch(Err => {
        Alert.alert(Err);
      })
    } else {
      Alert.alert("passwords doesnot match !");
    }
  }

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <View style={Styles.root}>
        <Modal transparent={true} visible={forgotPassModal} animationType='slide'>
          <View style={[tw`w-full h-full flex flex-row items-end`, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
            <View style={[tw`w-full bg-white rounded-xl`, { height: "90%" }]}>
              <ImageBackground style={tw`w-full h-full`} source={require("../../Assets/bg.jpg")} imageStyle={tw`w-full h-full`}>
                <View style={tw`flex flex-row justify-center mt-2`}>
                  <TouchableOpacity onPress={() => setForgotPassModal(false)}>
                    <Entypo name="minus" size={30} />
                  </TouchableOpacity>
                </View>
                <View style={tw`p-3`}>
                  <TextInput placeholder='Enter Email' style={tw`border border-gray-300 p-3 rounded`} value={email} onChangeText={txt => setEmail(txt)} placeholderTextColor="gray"/>
                  <TouchableOpacity style={tw`p-3 mt-3 bg-black rounded`} onPress={sendOtp}>
                    <Text style={tw`text-white text-center`}>Send Otp</Text>
                  </TouchableOpacity>
                </View>
                {sentOtp && <View style={tw`p-3`}>
                  <Text>Enter otp</Text>
                  <TextInput placeholder='Enter Otp' style={tw`border border-gray-300 p-3 mt-4 rounded`} value={otp} onChangeText={txt => setOtp(txt)} placeholderTextColor="gray"/>
                  <TouchableOpacity style={tw`p-3 mt-3 bg-black rounded`} onPress={validateOtp}>
                    <Text style={tw`text-white text-center`}>Verify Otp</Text>
                  </TouchableOpacity>
                </View>}
                {verified && <View style={tw`p-3`}>
                  <Text>Set New Password</Text>
                  <TextInput placeholder='Enter Password' style={tw`border border-gray-300 p-3 mt-4 rounded`} value={newPassword.pass} onChangeText={txt => setNewPassword({ ...newPassword, pass: txt })} placeholderTextColor="gray"/>
                  <TextInput placeholder='Confirm Password' style={tw`border border-gray-300 p-3 mt-4 rounded`} value={newPassword.confirmPass} onChangeText={txt => setNewPassword({ ...newPassword, confirmPass: txt })} placeholderTextColor="gray"/>
                  <TouchableOpacity style={tw`p-3 mt-3 bg-black rounded`} onPress={ChangePassword}>
                    <Text style={tw`text-white text-center`}>Submit</Text>
                  </TouchableOpacity>
                </View>}
              </ImageBackground>
            </View>
          </View>
        </Modal>
        <ImageBackground source={require("../../Assets/bg.jpg")} imageStyle={tw`w-full h-full`} style={tw`w-full h-full`}>
          <View style={tw`flex flex-col justify-center items-center h-1/4 gap-5 mt-10`}>
            <Image
              source={require('../../Assets/Icons/logo.png')}
              style={Styles.logo}
            />
          </View>
          <View style={[tw`p-5 `, { flex: 1, borderLeftWidth: 0, borderTopLeftRadius: 30, gap: 2 }, {}]}>
            <Text style={Styles.text}>Sign in</Text>
            <Text style={tw`text-gray-600 mt-8 font-bold`}>Email</Text>
            <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, Email: txt })} />
            <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Email}</Text>
            <View style={tw`flex flex-row justify-between items-center`}>
              <View style={{ width: "90%" }}>
                <Text style={tw`text-gray-600 font-bold`}>Password</Text>
                <TextInput style={Styles.input} secureTextEntry={showPassword} onChangeText={txt => setUser({ ...user, Password: txt })} />
              </View>
              <View style={tw``}>
                {showPassword ? <TouchableOpacity onPress={() => setShowPassword(false)}>
                  <Ionicons name="eye-off" size={23} />
                </TouchableOpacity> : <TouchableOpacity onPress={() => setShowPassword(true)}>
                  <Ionicons name="eye" size={23} />
                </TouchableOpacity>}
              </View>
            </View>
            <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Password}</Text>
            <TouchableOpacity onPress={SubmitHandler}>
              <View style={{ backgroundColor: BASECOLOR, borderWidth: 1, borderRadius: 8 }}>
                <Text style={[tw`text-white text-center p-3`]}>Log in</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={tw`mt-5`} onPress={() => setForgotPassModal(true)}>
              <Text style={tw`text-center`}>Forgot password ?</Text>
            </TouchableOpacity>
            <View style={tw`flex flex-row gap-1 mt-10 items-center w-full justify-center`}>
              <Text style={tw`text-center text-gray-600 italic font-bold`}>Don't Have an Account ?</Text>
              <Text style={{ color: "black", fontWeight: "bold" }} onPress={() => navigation.navigate("Signup")}> Sign up</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ApplicationProvider>
  );
};

const Styles = StyleSheet.create({
  root: {
    // paddingTop: 20,
    // backgroundColor: BASECOLOR,
    flex: 1,
  },
  logo: {
    width: "100%",
    height: 100,
    borderRadius: 25,
  },
  text: {
    marginTop: 10,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "black"
  },
  input: {
    padding: 0,
    borderBottomColor: "gainsboro",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    marginBottom: 3,
    color: "black"
  }
});

export default Signin;
