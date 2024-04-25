import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import Home from './Home';
import ViewService from './ViewService';
import MembershipCard from './MembershipCard';
import FAQComponent from './FAQComponent';
import TermsAndConditions from './TermsAndConditions';
import MyBookings from './MyBookings';
import EditProfile from './EditProfile';
import { About } from './About';
import Disclaimer from './Disclaimer';
import Viewmembership from './ViewMembership';
import Certificate from './Certificates';
import Media from './Media';
import ViewBooking from './ViewBooking';
import ViewChannels from './ViewChannels';
import PrivacyPolicy from './PrivacyPolicy';

const HomeRoutes = () => {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='HomeMain' screenOptions={({ route }) => ({
            headerShown: true
        })}>
            <Stack.Screen name="HomeMain" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={Signin} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Signup" component={Signup} options={{
                headerShown: false
            }} />
            <Stack.Screen name="editprofile" component={EditProfile} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Viewservice" component={ViewService} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="MembershipCard" component={MembershipCard} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="faq" component={FAQComponent} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="terms" component={TermsAndConditions} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="bookings" component={MyBookings} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="about" component={About} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="disclaimer" component={Disclaimer} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="viewmembership" component={Viewmembership} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="certificates" component={Certificate} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="media" component={Media} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="viewbooking" component={ViewBooking} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="channels" component={ViewChannels} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="policy" component={PrivacyPolicy} options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    );
};

export default HomeRoutes;