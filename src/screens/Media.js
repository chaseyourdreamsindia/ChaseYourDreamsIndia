import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import tw from 'twrnc'

const Media = () => {

  const channels = [
    {
      image: require("../Assets/channels/All/1.png")
    },
    {
      image: require("../Assets/channels/All/2.png")
    },
    {
      image: require("../Assets/channels/All/3.png")
    },
    {
      image: require("../Assets/channels/All/4.png")
    },
    {
      image: require("../Assets/channels/All/5.png")
    },
    {
      image: require("../Assets/channels/All/6.png")
    },
    {
      image: require("../Assets/channels/All/7.png")
    },
    {
      image: require("../Assets/channels/All/8.png")
    },
    {
      image: require("../Assets/channels/All/9.png")
    },
    {
      image: require("../Assets/channels/All/10.png")
    },
    {
      image: require("../Assets/channels/All/11.png")
    },
    {
      image: require("../Assets/channels/All/12.png")
    },
    {
      image: require("../Assets/channels/All/13.png")
    },
    {
      image: require("../Assets/channels/All/14.png")
    },
    {
      image: require("../Assets/channels/All/15.png")
    },
    {
      image: require("../Assets/channels/All/16.png")
    },
    {
      image: require("../Assets/channels/All/17.png")
    },
    {
      image: require("../Assets/channels/All/18.png")
    },
    {
      image: require("../Assets/channels/All/19.png")
    },
    {
      image: require("../Assets/channels/All/20.png")
    },
    {
      image: require("../Assets/channels/All/21.png")
    },
    {
      image: require("../Assets/channels/All/22.png")
    },
    {
      image: require("../Assets/channels/All/23.png")
    },
    {
      image: require("../Assets/channels/All/24.png")
    },
    {
      image: require("../Assets/channels/All/25.png")
    },
    {
      image: require("../Assets/channels/All/26.png")
    },
    {
      image: require("../Assets/channels/All/27.png")
    },
    {
      image: require("../Assets/channels/All/28.png")
    },
    {
      image: require("../Assets/channels/All/29.png")
    },
    {
      image: require("../Assets/channels/All/30.png")
    },
    {
      image: require("../Assets/channels/All/31.png")
    },
    {
      image: require("../Assets/channels/All/32.png")
    },
    {
      image: require("../Assets/channels/All/33.png")
    },
    {
      image: require("../Assets/channels/All/34.png")
    },
    {
      image: require("../Assets/channels/All/35.png")
    },
    {
      image: require("../Assets/channels/All/36.png")
    },
    {
      image: require("../Assets/channels/All/37.png")
    },
    {
      image: require("../Assets/channels/All/38.png")
    },
    {
      image: require("../Assets/channels/All/39.png")
    },
    {
      image: require("../Assets/channels/All/40.png")
    },
    {
      image: require("../Assets/channels/All/41.png")
    },
    {
      image: require("../Assets/channels/All/42.png")
    },
    {
      image: require("../Assets/channels/All/43.png")
    },
    {
      image: require("../Assets/channels/All/44.png")
    },
    {
      image: require("../Assets/channels/All/45.png")
    },
    {
      image: require("../Assets/channels/All/46.png")
    },
    {
      image: require("../Assets/channels/All/47.png")
    },
    {
      image: require("../Assets/channels/All/48.png")
    },
    {
      image: require("../Assets/channels/All/49.png")
    },
    {
      image: require("../Assets/channels/All/50.png")
    },
    {
      image: require("../Assets/channels/All/51.png")
    },
    {
      image: require("../Assets/channels/All/52.png")
    },
    {
      image: require("../Assets/channels/All/53.png")
    },
    {
      image: require("../Assets/channels/All/54.png")
    },
    {
      image: require("../Assets/channels/All/55.png")
    },
    {
      image: require("../Assets/channels/All/56.png")
    },
    {
      image: require("../Assets/channels/All/57.png")
    },
    {
      image: require("../Assets/channels/All/58.png")
    },
    {
      image: require("../Assets/channels/All/59.png")
    },
    {
      image: require("../Assets/channels/All/60.png")
    },
    {
      image: require("../Assets/channels/All/61.png")
    },
    {
      image: require("../Assets/channels/All/62.png")
    },
    {
      image: require("../Assets/channels/All/63.png")
    },
    {
      image: require("../Assets/channels/All/64.png")
    },
    {
      image: require("../Assets/channels/All/65.png")
    },
    {
      image: require("../Assets/channels/All/66.png")
    },
    {
      image: require("../Assets/channels/All/67.png")
    },
    {
      image: require("../Assets/channels/All/68.png")
    },
    {
      image: require("../Assets/channels/All/69.png")
    },
    {
      image: require("../Assets/channels/All/70.png")
    },
    {
      image: require("../Assets/channels/All/71.png")
    },
    {
      image: require("../Assets/channels/All/72.png")
    },
    {
      image: require("../Assets/channels/All/73.png")
    },
    {
      image: require("../Assets/channels/All/74.png")
    },
    {
      image: require("../Assets/channels/All/75.png")
    },
    {
      image: require("../Assets/channels/All/76.png")
    },
    {
      image: require("../Assets/channels/All/77.png")
    },
    {
      image: require("../Assets/channels/All/78.png")
    },
    {
      image: require("../Assets/channels/All/79.png")
    },
    {
      image: require("../Assets/channels/All/80.png")
    },
    {
      image: require("../Assets/channels/All/81.png")
    },
    {
      image: require("../Assets/channels/All/82.png")
    },
    {
      image: require("../Assets/channels/All/83.png")
    },
    {
      image: require("../Assets/channels/All/84.png")
    },
    {
      image: require("../Assets/channels/All/85.png")
    },
    {
      image: require("../Assets/channels/All/86.png")
    },
    {
      image: require("../Assets/channels/All/87.png")
    },
    {
      image: require("../Assets/channels/All/88.png")
    },
    {
      image: require("../Assets/channels/All/89.png")
    },
    {
      image: require("../Assets/channels/All/90.png")
    },
    {
      image: require("../Assets/channels/All/91.png")
    },
    {
      image: require("../Assets/channels/All/92.png")
    },
    {
      image: require("../Assets/channels/All/93.png")
    },
    {
      image: require("../Assets/channels/All/94.png")
    },
    {
      image: require("../Assets/channels/All/95.png")
    },
    {
      image: require("../Assets/channels/All/96.png")
    },
    {
      image: require("../Assets/channels/All/97.png")
    },
    {
      image: require("../Assets/channels/All/98.png")
    },
    {
      image: require("../Assets/channels/All/99.png")
    },
    {
      image: require("../Assets/channels/All/100.png")
    },
    {
      image: require("../Assets/channels/All/101.png")
    },
    {
      image: require("../Assets/channels/All/102.png")
    },
    {
      image: require("../Assets/channels/All/103.png")
    },
    {
      image: require("../Assets/channels/All/104.png")
    },
    {
      image: require("../Assets/channels/All/105.png")
    },
    {
      image: require("../Assets/channels/All/106.png")
    },
    {
      image: require("../Assets/channels/All/107.png")
    },
    {
      image: require("../Assets/channels/All/108.png")
    },
    {
      image: require("../Assets/channels/All/109.png")
    },
    {
      image: require("../Assets/channels/All/110.png")
    },
    {
      image: require("../Assets/channels/All/111.png")
    },
    {
      image: require("../Assets/channels/All/112.png")
    },
    {
      image: require("../Assets/channels/All/113.png")
    },
    {
      image: require("../Assets/channels/All/114.png")
    },
    {
      image: require("../Assets/channels/All/115.png")
    },
    {
      image: require("../Assets/channels/All/116.png")
    },
    {
      image: require("../Assets/channels/All/117.png")
    },
    {
      image: require("../Assets/channels/All/118.png")
    },
    {
      image: require("../Assets/channels/All/119.png")
    },
    {
      image: require("../Assets/channels/All/120.png")
    },
    {
      image: require("../Assets/channels/All/121.png")
    },
    {
      image: require("../Assets/channels/All/122.png")
    },
    {
      image: require("../Assets/channels/All/123.png")
    },
    {
      image: require("../Assets/channels/All/124.png")
    },
    {
      image: require("../Assets/channels/All/125.png")
    },
    {
      image: require("../Assets/channels/All/126.png")
    },
    {
      image: require("../Assets/channels/All/127.png")
    },
    {
      image: require("../Assets/channels/All/128.png")
    },
    {
      image: require("../Assets/channels/All/129.png")
    },
    {
      image: require("../Assets/channels/All/130.png")
    },
    {
      image: require("../Assets/channels/All/131.png")
    },
    {
      image: require("../Assets/channels/All/132.png")
    },
    {
      image: require("../Assets/channels/All/133.png")
    },
    {
      image: require("../Assets/channels/All/134.png")
    },
    {
      image: require("../Assets/channels/All/135.png")
    },
    {
      image: require("../Assets/channels/All/136.png")
    },
    {
      image: require("../Assets/channels/All/137.png")
    },
    {
      image: require("../Assets/channels/All/138.png")
    },
    {
      image: require("../Assets/channels/All/139.png")
    },
    {
      image: require("../Assets/channels/All/140.png")
    },
    {
      image: require("../Assets/channels/All/141.png")
    },
    {
      image: require("../Assets/channels/All/142.png")
    },
    {
      image: require("../Assets/channels/All/143.png")
    },
    {
      image: require("../Assets/channels/All/144.png")
    },
    {
      image: require("../Assets/channels/All/145.png")
    },
    {
      image: require("../Assets/channels/All/146.png")
    },
    {
      image: require("../Assets/channels/All/147.png")
    },
    {
      image: require("../Assets/channels/All/148.png")
    },
    {
      image: require("../Assets/channels/All/149.png")
    },
    {
      image: require("../Assets/channels/All/150.png")
    },
    {
      image: require("../Assets/channels/All/151.png")
    },
    {
      image: require("../Assets/channels/All/152.png")
    },
    {
      image: require("../Assets/channels/All/153.png")
    },
    {
      image: require("../Assets/channels/All/154.png")
    },
    {
      image: require("../Assets/channels/All/155.png")
    },
    {
      image: require("../Assets/channels/All/156.png")
    },
    {
      image: require("../Assets/channels/All/157.png")
    },
    {
      image: require("../Assets/channels/All/158.png")
    },
    {
      image: require("../Assets/channels/All/159.png")
    },
    {
      image: require("../Assets/channels/All/160.png")
    },
    {
      image: require("../Assets/channels/All/161.png")
    },
    {
      image: require("../Assets/channels/All/162.png")
    },
    {
      image: require("../Assets/channels/All/163.png")
    },
    {
      image: require("../Assets/channels/All/164.png")
    },
    {
      image: require("../Assets/channels/All/165.png")
    },
    {
      image: require("../Assets/channels/All/166.png")
    },
    {
      image: require("../Assets/channels/All/167.png")
    },
    {
      image: require("../Assets/channels/All/168.png")
    },
    {
      image: require("../Assets/channels/All/169.png")
    },
    {
      image: require("../Assets/channels/All/170.png")
    },
    {
      image: require("../Assets/channels/All/171.png")
    },
    {
      image: require("../Assets/channels/All/172.png")
    },
    {
      image: require("../Assets/channels/All/173.png")
    },
    {
      image: require("../Assets/channels/All/174.png")
    },
    {
      image: require("../Assets/channels/All/175.png")
    },
    {
      image: require("../Assets/channels/All/176.png")
    },
    {
      image: require("../Assets/channels/All/177.png")
    },
    {
      image: require("../Assets/channels/All/178.png")
    },
    {
      image: require("../Assets/channels/All/179.png")
    },
    {
      image: require("../Assets/channels/All/180.png")
    },
    {
      image: require("../Assets/channels/All/181.png")
    },
    {
      image: require("../Assets/channels/All/182.png")
    },
    {
      image: require("../Assets/channels/All/183.png")
    },
    {
      image: require("../Assets/channels/All/184.png")
    },
    {
      image: require("../Assets/channels/All/185.png")
    },
    {
      image: require("../Assets/channels/All/186.png")
    },
    {
      image: require("../Assets/channels/All/187.png")
    },
    {
      image: require("../Assets/channels/All/188.png")
    },
    {
      image: require("../Assets/channels/All/189.png")
    },
    {
      image: require("../Assets/channels/All/190.png")
    },
    {
      image: require("../Assets/channels/All/191.png")
    },
    {
      image: require("../Assets/channels/All/192.png")
    },
    {
      image: require("../Assets/channels/All/193.png")
    },
    {
      image: require("../Assets/channels/All/194.png")
    },
    {
      image: require("../Assets/channels/All/195.png")
    },
    {
      image: require("../Assets/channels/All/196.png")
    },
    {
      image: require("../Assets/channels/All/197.png")
    },
    {
      image: require("../Assets/channels/All/198.png")
    },
    {
      image: require("../Assets/channels/All/199.png")
    },
    {
      image: require("../Assets/channels/All/200.png")
    },
    {
      image: require("../Assets/channels/All/201.png")
    },
    {
      image: require("../Assets/channels/All/202.png")
    },
    {
      image: require("../Assets/channels/All/203.png")
    },
    {
      image: require("../Assets/channels/All/204.png")
    },
  ];

  return (
    <View style={Styles.root}>
      <Text style={tw`text-black font-bold text-2xl`}>We are Featured on</Text>
      <View>
        <ScrollView>
          <View style={tw`flex flex-row gap-3 items-center justify-center flex-wrap pt-3 bg-white pb-20`}>
            {
              channels.map(channel => {
                return (
                  <Image source={channel.image} style={tw`w-44 h-12`} />
                );
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  root: {
    marginTop: 70,
    padding: 10
  }
});

export default Media;