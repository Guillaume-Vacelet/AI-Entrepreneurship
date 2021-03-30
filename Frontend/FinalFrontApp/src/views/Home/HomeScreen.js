import React from 'react';
import { SafeAreaView, View, StatusBar, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({navigation}) {
  let base_images_path = '../../../assets/categories_images/';
  
  const [items, setItems] = React.useState([
    { label: 'Fruits', path: '', image: require(base_images_path + 'fruits_image.jpg') },
    { label: 'Legumes', path: '', image: require(base_images_path + 'vegetables_image.jpg') },
    { label: 'Boissons', path: '', image: require(base_images_path + 'drinks_image.jpg') },
    { label: 'Viandes', path: '', image: require(base_images_path + 'meats_image.jpg') },
  ]);

  function onPressItem(item) {
    // navigation.navigate(item.label.toLowerCase())
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
      </View>

      <View style={styles.bodyContainer}>
        <FlatGrid itemDimension={130} data={items} style={styles.gridView} spacing={10}
          // staticDimension={300} 
          // fixed
          renderItem={({ item }) => (
            <Pressable onPress={() => onPressItem(item)} style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#686868'
                  : 'white'
              },
              styles.wrapperCustom
            ]}>
              <View style={styles.itemContainer}>
                <ImageBackground style={styles.itemImage} imageStyle={{ borderRadius: 10, opacity: 0.8}} source={item.image}>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                </ImageBackground>
              </View>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  bodyContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: 'flex-start',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    // borderRadius: 10,
    // padding: 10,
    height: 150,
  },
  itemImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    padding: 10,
  },
  itemLabel: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
  },
  wrapperCustom: {
    borderRadius: 10,
  },
});