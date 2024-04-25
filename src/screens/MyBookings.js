import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, RefreshControl, Alert, Platform,NativeModules } from 'react-native';
import tw from 'twrnc';
import { BASECOLOR } from '../Assets/colors/colors';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE from '../api/api';

const MyBookings = ({ navigation }) => {

  const ViewBooking = booking => {
    navigation.navigate("viewbooking", { ...booking, userID: user._id });
  }

  const Auth = useSelector(state => state.Auth);
  const [user, setUser] = React.useState();
  const [loading, setLoading] = useState(false);
  const [Bookings, setBookings] = useState();
  const dispatch = useDispatch();

  const onRefresh = React.useCallback(() => {
    getUser();
  }, [Auth]);

  const getUser = async () => {
    setLoading(true);
    const token = JSON.parse(await AsyncStorage.getItem("cydi_TK"));
    if (token !== null) {
      await axios.get(`${BASE}/user/${token}`).then(resp => {
        axios.get(`${BASE}/book/bookings/${resp.data.user._id}`).then(resp => {
          if (resp.data.success) {
            setLoading(false);
            setBookings(resp.data.bookings);
          } else {
            setLoading(false);
            Alert.alert(resp.data.message);
          }
        }).catch(err => {
          console.log(err);
        })
        setUser(resp.data.user);
        // console.log(resp.data.user);
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

  useEffect(() => {
    getUser();
  }, [Auth]);

  return (
    <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
      <View style={styles.content}>
        <Text style={styles.title}>My Bookings</Text>
        {(!loading && user && Bookings) && Bookings.length > 0 ? Bookings.map((booking, index) => (
          <View key={index} style={styles.booking}>
            <Image source={{ uri: booking.serviceId.background }} style={styles.bookingImage} />
            <View style={styles.bookingDetails}>
              <Text style={styles.bookingName}>{booking.serviceId.name}</Text>
              <Text style={styles.bookingInfo}>Price: INR {booking.totalPrice}/-</Text>
              <Text style={styles.bookingInfo}>Date: {booking.date}</Text>
              <Text style={styles.bookingInfo}>Time: {booking.time}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => ViewBooking(booking)}>
                  <Text style={[tw`p-2 text-white border border-black text-center`, { backgroundColor: BASECOLOR }]}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )) : <View>
          <Text style={tw`text-center mt-10`}>No Bookings Found !</Text>
        </View>}
      </View>
    </ScrollView>
  );
};

const handleInvoice = async (booking, user) => {
        
  // await RNFW.open(file.filePath).catch(err => {
  //   console.log(err);
  // })

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 65 : 20,
    padding: 2,
  },
  content: {
    padding: 10,
    zIndex: 2
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "black"
  },
  booking: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  bookingImage: {
    width: "50%",
    height: "100%",
    marginRight: 10,
    borderRadius: 5,
  },
  bookingDetails: {
    flex: 1,
  },
  bookingName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "black"
  },
  bookingInfo: {
    fontSize: 12,
    marginBottom: 3,
    color: "black"
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    gap: 5,
    width:"100%"
  },
});

export default MyBookings;
