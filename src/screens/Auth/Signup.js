import { ApplicationProvider, Avatar, Spinner, CheckBox } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, ScrollView } from 'react-native';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import * as eva from '@eva-design/eva';
import tw from 'twrnc';
import axios, { all } from 'axios';
import BASE from '../../api/api';
import { BASECOLOR } from '../../Assets/colors/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Signup = ({ navigation }) => {

  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Profile: "",
    Password: "",
    Mobile: "",
    State: "",
    City: "",
    ConfirmPassword:""
  });

  const [helpers, setHelpers] = useState({
    Name: "",
    Email: "",
    Password: "",
    Mobile: ""
  });

  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [checkbox,setCheckbox] = useState(false);
  const [ageCheck,setsetAgecheck] = useState(false);

  const [showPassword,setShowPassword] = useState(true);
  const [showConfirmPassword,setShowConfirmPassword] = useState(true);

  const submitHandler = () => {
    if (user.Name === "" && user.Password === "" && user.Email === "" && user.Mobile === "") {
      setHelpers({ Name: "This field is required !", Email: "This field is required !", Password: "This Field is required !", Mobile: "This field is required !" })
      setTimeout(() => {
        setHelpers({ Name: "", Email: "", Password: "", Mobile: "" })
      }, 3000);
    } else if (user.Password.length < 8) {
      setHelpers({ ...helpers, Name: "Password must be 8 characters long" });
      setTimeout(() => {
        setHelpers({ ...helpers, Name: "" });
      }, 3000);
    } else if (user.Mobile.length < 10) {
      setHelpers({ ...helpers, Name: "Please Enter a valid Mobile Number" });
      setTimeout(() => {
        setHelpers({ ...helpers, Name: "" });
      }, 3000);
    } else if (user.Name === "" || user.Name.length < 2) {
      setHelpers({ ...helpers, Name: "Please Enter a valid name" });
      setTimeout(() => {
        setHelpers({ ...helpers, Name: "" });
      }, 3000);
    } else if(user.Password !== user.ConfirmPassword){
      setHelpers({...helpers,Password:"Passwords doesnot match"});
      setTimeout(()=>{
        setHelpers({...helpers,Password:""});
      },3000);
    }else{
      setLoading(true);
      if (selectedImage === null) {
        axios.post(`${BASE}/user`, user).then(resp => {
          if (resp.data.success) {
            setLoading(false);
            Alert.alert("registration success");
            navigation.navigate("Signin");
          } else {
            setLoading(false);
            if (resp.data.message === "exist") {
              setHelpers({ ...helpers, Email: "Email is already Exist !" });
              setTimeout(() => {
                setHelpers({ ...helpers, Email: "" });
              }, 3000);
            }
          }
        }).catch(err => {
          console.log(err);
        })
      } else {
        uploadImage();
      }
    }
  }

  const uploadImage = async () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const imagePath = `image/image-${id * id}`;
    const reference = storage();

    await reference.ref(imagePath).putFile(selectedImage).then(async resp => {
      const url = await reference.ref(imagePath).getDownloadURL();
      if (url) {
        axios.post(`${BASE}/user`, { ...user, Profile: url }).then(resp => {
          if (resp.data.success) {
            setLoading(false);
            Alert.alert("Registration success !");
          } else {
            setLoading(false);
            if (resp.data.message === "exist") {
              setHelpers({ ...helpers, Email: "Email is already Exist !" });
              setTimeout(() => {
                setHelpers({ ...helpers, Email: "" });
              }, 3000);
            }
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }).catch(err => {
      setLoading(false);
      console.log(err);
    })
  }

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <View style={Styles.root}>
        <ScrollView>
          <ImageBackground source={require("../../Assets/bg.jpg")} style={tw`flex flex-col`}>
            <View style={tw`flex flex-col items-center p-10  gap-5 pt-20`}>
              <Avatar source={selectedImage ? { uri: selectedImage } : require("../../Assets/Home/avatar.png")} size="giant" />
              <TouchableOpacity onPress={() => {
                const options = {
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 2000,
                  maxWidth: 2000,
                };
                launchImageLibrary(options, (response) => {
                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('Image picker error: ', response.error);
                  } else {
                    let imageUri = response.uri || response.assets?.[0]?.uri;
                    setSelectedImage(imageUri);
                  }
                });
              }}>
                <Text style={tw`text-white font-bold uppercase`}>Upload Photo</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`p-7 pb-40 -mt-10`}>
              <Text style={Styles.text}>Sign up</Text>
              <Text style={tw`text-black text-xs mb-2 mt-5`}>Name</Text>
              <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, Name: txt })} />
              <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Name}</Text>
              <Text style={tw`text-black text-xs mb-2`}>Email</Text>
              <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, Email: txt })} />
              <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Email}</Text>
              <View style={tw`flex flex-row justify-between items-center`}>
                <View style={{width:"90%"}}>
                  <Text style={tw`text-black text-xs mb-2`}>Password</Text>
                  <TextInput style={Styles.input} secureTextEntry={showPassword} onChangeText={txt => setUser({ ...user, Password: txt })} />
                </View>
                <View style={tw``}>
                  <TouchableOpacity>
                    {showPassword ? <TouchableOpacity onPress={()=>setShowPassword(false)}><IonIcons name="eye-off" size={23}/></TouchableOpacity> : <TouchableOpacity onPress={()=>setShowPassword(true)}><IonIcons name="eye" size={23}/></TouchableOpacity>}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tw`flex flex-row justify-between items-center`}>
                <View style={{width:"90%"}}>
                  <Text style={tw`text-black text-xs mb-2 mt-5`}>Confirm Password</Text>
                  <TextInput style={Styles.input} secureTextEntry={showConfirmPassword} onChangeText={txt => setUser({ ...user, ConfirmPassword: txt })} />
                </View>
                <View style={tw`pt-5`}>
                  <TouchableOpacity>
                  {showConfirmPassword ? <TouchableOpacity onPress={()=>setShowConfirmPassword(false)}><IonIcons name="eye-off" size={23}/></TouchableOpacity> : <TouchableOpacity onPress={()=>setShowConfirmPassword(true)}><IonIcons name="eye" size={23}/></TouchableOpacity>}
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Password}</Text>
              <Text style={tw`text-black text-xs mb-2`}>Mobile Number</Text>
              <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, Mobile: txt })} />
              <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Mobile}</Text>
              <Text style={tw`text-black text-xs mb-2`}>City</Text>
              <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, City: txt })} />
              <Text style={tw`text-black text-xs mb-2 mt-4`}>State</Text>
              <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, State: txt })} />
              <View style={tw`flex flex-col items-center mt-2 w-full`}>
                <View style={tw`flex flex-row justify-between items-center w-full`}>
                  <View style={tw`w-full`}>
                    <CheckBox onChange={val => setCheckbox(val)} checked={checkbox}>
                      <View style={tw`flex flex-row w-full flex-wrap`}>
                        <Text style={tw`text-xs mt-2`}>I have read and agree to your <Text style={tw`text-blue-500`} onPress={() => {
                          // setMoalVisible(false);
                          navigation.navigate("terms");
                        }}>terms and conditions,</Text></Text>
                        <Text style={tw`text-blue-500 text-xs`} onPress={() => {
                          // setMoalVisible(false);
                          navigation.navigate("policy")
                        }}>Privacy Policy</Text>
                      </View>
                    </CheckBox>
                  </View>
                </View>
                  <View style={tw`pl-2`}>
                    <CheckBox checked={ageCheck} onChange={val=>setsetAgecheck(val)}>
                      <View style={tw``}>
                        <Text style={tw`mt-3 text-xs`}>By signing up, you affirm that you are 18 years old or above.</Text>
                      </View>
                    </CheckBox>
                  </View>
                {!loading ? <TouchableOpacity onPress={()=>{
                  if(checkbox && ageCheck){
                    submitHandler()
                  }else{
                    Alert.alert("Please check the checkboxes")
                  }
                }}>
                  <Text style={[tw`text-white text-center p-3 mt-5`, { backgroundColor: BASECOLOR }]}>Sign up</Text>
                </TouchableOpacity> : <Spinner status='basic' />}
              </View>
              <Text style={tw`mt-7 text-center text-gray-600`}>Have an Account ? <Text style={{ color: BASECOLOR }} onPress={() => navigation.navigate("Signin")}>Sign in</Text></Text>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </ApplicationProvider>
  );
};

const Styles = StyleSheet.create({
  root: {
    // backgroundColor: BASECOLOR,
    flex: 1,
  },
  inner: {
    // backgroundColor: 'white',
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  text: {
    marginTop: 10,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
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

export default Signup;
