import React from 'react';
import { View, FlatList } from 'react-native';

export default function List(props) {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={item => React.cloneElement(props.elementComponent, { data: item.item })}
        keyExtractor={item => item.id.toString()}
        numColumns={props.numColumns}
      />
    </View>
  );
}