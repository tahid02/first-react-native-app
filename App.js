import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
  Button,
  Alert,
} from "react-native";
import BottomNav from "./components/BottomNav/BottomNav";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={[styles.container, { flexDirection: "row" }]}>
          <View style={{ flex: 1, order: 2 }}>
            <Button
              title="toggle"
              color="blue"
              onPress={() => Alert.alert("toggle sidebar")}
            />
          </View>

          <View style={{ flex: 2, order: 1, marginHorizontal: 20 }}>
            <TextInput
              style={{ borderWidth: 3, borderColor: "black", height: 40 }}
              placeholder="search product"
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Image
            source={{
              uri: "https://blog.crowdbotics.com/content/images/2020/05/React-Native-Featured-Image-2.png",
            }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            Now I am learning view problem.Now I am learning view problem Now I
            am learning view problem Now I am learning view problem
          </Text>
        </View>
      </View>
      <TextInput defaultValue="write here something" />
      <View>
        <ActivityIndicator size="large" color="blue" />
      </View>

      <BottomNav />
      <View>
        <Button
          title="press here"
          onPress={() => Alert.alert(" button pressed")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  topInput: {
    height: 40,
    marginLeft: 10,
  },
});
