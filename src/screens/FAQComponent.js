import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const FAQComponent = () => {
    return (
        <View style={{ flex: 1, height: "100%" }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Frequently Asked Questions</Text>

                    <Text style={styles.question}>1. What services does your company offer?</Text>
                    <Text style={styles.answer}>We offer a wide range of services including motivation, counseling, life coaching, relationship counseling, child empowerment counseling, student empowerment programs, faculty development programs, corporate training, and workshops.</Text>

                    <Text style={styles.question}>2. How can I book a session with one of your counselors or coaches?</Text>
                    <Text style={styles.answer}>Booking a session is easy! Simply navigate to the 'Book a Session' section on our app, choose the service you're interested in, select your preferred date and time, and complete the payment process.</Text>

                    {/* Add membership package information */}
                    <Text style={styles.question}>3. What membership packages do you offer?</Text>
                    <Text style={styles.answer}>As part of our services, we offer the following membership packages:</Text>
                    <Text style={styles.membership}>- Bronze Membership:</Text>
                    <Text style={styles.details}>
                        Number of Sessions: 1 {'\n'}
                        Price: Rs. 1,999 {'\n'}
                        Description: Take the first step towards a better you with one session, laying the groundwork for success.
                    </Text>
                    <Text style={styles.membership}>- Silver Membership:</Text>
                    <Text style={styles.details}>
                        Number of Sessions: 4 {'\n'}
                        Price: Rs. 5,999 {'\n'}
                        Description: The Silver membership includes 4 online sessions designed to provide personalized support and guidance.
                    </Text>
                    <Text style={styles.membership}>- Gold Membership:</Text>
                    <Text style={styles.details}>
                        Number of Sessions: 9 {'\n'}
                        Price: Rs. 11,999 {'\n'}
                        Description: With the Gold membership, you will have access to 9 online sessions aimed at facilitating your personal growth and development.
                    </Text>
                    <Text style={styles.membership}>- Platinum Membership:</Text>
                    <Text style={styles.details}>
                        Number of Sessions: 20 {'\n'}
                        Price: Rs. 19,999 {'\n'}
                        Description: The Platinum membership offers 20 online sessions to help you achieve your goals and unlock your full potential.
                    </Text>
                    <Text style={styles.membership}>- Diamond Membership:</Text>
                    <Text style={styles.details}>
                        Number of Sessions: 40 {'\n'}
                        Price: Rs. 34,999 {'\n'}
                        Description: For those seeking comprehensive support and long-term transformation, the Diamond membership includes 40 online sessions to guide you on your journey to success.
                    </Text>
                    <Text style={styles.answer}>These membership packages are designed to cater to individuals at different stages of their personal or professional development. Whether you are looking for occasional support or a more intensive coaching experience, our memberships offer flexibility and value to help you thrive and succeed.</Text>


                    <Text style={styles.question}>4. Are your counselors and coaches certified?</Text>
                    <Text style={styles.answer}>Yes, all our counselors and coaches are highly qualified professionals with certifications in their respective fields. They undergo rigorous training and continuous professional development to provide you with the best service.</Text>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 65 : 20,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "black"
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: "black"
    },
    answer: {
        fontSize: 16,
        marginBottom: 15,
        color: "black"
    },
    membership: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: "black"
    },
    details: {
        fontSize: 16,
        marginLeft: 10,
        color: "black"
    },
});

export default FAQComponent;
