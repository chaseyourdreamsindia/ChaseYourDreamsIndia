import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, RefreshControl, ImageBackground } from 'react-native';
import tw from 'twrnc';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { BASECOLOR } from '../Assets/colors/colors';
import BASE from '../api/api';
import { useEffect } from 'react';

const Services = ({ navigation }) => {

    const [selected, setSelected] = useState("none");
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchServices = () => {
        setLoading(true);
        fetch(`${BASE}/services/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            res.json().then(dta => {
                // console.log(dta)
                setLoading(false);
                setServices(dta.services);
            }).catch(err => { console.log("json "+err) })
        }).catch(err => {
            console.log(err);
        })
    }

    const onRefresh = React.useCallback(() => {
        fetchServices();
    }, []);

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
            <ImageBackground source={require("../Assets/bg.jpg")} imageStyle={tw`w-full h-full`}>
                <View style={[Styles.root, { flex: 1 }]}>
                    <View style={tw`px-3 flex flex-col gap-3 pb-3 pt-4`}>
                        <View style={tw`flex flex-row gap-3 items-center`}>
                            <TextInput placeholder='Search keyword' style={[tw`p-2 bg-white rounded`, { width: "90%" }]} placeholderTextColor="gray" />
                            <TouchableOpacity>
                                <FontAwesome name="search" color="white" size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={tw`p-3`}>
                        <Text style={tw`text-xs text-gray-600 font-bold`}>Browse By Categories</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={tw`p-2 flex flex-row gap-2`}>
                                <TouchableOpacity onPress={() => setSelected("ind")}>
                                    <View style={[tw`border p-1 rounded-xl border-gray-400 px-2`, {
                                        backgroundColor: selected === "ind" ? BASECOLOR : "white",
                                    }]}>
                                        <Text style={tw`text-xs font-bold ${selected === "ind" ? "text-white" : "text-black"}`}>Individuals</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelected("par")}>
                                    <View style={[tw`border p-1 rounded-xl border-gray-400 px-2`, {
                                        backgroundColor: selected === "par" ? BASECOLOR : "white",
                                    }]}>
                                        <Text style={tw`text-xs font-bold ${selected === "cor" ? "text-white" : "text-black"}`}>Parent</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelected("cor")}>
                                    <View style={[tw`border p-1 rounded-xl border-gray-400 px-2`, {
                                        backgroundColor: selected === "cor" ? BASECOLOR : "white",
                                    }]}>
                                        <Text style={tw`text-xs font-bold ${selected === "cor" ? "text-white" : "text-black"}`}>Corporate</Text>
                                    </View>
                                    </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelected("cup")}>
                                    <View style={[tw`border p-1 rounded-xl border-gray-400 px-2`, {
                                        backgroundColor: selected === "cup" ? BASECOLOR : "white",
                                    }]}>
                                        <Text style={tw`text-xs font-bold ${selected === "cup" ? "text-white" : "text-black"}`}>Couples</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelected("edu")}>
                                    <View style={[tw`border p-1 rounded-xl border-gray-400 px-2`, {
                                        backgroundColor: selected === "edu" ? BASECOLOR : "white",
                                    }]}>
                                        <Text style={tw`text-xs font-bold ${selected === "edu" ? "text-white" : "text-black"}`}>Educational & Professional institutions</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelected("stu")}>
                                    <View style={[tw`border p-1 rounded-xl border-gray-400 px-2`, {
                                        backgroundColor: selected === "stu" ? BASECOLOR : "white",
                                    }]}>
                                        <Text style={tw`text-xs font-bold ${selected === "stu" ? "text-white" : "text-black"}`}>Students</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelected("fam")}>
                                    <View style={[tw`border p-1 rounded-xl border-gray-400 px-2`, {
                                        backgroundColor: selected === "fam" ? BASECOLOR : "white",
                                    }]}>
                                        <Text style={tw`text-xs font-bold ${selected === "fam" ? "text-white" : "text-black"}`}>Family</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                        <View style={tw`pt-3`}>
                            <Text style={tw`uppercase p-2 text-base text-black font-bold`}>Individuals</Text>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                <View style={tw`flex flex-row-reverse gap-2`}>
                                    {
                                        !loading && services.map(srv => {
                                            // console.log(srv)
                                            if (srv.category === "individuals")
                                                return (
                                                    <View style={tw``}>
                                                        <View style={tw`rounded-xl`}>
                                                            <Image source={{ uri: srv.background }} style={tw`w-52 h-32 rounded-xl`} />
                                                            <View style={tw`p-2 absolute`}>
                                                                <Text style={[tw`uppercase text-white font-bold text-xl`,{
                                                                    textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                        width: 2, height: 2
                                                                    }
                                                                }]}>{srv.name}</Text>
                                                                <Text style={[tw`text-xs text-white mt-2`, {
                                                                    textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                        width: 2, height: 2
                                                                    }
                                                                }]}>(INR {srv.price}/- Per Session Per Module)</Text>
                                                                <View style={tw`flex flex-row justify-end mt-2 -mr-3`}>
                                                                    <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                                                                        ...srv
                                                                    })}>
                                                                        <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded mt-1`}>
                                                                            <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                                            <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                );
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View style={tw`pt-3 mt-3`}>
                            <Text style={tw`uppercase p-2 text-base text-black font-bold`}>Parent</Text>
                            <ScrollView showsHorizontalScrollIndicator={false}>
                                <View style={tw`flex flex-col-reverse gap-2 w-full`}>
                                    {
                                        !loading && services.map(srv => {
                                            if (srv.category === "parent")
                                                return (
                                                    <View style={[tw``, { width: "100%" }]}>
                                                        <Image source={{ uri: srv.background }} style={[{ width: "100%" }, tw`h-32 rounded-xl`]} />
                                                        <View style={tw`p-2 absolute w-full`}>
                                                            <Text style={[tw`uppercase text-white font-bold text-base text-center mt-3`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>{srv.name}</Text>
                                                            <Text style={[tw`text-xs text-white text-center font-bold`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>(INR {srv.price}/- Per session per module)</Text>
                                                            <View style={tw`flex flex-row justify-end mr-3 mt-6`}>
                                                                <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                                                                    ...srv
                                                                })}>
                                                                    <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded`}>
                                                                        <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                                        <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                );
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View style={tw`pt-1 w-full mt-5`}>
                            <Text style={tw`uppercase p-2 text-base text-black font-bold`}>Corporate</Text>
                            <ScrollView showsHorizontalScrollIndicator={false} style={tw`w-full`}>
                                <View style={tw`flex flex-col gap-2 w-full`}>
                                    {
                                        !loading && services.map(srv => {
                                            if (srv.category === "corporate") {
                                                return (
                                                    <View style={[tw`p-3`, { width: "100%" }]}>
                                                        <Image source={{ uri: srv.background }} style={[{ width: "100%" }, tw`h-32 rounded-xl`]} />
                                                        <View style={tw`p-2 absolute w-full`}>
                                                            <Text style={[tw`uppercase text-white font-bold text-xl text-center mt-8`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>{srv.name}</Text>
                                                            {(srv.name !== "Management") && <Text style={[tw`text-xs text-white text-center font-bold`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>(INR {srv.price}/- Per Session Per Module)</Text>}
                                                            <View style={tw`flex flex-row justify-end mr-3 mt-6`}>
                                                                <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                                                                    ...srv
                                                                })}>
                                                                    <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded`}>
                                                                        <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                                        <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    // <View style={[tw`rounded-xl w-full`, { width:"100%" }]}>
                                                    //     <Image source={{ uri: srv.background }} style={tw`w-52 h-32 rounded-xl`} />
                                                    //     <View style={tw`p-2 absolute`}>
                                                    //         <Text style={[tw`uppercase text-white font-bold text-xl text-center`,{
                                                    //             textShadowColor:"black",textShadowRadius:1,textShadowOffset:{
                                                    //                 width:2,height:2
                                                    //             }
                                                    //         }]}>{srv.name}</Text>
                                                    //         <Text style={[tw`text-xs text-white`, {
                                                    //             textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                    //                 width: 2, height: 2
                                                    //             }
                                                    //         }]}>(INR {srv.price}/- Per Session Per Module)</Text>
                                                    //         <View style={tw`flex flex-row justify-center mr-3 mt-6`}>
                                                    //             <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                                                    //                 ...srv
                                                    //             })}>
                                                    //                 <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded`}>
                                                    //                     <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                    //                     <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                    //                 </View>
                                                    //             </TouchableOpacity>
                                                    //         </View>
                                                    //     </View>
                                                    // </View>

                                                );
                                            }
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View style={tw`pt-3 mt-3`}>
                            <Text style={tw`uppercase p-2  text-black font-bold`}>Educational & Professional institutions</Text>
                            <ScrollView showsHorizontalScrollIndicator={false}>
                                <View style={tw`flex flex-row gap-2 w-full`}>
                                    {
                                        !loading && services.map(srv => {
                                            if (srv.category === "educational_institutions") {
                                                return (
                                                    <View style={[tw``, { width: "100%" }]}>
                                                        <Image source={{ uri: srv.background }} style={[{ width: "100%" }, tw`h-32 rounded-xl`]} />
                                                        <View style={tw`p-2 absolute w-full`}>
                                                            <Text style={[tw`uppercase text-white font-bold text-xl text-center mt-5`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>{srv.name}</Text>
                                                            {/* <Text style={[tw`text-xs text-white text-center font-bold`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>(INR {srv.price}/- Per Student Per Module)</Text> */}
                                                            <View style={tw`flex flex-row justify-end mr-3 mt-2`}>
                                                                <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                                                                    ...srv
                                                                })}>
                                                                    <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded`}>
                                                                        <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                                        <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                );
                                            }
                                        })
                                    }

                                </View>
                            </ScrollView>
                        </View>
                        <View style={tw`pt-3 mt-3`}>
                            <Text style={tw`uppercase p-2 text-base text-black font-bold`}>Couple</Text>
                            <ScrollView showsHorizontalScrollIndicator={false}>
                                <View style={tw`flex flex-row gap-2 w-full`}>
                                    {
                                        !loading && services.map(srv => {
                                            if (srv.category === "couples") {
                                                return (
                                                    <View style={[tw``, { width: "100%" }]}>
                                                        <Image source={{ uri: srv.background }} style={[{ width: "100%" }, tw`h-32 rounded-xl`]} />
                                                        <View style={tw`p-2 absolute w-full`}>
                                                            <Text style={[tw`uppercase text-white font-bold text-xl text-center`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>{srv.name}</Text>
                                                            <Text style={[tw`text-xs text-white text-center`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>(INR {srv.price}/- Per Session Per Module)</Text>
                                                            <View style={tw`flex flex-row justify-end mr-3 mt-6`}>
                                                                <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                                                                    ...srv
                                                                })}>
                                                                    <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded`}>
                                                                        <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                                        <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                );
                                            }
                                        })
                                    }

                                </View>
                            </ScrollView>
                        </View>
                        <View style={tw`pt-3 mt-3`}>
                            <Text style={tw`uppercase p-2 text-base text-black font-bold`}>Students</Text>
                            <ScrollView showsHorizontalScrollIndicator={false}>
                            <View style={tw`flex flex-col gap-2 w-full`}>
                                    {
                                        !loading && services.map(srv => {
                                            if (srv.category === "students") {
                                                return (
                                                    <View style={[tw`p-3`, { width: "100%" }]}>
                                                        <Image source={{ uri: srv.background }} style={[{ width: "100%" }, tw`h-48 rounded-xl`]} />
                                                        <View style={tw`p-2 absolute w-full`}>
                                                            <Text style={[tw`uppercase text-white font-bold text-base text-center mt-10`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>{srv.name}</Text>
                                                            <Text style={[tw`text-xs text-white text-center font-bold`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>(INR {srv.price}/- Per Person Per Module)</Text>
                                                            <View style={tw`flex flex-row justify-end mr-3 mt-6`}>
                                                                <TouchableOpacity onPress={() =>{
                                                                    if(srv.name === "Student Empowerment Card"){
                                                                        navigation.navigate("viewmembership", {
                                                                            CardImg:srv.background,
                                                                            Name :srv.name ,
                                                                            KeyPoints :["Personality Development","Career Counselling","Goal Setting Assistance"],
                                                                            Description : "", 
                                                                            Credits : 1, 
                                                                            Price : 1000, 
                                                                            Validity : "",
                                                                            _id : "66211949a3c74af0113e2649" 
                                                                        })
                                                                    }else{
                                                                        navigation.navigate("Viewservice",{...srv});
                                                                    }
                                                                }}>
                                                                    <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded`}>
                                                                        <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                                        <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    // <View style={[tw`rounded-xl w-full`, { width:"100%" }]}>
                                                    //     <Image source={{ uri: srv.background }} style={tw`w-52 h-32 rounded-xl`} />
                                                    //     <View style={tw`p-2 absolute`}>
                                                    //         <Text style={[tw`uppercase text-white font-bold text-xl text-center`,{
                                                    //             textShadowColor:"black",textShadowRadius:1,textShadowOffset:{
                                                    //                 width:2,height:2
                                                    //             }
                                                    //         }]}>{srv.name}</Text>
                                                    //         <Text style={[tw`text-xs text-white`, {
                                                    //             textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                    //                 width: 2, height: 2
                                                    //             }
                                                    //         }]}>(INR {srv.price}/- Per Session Per Module)</Text>
                                                    //         <View style={tw`flex flex-row justify-center mr-3 mt-6`}>
                                                    //             <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                                                    //                 ...srv
                                                    //             })}>
                                                    //                 <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded`}>
                                                    //                     <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                    //                     <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                    //                 </View>
                                                    //             </TouchableOpacity>
                                                    //         </View>
                                                    //     </View>
                                                    // </View>

                                                );
                                            }
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View style={tw`pt-3 mt-3`}>
                            <Text style={tw`uppercase p-2 text-base text-black font-bold`}>Family</Text>
                            <ScrollView showsHorizontalScrollIndicator={false}>
                                <View style={tw`flex flex-row gap-2 w-full`}>
                                    {
                                        !loading && services.map(srv => {
                                            if (srv.category === "family")
                                                return (
                                                    <View style={[tw``, { width: "100%" }]}>
                                                        <Image source={{ uri: srv.background }} style={[{ width: "100%" }, tw`h-32 rounded-xl`]} />
                                                        <View style={tw`p-2 absolute w-full`}>
                                                            <Text style={[tw`uppercase text-white font-bold text-center mt-5 text-base`, {
                                                                textShadowColor: "black",
                                                                textShadowRadius: 3,
                                                                textShadowOffset: {
                                                                    width: 1,
                                                                    height: 1
                                                                }
                                                            }]}>{srv.name}</Text>
                                                            <Text style={[tw`text-xs text-white text-center font-bold`, {
                                                                textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                                                                    width: 2, height: 2
                                                                }
                                                            }]}>(INR {srv.price}/- Per session per module)</Text>
                                                            <View style={tw`flex flex-row justify-end mr-3 mt-3`}>
                                                                <TouchableOpacity onPress={() => navigation.navigate("Viewservice", {
                                                                    ...srv
                                                                })}>
                                                                    <View style={tw`flex flex-row gap-2 items-center bg-white p-1 rounded`}>
                                                                        <Text style={tw`text-center text-xs text-black`}>Explore now</Text>
                                                                        <FontAwesome name="arrow-alt-circle-right" size={17} color={BASECOLOR} />
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                );
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    root: {
        paddingTop: Platform.OS === 'ios' ? 50 : 0,
        flex: 1,
    }
});

export default Services;