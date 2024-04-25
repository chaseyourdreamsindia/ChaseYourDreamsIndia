import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import tw from 'twrnc'

const Certificate = () => {

    const New_Certificates = [
        {
            icon:require("../Assets/Certifications/certified.png"),
            title:"Certified Life Coach"
        },
        {
            title:"Certified NLP Master Practitioner",
            icon:require("../Assets/Certifications/laptop.png")
        },
        {
            icon:require("../Assets/Certifications/self-control.png"),
            title:"Emotional Intelligence Coach"
        },
        {
            title:"Certified Master of Hypnosis ",
            icon:require("../Assets/Certifications/hypnotism.png")
        },
        {
            icon:require("../Assets/Certifications/flag.png"),
            title:"Executive And Leadership Coach"
        },
        {
            icon:require("../Assets/Certifications/presentation.png"),
            title:"Organizational Development Coach"
        },
        {
            title:"Cognitive Behavioural Therapy for LGBTQ+ Community ",
            icon:require("../Assets/Certifications/consumer-behaviour.png")
        },
        {
            title:"Eye Movement Desensitization and Reprocessing (EDMR) Therapy",
            icon:require("../Assets/Certifications/blindness.png")
        },
        {
            title:"Fully Accredited Professional Child Psychology Diploma",
            icon:require("../Assets/Certifications/natural-language-processing.png")
        },
        {
            title:`Professional Counselling Grief & Bereavement Diploma Course`,
            icon:require("../Assets/Certifications/wreath.png")
        },
        {
            title:"CBT Coach Practitioner Certification (ACCREDITED)",
            icon:require("../Assets/Certifications/partners.png")
        },
        {
            title:"Professional Counselling for Suicidal Clients Diploma Course",
            icon:require("../Assets/Certifications/self-control.png")
        },
        {
            title:"Counselling Children & Adolescents - ACCREDITED CERTIFICATE",
            icon:require("../Assets/Certifications/lover.png")
        },
        {
            title:"EFT / TFT Master Practitioner Certification (ACCREDITED)",
            icon:require("../Assets/Certifications/conversation.png")
        },
        {
            title:"Depression Counselling Diploma: Advanced Level – ACCREDITED",
            icon:require("../Assets/Certifications/headache.png")
        },
        {
            title:"Emotional Intelligence Life Coach Certification (Accredited)",
            icon:require("../Assets/Certifications/emotions.png")
        },
    ]

    return (
        <ScrollView>
            <View style={Styles.root}>
                <Text style={tw`p-3 text-2xl font-bold text-black`}>Certificates</Text>
                <View style={tw`flex flex-col gap-2 p-2`}>
                    {
                        New_Certificates.map(itm=>{
                            return(
                                <View style={tw`w-full h-24 rounded-xl border-gray-300 border flex flex-row gap-3 p-2 items-center`}>
                                    <Image source={itm.icon} style={tw`w-10 h-10`}/>
                                    <Text style={[tw`text-xs text-black`,{fontSize:9.6}]}>{itm.title}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    );
};

export default Certificate;

const Styles = StyleSheet.create({
    root: {
        paddingTop: Platform.OS === "ios" ? 60 : 20,
        height: "100%",
        width:"100%",
        backgroundColor:"white"
    },
});