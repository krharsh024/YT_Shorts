import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Video } from "expo-av";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const buttonSize=30;
const Shorts = () => {

  const [activeIndex, setActiveIndex] = useState(0); 
  const videoRefs = useRef([]); 

  const onViewableItemsChanged = useRef(async ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index;

      videoRefs.current.forEach(async (video, index) => {
        if (video) {
          if (index === newIndex) {
            await video.playAsync(); 
          } else {
            // await video.unloadAsync();
            await video.pauseAsync(); 
          }
        }
      });

      setActiveIndex(newIndex); 
    }
  }).current;

 
    const videoData =  [
        require('./assets/video1.mp4'),
        require('./assets/video2.mp4'),
        require('./assets/video3.mp4'),
        require('./assets/video4.mp4'),
        
      ]
    
console.log("Component rendered")
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <StatusBar translucent backgroundColor='transparent'barStyle="dark-content" />
      <FlatList
        data={videoData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        
        pagingEnabled
        onScroll={(e) =>
          e.nativeEvent.contentOffset.y.toFixed(0) /height
        }
        renderItem={({ item, index }) => {
          return (
            <View style={styles.topContainer}>
              <Image
                source={item}
                resizeMode="cover"
                style={styles.shortVideo}
              />
              <Video
              ref={(ref) => (videoRefs.current[index] = ref)} // Assign ref to the current video
                style={styles.Video}
                resizeMode="cover"
                shouldPlay={activeIndex === index} // Only play the active video
                isMuted={activeIndex !== index} // Mute inactive videos
                source={item}
                isLooping
              />
              <TouchableOpacity style={styles.pauseButton} onPress={()=>{
                if(activeIndex===-1){
                  setActiveIndex(index)
                }else{
                  setActiveIndex(-1)
                }
              }}>
                
                {activeIndex===-1?(<Ionicons name='pause-circle' size={65} color={'white'} />):null}

              </TouchableOpacity>
              <View
                style={{
                  alignSelf: "flex-end",
                  padding: 10,
                  height: "30%",
                  width: "85%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "flex-start",
                  }}
                >
                  <Ionicons name="person-circle" size={45} color={"#fff"} />
                  <Text
                    style={{ fontSize: 13, fontWeight: "600", color: "#fff" }}
                  >
                    singhharshvardhan25
                  </Text>
                  <Text style={styles.subscribeButon}>Subscibe</Text>
                </View>
                <View
                  style={{
                    flexWrap: "wrap",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}
                  >
                    Nature videos
                  </Text>

                  <Text style={styles.hashtagText}>
                    #nature #life #moments #aesthetic #relief #asmr
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name="musical-notes-outline"
                      size={28}
                      color={"#fff"}
                    />
                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: 16,
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      Falak dekhun | Sonu nigam
                    </Text>
                  </View>
                  <View style={styles.useSound}>
                    <Ionicons name="camera-outline" size={28} color={"#fff"} />
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "400",
                        marginLeft: 5,
                      }}
                    >
                      Use this sound
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.buttonView}>
                <View style={styles.button}>
                  <MaterialIcons name='thumb-up' size={buttonSize} color={"#fff"} />
                  <Text style={styles.buttonStats}> 2k</Text>
                </View>

                <View style={styles.button}>
                  <Ionicons name='thumbs-down-sharp' size={buttonSize} color={"#fff"} />
                  <Text style={styles.buttonStats}> 100</Text>
                </View>

                <View style={styles.button}>
                  <MaterialIcons name='comment' size={buttonSize} color={"#fff"} />
                  <Text style={styles.buttonStats}> 1k</Text>
                </View>

                <View style={styles.button}>
                  <MaterialIcons name='share' size={buttonSize} color={"#fff"} />
                  <Text style={styles.buttonStats}>25</Text>
                </View>

                <View style={styles.button}>
                  <MaterialIcons name="more-horiz" size={buttonSize} color={"#fff"} />
                </View>
              </View>
              
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: height,
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Video: {
    position: "absolute",
    height: "100%",
    width: "100%",
    
  },
  buttonView: {
    alignSelf: "flex-end",
    paddingHorizontal:8,
  },
  buttonStats: {
    fontSize: 15,
    fontWeight: "800",
    color: "#fff",
  },
  pauseButton:{
    position:'absolute',
    top:0,
    height:height,
    width:width,
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  subscribeButon: {
    height: 20,
    width: 75,
    fontWeight: "600",
    textAlign: "center",
    borderRadius: 12.5,
    backgroundColor: "red",
    color: "#fff",
    fontSize:12,
    marginLeft: 5,
  },
  hashtagText: {
    fontSize: 15,
    color: '#065FD4',
    fontWeight: "400",
  },
  useSound: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
 
});
export default Shorts;
