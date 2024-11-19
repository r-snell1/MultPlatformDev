import { StatusBar } from 'expo-status-bar';
import {FlatList, Text, View, Button} from 'react-native';
import React, {useRef} from "react";
import styles from "./styles";
import {DATA} from "./DATA";
import {BEVERAGES} from "./BEVERAGES";


export default function App() {
  const myRef = useRef(null);
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Text style={styles.outerText}>Flat List Beverages</Text>
      <Button
          title="Scroll to a random item"
          onPress={() => {
            const randomIndex = Math.floor(Math.random() * DATA.length);
            myRef.current.scrollToIndex({
              animated: true,
              index: randomIndex,
            });
          }}
      />
      <FlatList
          ref={myRef}
          getItemLayout={(data, index) => ({
            length: DATA.length,
            offset: DATA.length * index,
            index,
          })}
          keyExtractor={(item, index) => index.toString()}
          data={BEVERAGES}
          renderItem={(itemData) => {
            return (
                <View style={styles.listItem}>
                  <Text style={styles.innerText}>{itemData.item}</Text>
                </View>
            );
          }}
      />
    </View>
  );
}