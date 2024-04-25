import React from 'react'
import { View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Testinomial = props => {
    return (
        <View style={[tw`rounded-xl mt-9 bg-white`]}>
            <ImageBackground source={require("../Assets/test.jpeg")} imageStyle={tw`rounded-xl`}>
                {/* <Image source={require("../Assets/Home/testlogo.png")} style={tw`w-10 h-10 rounded-full absolute`} /> */}
                <Image source={require("../Assets/Home/testlogo.png")} style={tw`w-10 h-10 rounded-full absolute bottom-0 right-0`} />
                <Image source={require("../Assets/Home/avatar.png")} style={tw`rounded-full w-10 h-10 rounded-full absolute left-2 top-2`} />
                <View style={tw`w-full h-36 border border-gray-300 rounded-xl p-2`}>
                    <View style={tw`flex flex-row w-20 justify-evenly absolute top-4 right-4`}>
                        <TouchableOpacity><FontAwesome name={props.data.Rating >= 1 ? "star" : "star-o"} size={17} color="#ffb300" /></TouchableOpacity>
                        <TouchableOpacity><FontAwesome name={props.data.Rating >= 2 ? "star" : "star-o"} size={17} color="#ffb300" /></TouchableOpacity>
                        <TouchableOpacity><FontAwesome name={props.data.Rating >= 3 ? "star" : "star-o"} size={17} color="#ffb300" /></TouchableOpacity>
                        <TouchableOpacity><FontAwesome name={props.data.Rating >= 4 ? "star" : "star-o"} size={17} color="#ffb300" /></TouchableOpacity>
                        <TouchableOpacity><FontAwesome name={props.data.Rating >= 5 ? "star" : "star-o"} size={17} color="#ffb300" /></TouchableOpacity>
                    </View>
                    <Text style={tw`font-bold uppercase absolute bottom-4 left-4 text-xs text-black`}>{props.data.Name ? props.data.Name : "Anonymous"}</Text>
                    <View style={tw`p-2 mt-10`}>
                        <Text style={tw`text-black text-xs`}>{props.data.Message}</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}
