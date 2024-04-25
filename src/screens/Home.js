import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Platform, ScrollView, RefreshControl, TouchableOpacity, Image, ImageBackground, Dimensions, Settings, Alert } from 'react-native';
import { ApplicationProvider, Avatar } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import * as eva from "@eva-design/eva";
import IonIcons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import { useSelector } from 'react-redux'
import axios from 'axios';
import BASE from '../api/api';
import Carousel2 from 'react-native-reanimated-carousel';
import { BASECOLOR } from '../Assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo'
import CarouselCardItem from '../components/CarouselCardItem';
import { Testinomial } from '../components/Testinomial';
import Sound from 'react-native-sound'
import AutoScroll from 'react-native-auto-scrolling'

const Home = ({ navigation }) => {

  const data = [
    {
      title: "Individuals",
      body: "Counselling | Coaching | Motivation",
      keywords: "Personal Counselling | Relationship Counselling | Life Coaching | Emotional Intelligence Coaching | Personality Development etc..",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2Fmot.jpeg636c1075-75a6-44d7-b99a-ece8845c1089?alt=media&token=e813c05a-d2ba-4323-b7ef-87a997fce31a",
      keyPoints: ["Personal Counselling "," Relationship Counselling "," Life Coaching "," Emotional Intelligence Coaching "," Personality Development etc.."],
      canBook:true,
      background:"https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2Fmot.jpeg636c1075-75a6-44d7-b99a-ece8845c1089?alt=media&token=e813c05a-d2ba-4323-b7ef-87a997fce31a",
      name:"Individuals",
      price:1999,
      duration:60
    },
    {
      title: "Corporate",
      body: "Coaching Counseling & Motivation",
      keywords: "Executive Coaching | Leadership Coaching | Organizational Development Workshop | Conflict Management Coaching | Corporate Wellness Package | Life Coaching | Anger Management Workshop | Team Building Workshop",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2Fportrait-professional-business-people-working-together.jpgef6a4049-f7d6-4597-b5a4-5422799ebdb2?alt=media&token=8ba3e36a-9bba-450f-aba0-737e212886ff",
      keyPoints: ["Executive Coaching "," Leadership Coaching "," Organizational Development Workshop "," Conflict Management Coaching "," Corporate Wellness Package "," Life Coaching "," Anger Management Workshop","Team Building Workshop"],
      background:"https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2Fportrait-professional-business-people-working-together.jpgef6a4049-f7d6-4597-b5a4-5422799ebdb2?alt=media&token=8ba3e36a-9bba-450f-aba0-737e212886ff",
      name:"Corporate",
      price:1999,
      canBook:true,
      duration:60,
      note:"In case customized programs are required, we can work with you to provide tailored quotes. We can also help with community development programmes as per requirement. We are open to corporate tie ups as per specific requirements."
    },
    {
      title: "Students",
      body: "Coaching | Counseling | Motivation",
      keywords: "Personality Development | Career Counselling | Goal Setting Assistance",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2Fstt.jpgb6d4917d-4f7d-4e8d-8e23-6b1bd68323ec?alt=media&token=d02571e7-666a-4136-91f3-6ee6b9708fe5",
      background:"https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2Fstt.jpgb6d4917d-4f7d-4e8d-8e23-6b1bd68323ec?alt=media&token=d02571e7-666a-4136-91f3-6ee6b9708fe5",
      name:"Students",
      price:1000,
      canBook:true,
      keyPoints: ["Personality Development "," Career Counselling "," Goal Setting Assistance"],
      duration:30
    },
    {
      title: "Educational & Professional Institutions",
      body: "Focused Development Programmes | Campus Recruitment Training",
      keywords: "Workshops | Effective Communication Skills | Personality Development Session | Group Discussions | Mock Interviews",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2Fgroup-graduates-walking-down-street-city-concept-education-graduation_1142-58630.jpge25757d1-7d58-4c69-8f79-1f66197d5b61?alt=media&token=cdffef4e-61c7-4a30-b002-e0669fb5b966",
      background:"https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2Fgroup-graduates-walking-down-street-city-concept-education-graduation_1142-58630.jpge25757d1-7d58-4c69-8f79-1f66197d5b61?alt=media&token=cdffef4e-61c7-4a30-b002-e0669fb5b966",
      name:"Educational & Professional Institutions",
      price:999,
      canBook:false,
      keyPoints:[" Workshops "," Effective Communication Skills "," Personality Development Session "," Group Discussions "," Mock Interviews"],
      duration:60,
      note:"In case customized programs are required, we can work with you to provide tailored quotes. We can also help with community development programmes as per requirement. We are open to corporate tie ups as per specific requirements."
    },
    {
      title: "Couples",
      body: "Counselling | Coaching",
      keywords: "Pre-Marriage Counselling | Post-Marriage Counselling | Couple Counselling | Relationship Counselling",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2FWhatsApp%20Image%202024-03-24%20at%205.49.46%20PM.jpeg8dd535d3-5e81-4b68-9168-f2cdb64dc0d0?alt=media&token=0d427bef-5285-4eb0-bc74-fc7035ca0d6e",
      background:"https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2FWhatsApp%20Image%202024-03-24%20at%205.49.46%20PM.jpeg8dd535d3-5e81-4b68-9168-f2cdb64dc0d0?alt=media&token=0d427bef-5285-4eb0-bc74-fc7035ca0d6e",
      name:"Couples",
      price:3998,
      canBook:true,
      keyPoints:["Pre-Marriage Counselling "," Post-Marriage Counselling "," Couple Counselling "," Relationship Counselling",],
      duration:60
    },
    {
      title: "Family Counseling",
      body: "Coaching & Counseling",
      keywords: "Life Coaching | Anger Management Session | Stress Management Session | Relationship Counselling",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2FScreenshot%202024-03-24%20at%206.03.57%E2%80%AFPM.png2b49613e-b7b0-421d-b3cd-6b082912f723?alt=media&token=9edae76d-b44d-43a4-860a-05bd4d8f4fa9",
      background:"https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2FScreenshot%202024-03-24%20at%206.03.57%E2%80%AFPM.png2b49613e-b7b0-421d-b3cd-6b082912f723?alt=media&token=9edae76d-b44d-43a4-860a-05bd4d8f4fa9",
      name:"Family Counseling",
      price:9999,
      canBook:true,
      keyPoints:["Life Coaching "," Anger Management Session"," Stress Management Session"," Relationship Counselling",],
      duration:60
    },
    {
      title: "Parent",
      body: "Counseling / Coaching",
      keywords: "Art of Parenting | Individual Parent Counselling | Building Positive Relationship | Communication Skills | Relationship Counselling | Stress Management Counselling",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2FWhatsApp%20Image%202024-03-24%20at%2011.49.25%20PM.jpeg2155a4f4-c974-4a79-b457-317736a0311e?alt=media&token=5c928c8e-6aca-4e22-8e9a-7b5f16d27c77",
      background:"https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2FWhatsApp%20Image%202024-03-24%20at%2011.49.25%20PM.jpeg2155a4f4-c974-4a79-b457-317736a0311e?alt=media&token=5c928c8e-6aca-4e22-8e9a-7b5f16d27c77",
      name:"Parent",
      price:1999,
      canBook:true,
      keyPoints:["Art of Parenting "," Individual Parent Counselling "," Building Positive Relationship "," Communication Skills "," Relationship Counselling "," Stress Management Counselling",],
      duration:60
    },
  ];

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

  const [user, setUser] = React.useState();
  const [RaisedAlarm, setRaisedAlarm] = useState(false);
  const [startedTimer, setStartedTimer] = useState(false);
  const decrement = useRef(null);
  const [loading, setLoading] = useState(true);
  const date = new Date().toISOString();
  const dateTrim = date.split("T")[0];
  const [reviews,setReviews] = useState();
  const Auth = useSelector(state => state.Auth);
  const [timer, setTimer] = useState(60);
  const [bookings, setBookings] = useState()
  const isCarousel = React.useRef(null)
  const alarm = useRef(Platform.OS === "android" ? new Sound(require("../Assets/Music/alarm.mp3"), Sound.MAIN_BUNDLE, (err) => {
    console.log(err + "And")
  }) : new Sound(require("../Assets/Music/alarm.mp3"), (err) => {
    console.log(err + "And")
  }));

  Sound.setCategory("Alarm")

  const ProduceAlarm = () => {

    alarm.current.play();

  }

  const StopAlarm = () => {

    alarm.current.stop();
    setRaisedAlarm(false);
  }

  const width = Dimensions.get('window').width;

  const StartTimer = () => {

    if (!startedTimer) {
      setStartedTimer(true);
      decrement.current = setInterval(() => {
        setTimer((timer) => {
          if (timer <= 60 && timer > 0) return timer - 1;
          else {
            clearInterval(decrement.current);
            ProduceAlarm();
            setRaisedAlarm(true);
            return 60;
          }
        });
      }, 1000);
    }

  }

  const onRefresh = React.useCallback(() => {
    getUser();
  }, [Auth]);

  const srv = {
    background: "https://firebasestorage.googleapis.com/v0/b/chaseyourdreamsindia-df28e.appspot.com/o/services%2FWhatsApp%20Image%202024-03-24%20at%205.49.46%20PM.jpeg8dd535d3-5e81-4b68-9168-f2cdb64dc0d0?alt=media&token=0d427bef-5285-4eb0-bc74-fc7035ca0d6e",
    name: "Couple counseling",
    price: 3998,
    keyPoints: [
      'Pre-Marriage Counselling',
      'Post-Marriage Counselling',
      'Couple Counselling',
      'Relationship Counselling'
    ],
  }

  const FetchReviews = async () =>{
    axios.get(`${BASE}/review/reviews`).then(resp=>{
      if(resp.data.success){
        setReviews(resp.data.reviews);
      }else{
        Alert.alert(resp.data.message);
      }
    }).catch(err=>{
      Alert.alert(err.message);
    })
  }

  const getUser = async () => {
    setLoading(true);
    const token = JSON.parse(await AsyncStorage.getItem("cydi_TK"));
    if (token !== null || token != false) {
      await axios.get(`${BASE}/user/${token}`).then(async resp => {
        setUser(resp.data.user);
        console.log(resp.data.user);
        await axios.get(`${BASE}/book/bookings/${resp.data.user._id}`).then(resp => {
          if (resp.data.success) {
            setBookings(resp.data.bookings);
            setLoading(false);
            // console.log(resp.data)
            // console.log(resp.data.bookings);
          }else{
            setLoading(false);
          }
        }).catch(err=>{
          setLoading(false);
        })
      }).catch(err => {
        setLoading(false);
        console.log(err);
      })
    } else {
      setLoading(false);
      // setUser(false);
    }
  }

  useEffect(() => {
    getUser();
    FetchReviews();
  }, [Auth]);

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <View style={{ flex: 1, height: "100%", zIndex: 1000 }}>
          <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={[Styles.root]}>
              <ImageBackground source={require("../Assets/bg.jpg")}>
                <View style={tw`flex flex-row justify-between items-center pr-2 ${Platform.OS === "android" ? "mt-5" : "mt-12"}`}>
                  <View style={tw`flex flex-row gap-2 items-center p-2`}>
                    <Avatar source={(Auth && user && user.Profile) ? { uri: user.Profile } : require('../Assets/Home/avatar.png')} size='large' />
                    <View>
                      <Text style={tw`text-black font-bold`}>Hello, {(!loading && user && user.Name) ? user.Name : "Guest"} </Text>
                      {/* <Text style={tw`text-xs text-black`}>How is the day today ?</Text> */}
                    </View>
                  </View>
                  <View>
                    <IonIcons name="notifications" color="black" size={24} />
                  </View>
                </View>
                <View style={[tw`flex mt-3 pl-4 pr-1 w-full h-full`, { flex: 1, height: "100%" }]}>
                  <Text style={[tw`text-xl font-bold text-black`, { fontFamily: 'notoserif' }]}>"Wellness starts with a single step.  Welcome!"</Text>
                  <Text style={[tw`mt-6 leading-5 text-black font-bold`, {
                    fontSize: 14
                  }]}>"Your mental health matters, even online. Transform your life from the convenience of your screen" {'\n'}</Text>
                  <Text style={tw`-mt-4 font-bold text-black`}>- Schedule your session today.</Text>
                  <View style={[{ flex: 1, height: "100%" }, tw` h-full mt-5`]}>
                    <Carousel2
                      loop
                      width={width}
                      height="600"
                      autoPlay={true}
                      data={data}
                      scrollAnimationDuration={1000}
                      renderItem={(item,index)=><CarouselCardItem item={item} index={index} navigation={navigation}/>}
                    />
                    <View style={tw`flex flex-row justify-center gap-2 mt-10`}>
                      <Entypo name="minus" color="gray" size={22} />
                      <Entypo name="minus" color="gray" size={22} />
                      <Entypo name="minus" color="gray" size={22} />
                    </View>
                  </View>
                  <View style={tw`pr-3 mt-5`}>
                    <Image source={require("../Assets/mot.png")} style={tw`w-full h-80 rounded-xl`} />
                  </View>
                  <View style={tw`pr-2 mt-5`}>
                    <Text style={tw`text-xl text-black font-bold`}>Close your eyes, relax, and rejuvenate</Text>
                    <View style={tw`p-2 h-52 w-full mt-2 rounded-xl`}>
                      <Text>Duration : 60s</Text>
                      <Text style={tw`text-2xl font-bold text-center mt-8 text-black`}>{timer}</Text>
                      {!RaisedAlarm ? <TouchableOpacity style={tw`rounded-lg bg-pink-200 w-52 mx-auto p-3 mt-5`} onPress={StartTimer}>
                        <Text style={tw`text-center font-bold text-center mx-auto`}>Start</Text>
                      </TouchableOpacity> :
                        <TouchableOpacity style={tw`rounded-lg bg-pink-200 w-52 mx-auto p-3 mt-5`} onPress={StopAlarm}>
                          <Text style={tw`text-center font-bold text-center mx-auto`}>Stop Alarm</Text>
                        </TouchableOpacity>}
                    </View>
                  </View>
                  {(!loading && bookings && bookings.length > 0) && <View style={tw`pr-2 mt-5`}>
                    <Text style={tw`text-xl text-black font-bold`}>Upcomming Appointments</Text>
                    <View style={tw``}>
                      {(!loading && bookings) ? bookings.map(booking => {
                        const date = new Date().toISOString().split("T")[0];
                        // console.warn(date);
                        // console.warn(booking.date);
                        const month = new Date(booking.date).toLocaleString('default', { month: 'long' });
                        if (booking.date > date) {
                          return (
                            <View style={tw`rounded-xl border h-28 border-gray-300 mt-5 flex flex-row gap-2`}>
                              <View style={[tw`h-full rounded-xl flex flex-col justify-center items-center gap-1`, { backgroundColor: BASECOLOR, width: "20%" }]}>
                                <Text style={tw`text-xs text-white uppercase`}>{month}</Text>
                                <Text style={tw`text-2xl text-white`}>{booking.date.split("-")[2]}</Text>
                                <Text style={tw`text-xs text-white`}>{booking.date.split("-")[0]}</Text>
                              </View>
                              <View style={[tw`pt-2 pb-2 pr-3`, { width: "80%" }]}>
                                <Text style={tw`text-center font-bold uppercase text-black`}>{booking.serviceId.name}</Text>
                                <Text style={tw`text-black mt-1`}>Time : {booking.time}</Text>
                                <Text style={tw`text-black mt-1`}>Duration : 1hr</Text>
                                <View style={tw`flex flex-row justify-between mt-1 pb-3 items-center pr-3`}>
                                  <Text style={tw`text-black`}>By : Shravan Kaipa</Text>
                                  <TouchableOpacity onPress={() => navigation.navigate("viewbooking", { ...booking })}>
                                    <View style={[tw`rounded-full`, { backgroundColor: BASECOLOR }]}>
                                      <Entypo name="chevron-right" color="white" size={21} />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          );
                        }else{
                          <View></View>
                        }
                      })
                        : <View style={tw`w-full h-32 border rounded-xl border-gray-300 flex flex-row justify-center items-center`}>
                          <Text>No Upcomming Appointments</Text>
                        </View>}
                    </View>
                  </View>}
                  <View style={tw`pr-2 pt-4`}>
                    <Text style={tw`text-black text-2xl font-bold`}>Take Control of your Emotions Today !</Text>
                    <View style={[tw`mt-2`, { width: "100%" }]}>
                      <Image source={{ uri: srv.background }} style={[{ width: "100%" }, tw`h-40 rounded-xl`]} />
                      <View style={tw`p-4 absolute w-full`}>
                        <Text style={[tw`uppercase text-white font-bold text-xl text-center pl-10`, {
                          textShadowColor: "black",
                          textShadowRadius: 1,
                          textShadowOffset: {
                            width: 2,
                            height: 2
                          }
                        }]}>{srv.name}</Text>
                        <Text style={[tw`text-xs text-white text-center pl-5 font-bold`, {
                          textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                            width: 2, height: 2
                          }
                        }]}>(INR <Text>{srv.price}</Text>/- Per Session Per Module)</Text>
                        <View style={tw`flex flex-row justify-end mt-3`}>
                          <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                            ...srv,
                            canBook:true,
                            duration:60
                          })}>
                            <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded mt-10`}>
                              <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                              <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* <View style={tw`pr-2 mt-5`}>
                      <Text style={tw`text-black text-xl font-bold`}>Believe in yourself, stay inspired</Text>
                      <Image source={require("../Assets/Home/quote.webp")} style={tw`rounded-xl w-full h-40 mt-4`} />
                    </View> */}
                  {/* <View style={tw`pr-2 pt-4`}>
                      <Text style={tw`text-black text-2xl font-bold`}>Daily Practices</Text>
                      <View style={tw`mt-3`}>
                        <View style={tw`flex flex-row gap-2`}>
                          <Image source={require("../Assets/Home/img1.jpg")} style={tw`rounded-xl w-20 h-20`} />
                          <View>
                            <Text style={tw`text-black font-bold text-base`}>Morning Intension</Text>
                            <Text style={tw`text-black text-sm`}>Tune Your Mind Body and Soul.</Text>
                          </View>
                        </View>
                      </View>
                      <View style={tw`mt-3`}>
                        <View style={tw`flex flex-row gap-2`}>
                          <Image source={require("../Assets/Home/img2.jpg")} style={tw`rounded-xl w-20 h-20`} />
                          <View>
                            <Text style={tw`text-black font-bold text-base`}>Find a Confidence</Text>
                            <Text style={tw`text-black text-sm`}>Reduce fear, Anxiety and Stress.</Text>
                          </View>
                        </View>
                      </View>
                      <View style={tw`mt-3`}>
                        <View style={tw`flex flex-row gap-2`}>
                          <Image source={require("../Assets/Home/img3.jpg")} style={tw`rounded-xl w-20 h-20`} />
                          <View>
                            <Text style={tw`text-black font-bold text-base`}>UnWind after Work</Text>
                            <Text style={tw`text-black text-sm`}>Decreases in brain cell volume</Text>
                          </View>
                        </View>
                      </View>
                      <View style={tw`mt-3`}>
                        <View style={tw`flex flex-row gap-3`}>
                          <Image source={require("../Assets/Home/img4.jpg")} style={tw`rounded-xl w-20 h-20`} />
                          <View style={tw`flex flex-col h-full`}>
                            <Text style={tw`text-black font-bold text-base`}>Growth Mindset</Text>
                            <Text style={tw`text-black text-sm`}>It's your outlook on life that counts.</Text>
                          </View>
                        </View>
                      </View>
                    </View> */}
                  <View style={tw`pr-2 pt-4 mt-4`}>
                    <Text style={tw`text-black text-xl font-bold`}>Explore the benifits of Membership</Text>
                    <View style={tw`mt-4`}>
                      <Image source={require("../Assets/membership.png")} style={tw`w-full h-54 rounded-xl`} />
                      <View style={tw`flex flex-row justify-center`}>
                        <TouchableOpacity style={[tw`mt-5 rounded-md`, { backgroundColor: BASECOLOR }]} onPress={()=>{
                          navigation.navigate("Membership")
                        }}>
                          <Text style={[tw`text-center p-2 text-white w-30`]}>View</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={tw`pr-2 pt-4 mt-3`}>
                    <Text style={tw`text-xl font-bold text-black mb-10`}>Testimonials</Text>
                    <View style={tw`-mt-14 pb-10`}>
                      <Carousel2
                        loop
                        width={width - 30}
                        height={width / 2}
                        autoPlay={true}
                        data={reviews && [...reviews]}
                        scrollAnimationDuration={1000}
                        renderItem={({ index, item }) => (
                          <Testinomial data={item} />
                        )}
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <View style={tw`p-3 mb-3 bg-white -mt-3`}>
                <Text style={tw`text-black mb-3 capitalize font-bold`}>We are Featured on</Text>
                <AutoScroll
                >
                  <View style={tw`flex flex-row gap-4`}>
                    {
                      Media.map(itm => {
                        return (
                          <Image source={itm.img} style={tw`w-20 h-6`}/>
                        );
                      })
                    }
                  </View>
                </AutoScroll>
              </View>
            </View>
          </ScrollView>
        </View>
      </ApplicationProvider>
    </View>
  );
};

const Styles = StyleSheet.create({
  root: {
    height: "100%"
  },

});

export default Home;
