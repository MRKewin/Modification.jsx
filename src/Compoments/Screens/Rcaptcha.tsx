import {View, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import Button from '../UI/Button';

const Rcaptcha = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.image}
        source={require('../../../assets/images/Logo.png')}>
        <View style={Styles.input}>
          <TextInput
            style={Styles.txinput}
            placeholder="Nom"
            keyboardType="name-phone-pad"
          />
          {/* <RecaptchaV3 siteKey="6LcxXTImAAAAAP6xze4g-wRqW88PEy9HudSSkw1s" /> */}
          <Button
            text="Suivant"
            color="orange"
            onPress={() => navigation.navigate('Picture')}
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
});

export default Rcaptcha;

// import { View, Text, StyleSheet, ImageBackground } from 'react-native';
// import React from 'react';
// import { TextInput } from 'react-native-paper';
// import Button from '../UI/Button';

// const Rcaptcha = ({ navigation }) => {
//   return (
//     <View style={Styles.container}>
//       <ImageBackground
//         style={Styles.image}
//         source={require('../../../assets/images/Logo.png')}>
//         <View style={Styles.input}>
//           <TextInput style={Styles.txinput} placeholder="Nom" keyboardType="name-phone-pad" />
//           {/* <RecaptchaV3 siteKey="6LcxXTImAAAAAP6xze4g-wRqW88PEy9HudSSkw1s" /> */}
//           <Button text="Suivant" color="orange" onPress={() => navigation.navigate('Picture')} />
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const Styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     alignSelf: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     alignSelf: 'center',
//   },
//   input: {
//     padding: 10,
//     justifyContent: 'center',
//     top: 300,
//     borderRadius: 5,
//   },
//   txinput: {
//     height: 30,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     marginLeft: 35,
//     marginRight: 35
//   }
// });

// export default Rcaptcha;
