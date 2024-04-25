import { ApplicationProvider, Avatar, Spinner } from '@ui-kitten/components';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, RefreshControl, ImageBackground } from 'react-native';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import * as eva from '@eva-design/eva';
import tw from 'twrnc';
import axios from 'axios';
import BASE from '../api/api';
import { BASECOLOR } from '../Assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux'

const EditProfile = ({ navigation }) => {

    const Auth = useSelector(state => state.Auth);

    useEffect(() => {
        getUser();
    }, [Auth]);


    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Profile: "",
        Password: "",
        Mobile: "",
        City:"",
        State:""
    });

    const onRefresh = React.useCallback(() => {
        getUser();
    }, [Auth]);

    const [helpers, setHelpers] = useState({
        Name: "",
        Email: "",
        Password: "",
        Mobile: ""
    });


    const getUser = async () => {
        setLoading(true);
        const token = JSON.parse(await AsyncStorage.getItem("cydi_TK"));
        if (token !== null) {
            await axios.get(`${BASE}/user/${token}`).then(resp => {
                setLoading(false);
                setUser({ ...resp.data.user, Mobile: resp.data.user.Mobile.toString() });
                if (resp.data.message === "jwt expired") {
                    dispatch(Actions.setAuth(false));
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            setLoading(false);
        }
    }

    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setuploading] = useState(false);

    const submitHandler = async () => {

        setuploading(true);
        const token = JSON.parse(await AsyncStorage.getItem("cydi_TK"));

        if (token !== null) {
            if (selectedImage !== null) {
                uploadImage(token);
            } else {
                axios.put(`${BASE}/user/${token}`, { ...user }).then(resp => {
                    console.log(resp);
                    setuploading(false);
                }).catch(err => {
                    console.log(err);
                    setuploading(false);
                })
            }
        } else {
            setuploading(false);
        }
    }

    const uploadImage = async (token) => {
        setLoading(true);
        const id = Math.floor(Math.random() * 100) + 1;
        const imagePath = `image/image-${id * id}`;
        const reference = storage().ref(imagePath);
        try {
            const response = await reference.putFile(selectedImage);
            const url = await reference.getDownloadURL();
            console.log("Image URL:", url);
            setuploading(false);
            axios.put(`${BASE}/user/${token}`, { ...user, Profile: url }).then(resp => {
                console.log(resp);
                setuploading(false);
            }).catch(err => {
                console.log(err);
                setuploading(false);
            })
        } catch (error) {
            console.error("Error uploading image:", error);
            setuploading(false);
        }
    }

    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            <View style={{ flex: 1, height: "100%", backgroundColor: BASECOLOR }}>
                <ImageBackground style={tw`w-full h-full`} source={require("../Assets/bg.jpg")} imageStyle={{ height: "100%", width: "100%" }}>
                    <ScrollView refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={loading} />} style={{ flex: 1 }}>
                        <View style={[Styles.root, tw`h-full`]}>
                            <View style={tw`flex flex-col items-center gap-5`}>
                                <Avatar source={user ? { uri: user.Profile } : require("../Assets/Home/avatar.png")} size="giant" />
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
                            <View style={[Styles.inner, tw``]}>
                                <Text style={Styles.text}>Edit Profile</Text>
                                <Text style={tw`text-black text-xs mb-2 mt-20 font-bold`}>Name</Text>
                                <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, Name: txt })} value={user.Name} />
                                <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Name}</Text>
                                <Text style={tw`text-black text-xs mb-2 font-bold`}>Email</Text>
                                <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, Email: txt })} value={user.Email} />
                                <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Email}</Text>
                                <Text style={tw`text-black text-xs mb-2 font-bold`}>Mobile Number</Text>
                                <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, Mobile: txt })} value={user.Mobile} />
                                <Text style={tw`text-red-700 text-xs mb-2`}>{helpers.Mobile}</Text>
                                <Text style={tw`text-black text-xs mb-2 font-bold`}>City</Text>
                                <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, City: txt })} value={user.City} />
                                <Text style={tw`text-black text-xs mb-2 mt-4 font-bold`}>State</Text>
                                <TextInput style={Styles.input} onChangeText={txt => setUser({ ...user, State: txt })} value={user.State} />
                                <View style={tw`flex flex-row justify-center items-center mt-10`}>
                                    {!uploading ? <TouchableOpacity onPress={submitHandler}>
                                        <Text style={[tw`text-white text-center p-3`, { backgroundColor: BASECOLOR }]}>Save Changes</Text>
                                    </TouchableOpacity> : <Spinner status='basic' />}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </ApplicationProvider>
    );
};

const Styles = StyleSheet.create({
    root: {
        paddingTop: Platform.OS === 'ios' ? 65 : 20,
        paddingLeft: 10,
        // backgroundColor: BASECOLOR,
        height: "100%",
        flex: 1,
    },
    inner: {
        // backgroundColor: 'white',
        flex: 1,
        // borderWidth: 1,
        borderTopLeftRadius: 25,
        padding: 10,
        marginTop: 10,
        height: "70%"
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
        fontSize: 17,
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

export default EditProfile;
