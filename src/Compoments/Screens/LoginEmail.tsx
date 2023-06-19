import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Button from '../UI/Button';

export const LoginEmail = ({navigation}) => {
  const [email, setEmail] = useState('Adresse e-mail');
  const [password, setPassword] = useState('Mot de passe');

  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/Logo.png')}>
        <SafeAreaView style={styles.screenContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Adresse e-mail"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Mot de passe"
            keyboardType="default"
            secureTextEntry={true}
          />

          <Button
            text="Connexion"
            color="green"
            onPress={() => navigation.navigate('Projet')}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

// import {
//   View,
//   SafeAreaView,
//   TextInput,
//   StyleSheet,
//   ImageBackground,
// } from 'react-native';
// import React, {useState} from 'react';
// import Button from '../UI/Button';

// export const LoginEmail = ({value, setValue, navigation}) => {
//   const [email, setEmail] = useState('Adresse e-mail');
//   const [password, setPassword] = useState('Mot de passe');
//   return (
//     <View>
//       <ImageBackground
//         style={[{width: '100%', height: '100%', alignSelf: 'center'}]}
//         source={require('../../../assets/images/Logo.png')}>
//         <SafeAreaView style={styles.screenContainer}>
//           <TextInput
//             style={styles.input}
//             onChangeText={setValue}
//             value={value}
//             setValue={setEmail}
//             placeholder="Adresse e-mail"
//             keyboardType="name-phone-pad"
//           />

//           <TextInput
//             style={styles.input}
//             onChangeText={setValue}
//             value={value}
//             setValue={setPassword}
//             placeholder="Mot de passe"
//             keyboardType="name-phone-pad"
//             secureTextEntry={true}
//           />
//           <Button text='Connexion' color="green" onPress={() => navigation.navigate('Projet')}/>
//           {/* <Button
//             onPress={() => navigation.navigate('Projet')}
//             title="Connexion"
//             accessibilityLabel="Connexion"
//             style={{ width: 200 }}
//           /> */}
//         </SafeAreaView>
//       </ImageBackground>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 5,
//   },

//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   btn: {},
// });
