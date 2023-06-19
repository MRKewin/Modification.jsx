import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Button from '../UI/Button';

const Picture = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/Logo.png')}>
        <View style={styles.input}>
          <Text style={styles.textStyle}>Ajouter une photo</Text>
          <Button
            text="Importer une image"
            color="black"
            onPress={() => navigation.navigate('')}
          />
          <Button
            text="Prendre une photo"
            color="black"
            onPress={() => navigation.navigate('Camera')}
          />
          <Button
            text="Meta (Facebook)"
            color="black"
            onPress={() => navigation.navigate('')}
          />
          <Button
            text="Suivant"
            color="grey"
            onPress={() => navigation.navigate('SmsCode')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
  textStyle: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Picture;

// import {View, Text, ImageBackground, StyleSheet} from 'react-native';
// import React from 'react';
// import Button from '../UI/Button';

// const Picture = ({navigation}) => {
//   return (
//     <View style={Styles.container}>
//       <ImageBackground
//         style={Styles.image}
//         source={require('../../../assets/images/Logo.png')}>
//         <View style={Styles.input}>
//         <Text style={Styles.TextStyle}>Ajouter une photo</Text>
//           <Button text="Importer une image" color="black" onPress={() => navigation.navigate('')} />
//           <Button text="Prendre une photo" color="black" onPress={() => navigation.navigate('Camera')} />
//           <Button text="Meta (Facebook)" color="black" onPress={() => navigation.navigate('')} />
//           <Button text="Suivant" color="grey" onPress={() => navigation.navigate('SmsCode')} />
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
//   TextStyle: {
//     textAlign: 'center',
//     color: 'white',
//   },
// });

// export default Picture;
