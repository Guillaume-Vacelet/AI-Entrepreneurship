import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Overlay, Button } from 'react-native-elements';

export default function HelpTips() {
  const [overlayVisibility, setOverlayVisibility] = React.useState(false);

  const toggleOverlay = () => {
    setOverlayVisibility(!overlayVisibility);
  };

  return (
    <View style={styles.helpTipsButton}>
      <Icon
        name='question-circle'
        type='font-awesome'
        color='#fb8500'
        onPress={() => toggleOverlay()}
        size={35}
      />
      <Overlay isVisible={overlayVisibility} onBackdropPress={toggleOverlay} overlayStyle={{width: 300, padding: 20}}>
        <View style={styles.modalHeader}>
          <Icon name='question-circle' type='font-awesome' color='black' />
          <Text style={styles.modalTitle}>Aide</Text>
        </View>

        <View style={styles.modalTip}>
          <Text style={styles.tipText}>
            Appuyer longuement sur un élément pour entrer/sortir en mode édition.
            En mode édition, vous pouvez :
          </Text>
        </View>

        <View style={styles.modalTip}>
          <Icon name='edit' type='font-awesome-5' color='black' />
          <Text style={styles.tipText}>Modifier le titre de l'élément</Text>
        </View>

        <View style={styles.modalTip}>
          <Icon name='times-circle' type='font-awesome-5' color='black' />
          <Text style={styles.tipText}>Supprimer l'élément</Text>
        </View>
        
        <Button 
          title="Ok" 
          onPress={toggleOverlay}
          buttonStyle={{
            width: 50, 
            alignSelf: 'center', 
            marginTop: 20
          }} 
        />
      </Overlay>

    </View>
  );
}

const styles = StyleSheet.create({
  helpTipsButton: {
    alignSelf: 'center',
    // marginLeft: 'auto'
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    // alignSelf: 'center',
    marginLeft: 10
  },
  modalTip: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  tipText: {
    marginLeft: 10,
    marginRight: 10
  }
});