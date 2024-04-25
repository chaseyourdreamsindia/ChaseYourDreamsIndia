import React from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import MatrialIcons from 'react-native-vector-icons/MaterialIcons'
import AutoScroll from 'react-native-auto-scrolling'
import { ApplicationProvider, Avatar } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'

export const About = ({ navigation }) => {

  const CompanySocials = [
    {
      image: require("../Assets/Icons/linkedin.png"),
      url: "https://www.linkedin.com/posts/chaseyourdreamsindia_happyholi-innerpeace-resilience-activity-7177979916091625472--BLp?utm_source=share&utm_medium=member_android"
    },
    {
      image: require("../Assets/Icons/instagram.png"),
      url: "https://instagram.com/chaseyourdreamsindia"
    },
    {
      image: require("../Assets/Icons/facebook.png"),
      url: "https://facebook.com/chaseyourdreamsindia"
    },
    {
      image: require("../Assets/Icons/twitter.png"),
      url: "https://twitter.com/cydipl_official"
    },
    {
      image: require("../Assets/Icons/youtube.png"),
      url: "https://www.youtube.com/@chaseyourdreamsindia"
    },
    {
      image: require("../Assets/Icons/browser.png"),
      url: "https://www.chaseyourdreamsindia.com"
    }
  ]


  const Media = [
    {
      img: require("../Assets/channels/1.png")
    },
    {
      img: require("../Assets/channels/2.png")
    },
    {
      img: require("../Assets/channels/3.png")
    },
    {
      img: require("../Assets/channels/4.png")
    },
    {
      img: require("../Assets/channels/5.png")
    },
    {
      img: require("../Assets/channels/6.png")
    },
    {
      img: require("../Assets/channels/7.png")
    },
    {
      img: require("../Assets/channels/8.png")
    },
    {
      img: require("../Assets/channels/9.png")
    },
    {
      img: require("../Assets/channels/10.png")
    },
    {
      img: require("../Assets/channels/11.png")
    },
    {
      img: require("../Assets/channels/12.png")
    },
    {
      img: require("../Assets/channels/13.png")
    },
    {
      img: require("../Assets/channels/14.png")
    },
    {
      img: require("../Assets/channels/15.png")
    },
    {
      img: require("../Assets/channels/16.png")
    }
  ];


  const Socials = [
    {
      image: require("../Assets/Icons/linkedin.png"),
      url: "https://www.linkedin.com/in/shravankaipa/"
    },
    {
      image: require("../Assets/Icons/instagram.png"),
      url: "https://www.instagram.com/shravankaipa/"
    },
    {
      image: require("../Assets/Icons/facebook.png"),
      url: "https://www.facebook.com/shravankumarkaipa/"
    },
    {
      image: require("../Assets/Icons/twitter.png"),
      url: "https://twitter.com/shravan_kaipa"
    },
    {
      image: require("../Assets/Icons/youtube.png"),
      url: "https://www.youtube.com/channel/UC7g9B5WAhF_pFT700gyC7oA"
    }
  ]

  const openSocial = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url)
    } else {

    }
  }


  return (
    <View style={Styles.root}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <ScrollView>
          <View style={tw`p-4`}>
            <Text style={tw`text-2xl font-bold text-black`}>About us</Text>
            <Image source={require("../Assets/Icons/logo.png")} style={tw`w-60 h-40 mx-auto`} />
            <View style={tw`my-3`}>
              <Image source={require("../Assets/certificate2.jpeg")} style={tw`w-full h-60`}/>
            </View>
            <View style={tw`my-3 flex flex-row gap-5 justify-center items-center`}>
              <Avatar source={require("../Assets/iso.png")} style={tw`w-17 h-17`}/>
              <Avatar source={require("../Assets/iaf.png")} style={tw`w-20 h-20`}/>
            </View>
              <Text style={tw`font-bold mt-4 text-black`}>Address</Text>
            <View style={tw`flex flex-col gap-10 mt-3 text-black`}>
              <View>
                <Text style={tw`text-black`}>Chase Your Dreams India Pvt. Ltd
                {"\n"}
                WeWork RMZ Spire,
                {"\n"}
                Hitec City , Hyderabad.
                {"\n"}
                Telangana-500081 {"\n"}</Text>
                <Text style={tw`font-bold`}>( <Text>NOTE</Text> : "Appointment-Based Access." )</Text>
              </View>
              <Text style={tw`text-black`}>
              <Text style={tw`font-bold mt-4 text-black`}>Registered Office</Text>
              {"\n"}
              Chase Your Dreams India Pvt Ltd
              {"\n"}
              CIN : U74999TG2020PTC144354
              {"\n"}
              12-7-124/6, G2, Sai Bhanu Enclave, New Mettuguda, Secunderabad, 500017.
              </Text>
            </View>
            <View style={tw`p-4 flex flex-row justify-evenly mt-7`}>
              {
                CompanySocials.map(itm => {
                  return (<TouchableOpacity onPress={() => openSocial(itm.url)}>
                    <Image source={itm.image} style={tw`w-10 h-10`} key={itm.image} />
                  </TouchableOpacity>)
                })
              }
            </View>
            <Text style={tw`p- text-base`}>"Your engagement matters! Follow us on socials for more."</Text>
            <Text style={tw`mt-7 text-black leading-2 text-base`}><Text style={tw`font-bold`}>CHASE YOUR DREAMS INDIA</Text> has had humble beginning as a firm aimed at adding value to people’s lives. In the eventful ten years so far, we have evolved from being a firm into a Private Limited Company influencing more than 1 lakh persons (ranging from individuals to corporate and students from Educational Institutes), thanks to the never-ending support and love of our clientele. We aim to grow further by ensuring highest levels of commitment and maintaining trust with our customers.</Text>
            <Text style={tw`mt-5 font-bold text-black text-xl`}>About the Founder</Text>
            <Image source={require("../Assets/shravan.jpeg")} style={tw`w-full h-100 mt-5 rounded-xl`} />
            <View style={tw`p-2 pt-3 flex flex-row justify-evenly mt-4`}>
              {
                Socials.map(itm => {
                  return (<TouchableOpacity onPress={() => openSocial(itm.url)}>
                    <Image source={itm.image} style={tw`w-10 h-10`} key={itm.image} />
                  </TouchableOpacity>)
                })
              }
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("certificates")}>
              <View style={tw`border mt-3 h-12 rounded-md border-gray-100 flex flex-row justify-between items-center`}>
                <View style={tw`flex flex-row items-center gap-2 pl-2`}>
                  <Image source={require("../Assets/certificate.png")} style={tw`w-6 h-6 -mt-1`} />
                  <Text style={tw`mt-1 text-black`}>Qualifications and Credentials</Text>
                </View>
                <MatrialIcons name="arrow-right" size={22} color="black" style={tw`mt-1`} />
              </View>
            </TouchableOpacity>
            <Text style={tw`mt-3 font-bold text-black text-xl pb-3`}>GALLERY</Text>
            <View style={tw`flex flex-row gap-2 justify-center mb-3 flex-wrap`}>
              <Image source={require("../Assets/gallery/1.jpeg")} style={tw`w-40 h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/2.jpeg")} style={tw`w-40 h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/3.jpeg")} style={tw`w-40 h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/4.jpeg")} style={tw`w-40 h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/5.jpeg")} style={tw`w-full h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/6.jpeg")} style={tw`w-40 h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/7.jpeg")} style={tw`w-40 h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/8.jpeg")} style={tw`w-40 h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/9.jpeg")} style={tw`w-40 h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/10.jpeg")} style={tw`w-full h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/11.jpeg")} style={tw`w-full h-40 rounded-md`} />
              <Image source={require("../Assets/gallery/12.jpeg")} style={tw`w-full h-40 rounded-md`} />
            </View>
            <View>
              <Text style={tw`text-xl font-bold`}>Media</Text>
              <View style={tw`p-3 mb-3 bg-white`}>
                <Text style={tw`text-black mb-3 capitalize font-bold`}>We are Featured on</Text>
                <AutoScroll
                >
                  <View style={tw`flex flex-row gap-4`}>
                    {
                      Media.map(itm => {
                        return (
                          <Image source={itm.img} style={tw`w-32 h-10`} />
                        );
                      })
                    }
                  </View>
                </AutoScroll>
                <TouchableOpacity style={tw`p-2 bg-gray-700 mt-3 rounded`} onPress={() => navigation.navigate("media")}>
                  <Text style={tw`text-center text-white`}>Show more</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ApplicationProvider>
    </View>
  )
}

const Styles = StyleSheet.create({
  root: {
    backgroundColor: "white", flex: 1,
    paddingTop: Platform.OS === 'ios' ? 65 : 20,
  }
})