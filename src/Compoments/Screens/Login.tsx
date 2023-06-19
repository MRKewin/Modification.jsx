import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Button from '../UI/Button';

// import Styles from '../../assets/style/Styles'; //Exemple pour le fichier style

// Page de connexion

export const Login = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/Logo.png')}>
        <View style={styles.input}>
          <Button
            text="Connexion Facebook"
            color="blue"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            text="Connexion Google"
            color="red"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            text="Connexion Apple"
            color="black"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            text="Connexion e-mail"
            color="black"
            onPress={() => navigation.navigate('LoginEmail')}
          />
          <Button
            text="Connexion Téléphone"
            color="black"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        <Text style={styles.text1}>Pas encore de compte ?</Text>

        <Text
          style={styles.text2}
          onPress={() => navigation.navigate('Consentement')}>
          Créer un compte
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  text1: {
    top: 300,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
  },
  text2: {
    top: 300,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    textDecorationLine: 'underline',
  },
  input: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    top: 300,
  },
});

// import React from 'react';

// import {View, Text, StyleSheet, ImageBackground} from 'react-native';
// import Button from '../UI/Button';

// // import Styles from '../../assets/style/Styles'; //Exemple pour le fichier style

// //Acceuil Screen

// export const Login = ({navigation}) => {
//   return (
//     <View>
//       <ImageBackground
//         style={styles.image}
//         source={require('../../../assets/images/Logo.png')}>
//         <View style={styles.input}>
//           <Button
//             text="Connexion Facebook"
//             color="blue"
//             onPress={() => navigation.navigate('')}
//           />
//           <Button
//             text="Connexion Google"
//             color="red"
//             onPress={() => navigation.navigate('')}
//           />
//           <Button
//             text="Connexion Apple"
//             color="black"
//             onPress={() => navigation.navigate('')}
//           />
//           <Button
//             text="Connexion e-mail"
//             color="black"
//             onPress={() => navigation.navigate('LoginEmail')}
//           />
//           <Button
//             text="Connexion Téléphone"
//             color="black"
//             onPress={() => navigation.navigate('')}
//           />
//         </View>
//         <Text style={styles.text1}>Pas encore de compte ?</Text>

//         <Text
//           style={styles.text2}
//           onPress={() => navigation.navigate('Consentement')}>
//           {' '}
//           Créer en un
//         </Text>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//     textAlign: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     alignSelf: 'center',
//   },
//   text1: {
//     top: 300,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     color: 'white',
//   },

//   text2: {
//     top: 300,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     color: 'white',
//     textDecorationLine: 'underline',
//   },
//   input: {
//     padding: 10,
//     borderRadius: 5,

//     justifyContent: 'center',
//     top: 300,
//   },
// });
