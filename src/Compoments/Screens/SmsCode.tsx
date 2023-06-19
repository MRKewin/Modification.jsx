import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import Button from '../UI/Button';

const SmsCode = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.image}
        source={require('../../../assets/images/Logo.png')}>
        <View style={Styles.input}>
          <Text style={Styles.TextStyle}>Vérification</Text>
          <Text style={Styles.TextStyle}>
            Pour des raison de sécurité, Veuillez confimer votre compte avec
            l'aide du code qui vous a été envoyé par SMS au numéro suivant:
          </Text>
          <TextInput
            style={Styles.txinput}
            placeholder="Code de vérification"
            keyboardType="name-phone-pad"
          />
          <Text style={Styles.text2} onPress={() => navigation.navigate('')}>
            {' '}
            Renvoyer le code
          </Text>
          <Text style={Styles.text2} onPress={() => navigation.navigate('')}>
            {' '}
            Changer le numéro de téléphone
          </Text>
          <Button
            text="Suivant"
            color="black"
            onPress={() => navigation.navigate('Bienvenue')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  TextStyle: {
    textAlign: 'center',
    color: 'white',
  },
  input: {
    padding: 10,
    justifyContent: 'center',
    top: 300,
    borderRadius: 5,
  },
  txinput: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
  },
  text2: {
    top: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default SmsCode;
