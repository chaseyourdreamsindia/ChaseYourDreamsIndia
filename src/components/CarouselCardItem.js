import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native"
import tw from 'twrnc'
import { BASECOLOR } from '../Assets/colors/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const CarouselCardItem = ({ item, index, navigation }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.item.imgUrl }}
                style={styles.image}
            />
            <Text style={[styles.header,tw`font-bold`]}>{item.item.title}</Text>
            <Text style={[styles.body,tw`leading-5 font-bold text-base`]}>{item.item.body}</Text>
            <Text style={[styles.body,tw`leading-5`]}>{item.item.keywords}</Text>
            <View style={tw`flex flex-col justify-center items-center`}>
                <TouchableOpacity style={{display:"flex",justifyContent:"flex-center",flexDirection:"row",marginTop:20,width:"100%",alignItems:"center"}} onPress={()=>{
                    navigation.navigate("Viewservice",{...item.item})
                }}>
                    <View style={[{backgroundColor:BASECOLOR,borderRadius:15,width:180,marginTop:5,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},tw`p-2`]}>
                        <Text style={tw`text-center text-black text-white text-xs`}>Schedule Appointment</Text>
                        <MaterialIcons name="keyboard-arrow-right" color="white" size={20}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        width:"92%",
        marginTop:10,
        padding:10,
        // borderWidth:1,
        // borderColor:"black"
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius:15
    },
    header: {
        color: "#222",
        fontSize: 27,
        fontWeight: "bold",
        paddingTop: 20,
        // textTransform:"uppercase",
    },
    body: {
        color: "#222",
        fontSize: 13,
        paddingRight: 20,
        marginTop:10
    }
})

export default CarouselCardItem