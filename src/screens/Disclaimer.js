import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Disclaimer = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Disclaimer</Text>
        <Text style={styles.disclaimerText}>
          The purpose of the work is to assist people in making changes in their lives through supportive guidance. By participating our services, consulting sessions, buying any of the products, and reading the blog, guidelines, handouts, e-books or email series, you acknowledge that We are not licensed psychologists, medical doctors, or health care professionals and our services do not replace the care of psychologists, doctors or other healthcare professionals.
          Additionally, any services, trainings, and other materials offered through this app have the potential to stir emotional or physical responses and/or stress. The objective of the services and offerings are to help you in attaining your desired goals and not psychotherapeutic in nature. If you have been treated for, or believe you may have suffered from a psychological and/or traumatic injury, please consider if you are able to safely engage with the service or offering at this time.
          We are not liable for any distress that the participation might create.
          To be of best service to those we work with and to stick to the values, we will at all times exercise our best professional efforts, skills and care. However, we cannot guarantee the outcome of the efforts and/or recommendations on the blog, email or services .We cannot make any guarantees other than to deliver the services purchased as described.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    paddingLeft: 20,
    paddingTop: Platform.OS === 'ios' ? 65 : 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black title
    marginBottom: 10,
  },
  disclaimerText: {
    fontSize: 16,
    color: '#000', // Black text
    lineHeight: 22, // Adjust line height for readability
  },
});

export default Disclaimer;
