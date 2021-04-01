import React from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet, Pressable, Image, Text } from 'react-native';
import { Icon, ListItem, Header } from 'react-native-elements';

export default function Item(props, {navigation}) {
  let base_images_path = '../../assets/items_images/';

  function onPressItem(item) {
    console.log(item.label)
    // navigation.navigate(item.label.toLowerCase())
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Header
          leftComponent={
            <Icon
              raised 
              name='arrow-left' 
              type='font-awesome' 
              color='#fb8500' 
              onPress={() => navigation.goBack()} 
            />}
          centerComponent={<Text style={styles.headerTitle}>Fruits</Text>}
        />
      </View>

      <View style={styles.bodyContainer}>
        {
          items.map((item, i) => (
            <Pressable onPress={() => onPressItem(item)} style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#686868'
                  : 'white'
              },
              styles.wrapperCustom
            ]}>
              <ListItem key={i} bottomDivider>
                <Image style={styles.itemImage} source={item.image} />
                <ListItem.Content>
                  <ListItem.Title style={styles.itemLabel}>{item.label}</ListItem.Title>
                  {/* <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle> */}
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </Pressable>
          ))
        }
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
  headerTitle: {
    fontSize: 25,
    color: '#fb8500',
    fontWeight: '600',
  },
  itemImage: {
    width: 70,
    height: 55,
  },
  itemLabel: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
  wrapperCustom: {
  },
});