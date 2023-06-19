import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import Button from '../UI/Button';

const Register = ({navigation}) => {
  const [nom, setNom] = useState('Nom');
  const [prenom, setPrenom] = useState('Prénom');
  const [pseudo, setPseudo] = useState("Nom d'utilisateur");
  const [email, setEmail] = useState('Adresse e-mail');
  const [phone, setPhone] = useState('N° de Tel');

  return (
    <View>
      <ImageBackground
        style={[styles.backgroundImage]}
        source={require('../../../assets/images/Logo.png')}>
        <SafeAreaView style={styles.screenContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setNom}
            value={nom}
            placeholder="Nom"
            keyboardType="name-phone-pad"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPrenom}
            value={prenom}
            placeholder="Prénom"
            keyboardType="name-phone-pad"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPseudo}
            value={pseudo}
            placeholder="Nom d'utilisateur"
            keyboardType="name-phone-pad"
          />

          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Adresse e-mail"
            keyboardType="name-phone-pad"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder="N° de Tel"
            keyboardType="numeric"
          />

          <Button
            text="Suivant"
            color="orange"
            onPress={() => navigation.navigate('Genre')}
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

export default Register;

// import {View, Text, ImageBackground} from 'react-native';
// import React, {useState} from 'react';
// import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
// import Button from '../UI/Button';

// const Register = ({value, setValue, navigation}) => {
//   const [nom, setNom] = useState('Nom');
//   const [prenom, setPrenom] = useState('Prénom');
//   const [pseudo, setPseudo] = useState("Nom d'utilisateur");
//   const [email, setEmail] = useState('Adresse e-mail');
//   const [phone, setPhone] = useState('N° de Tel');
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
//             setValue={setNom}
//             placeholder="Nom"
//             keyboardType="name-phone-pad"
//           />
//           <TextInput
//             style={styles.input}
//             onChangeText={setValue}
//             value={value}
//             setValue={setPrenom}
//             placeholder="Prénom"
//             keyboardType="name-phone-pad"
//           />

//           <TextInput
//             style={styles.input}
//             onChangeText={setValue}
//             value={value}
//             setValue={setPseudo}
//             placeholder="Nom d'utilisateur"
//             keyboardType="name-phone-pad"
//           />

//           <TextInput
//             style={styles.input}
//             onChangeText={setValue}
//             value={value}
//             setValue={setEmail}
//             placeholder="Adresse e-mail"
//             keyboardType="name-phone-pad"
//           />

//           {/* <TextInput
//               style={styles.input}
//               onChangeText={setValue}
//               value={value}
//               setValue={setPassword}
//               placeholder="Mot de passe"
//               keyboardType="name-phone-pad"
//               secureTextEntry={true}
//           /> */}

//           <TextInput
//             style={styles.input}
//             onChangeText={setValue}
//             value={value}
//             setValue={setPhone}
//             placeholder="N° de Tel"
//             keyboardType="numeric"
//           />
//           <Button
//             text="Suivant"
//             color="orange"
//             onPress={() => navigation.navigate('Genre')}
//           />
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
//     // style={[{flex: 1, top: 100, textAlign: 'center', color: 'white'}]}
//   },

//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
// });

// export default Register;
