import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import Button from '../UI/Button';

export const Consentement = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/Logo.png')}>
        <Text style={styles.text}>
          En créant un compte, vous acceptez nos conditions d'utilisation, notre
          politique en matière de cookies. Ces deux dernières politiques
          décrivent comment nous utilisons vos données pour proposer, améliorer
          et faire la promotion de nos services et de notre site, ainsi que les
          droits dont vous disposez pour contrôler cette utilisation et comment
          les exercer.
        </Text>
        <View style={styles.input}>
          <Button
            text="J'accepte"
            color="blue"
            onPress={() => navigation.navigate('Status')}
          />
          <Button
            text="Je refuse"
            color="red"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    top: 300,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
  },
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
});

// import React from 'react';
// import {Text, View, ImageBackground, StyleSheet} from 'react-native';
// import Button from '../UI/Button';

// export const Consentement = ({navigation}) => {
//   return (
//     <View style={Styles.container}>
//       <ImageBackground
//         style={Styles.image}
//         source={require('../../../assets/images/Logo.png')}>
//         <Text style={Styles.text}>
//           En créant un compte, vous accepter nous conditions d'utilisations,
//           notre politique en matière de cookies. Ces deux dernières politiques
//           décrivent comment nous utilisons vos données pour proposer, améliorer
//           et faire la promotion de nos services et notre site, ainsi que les
//           droits dont vous disposez pour contrôler cette utilisation et comment
//           les excercer.
//         </Text>
//         <View style={Styles.input}>

//         <Button text="J'accepte" color="blue" onPress={() => navigation.navigate('Status')}/>
//         <Button text='Je refuse' color="red" onPress={() => navigation.navigate('Login')}/>
//           {/* <Button
//             // style={[{alignSelf: 'center'}]}
//             onPress={() => navigation.navigate('Status')}
//             title="J'accepte"
//             accessibilityLabel="J'accepte"
//           />

//           <Button
//             // style={[{alignSelf: 'center'}]}
//             onPress={() => navigation.navigate('Login')}
//             title="Je refuse"
//             accessibilityLabel="Je refuse"
//           /> */}
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const Styles = StyleSheet.create({
//   text: {
//     top: 300,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     color: 'white',

//   },
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
//     borderRadius: 5
//   },
// });
