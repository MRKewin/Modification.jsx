import {View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../UI/Button';

const Bienvenue = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.image}
        source={require('../../../assets/images/Bienvenue.png')}>
        <View style={Styles.input}>
          <Button
            text="Commencer"
            color="gray"
            onPress={() => navigation.navigate('Projet')}
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
    top: 600,
    borderRadius: 5,
  },
});

export default Bienvenue;

// import { View, Text, ImageBackground, StyleSheet } from 'react-native'
// import React from 'react'
// import Button from '../UI/Button';

// const Bienvenue = ({navigation}) => {
//   return (
//     <View style={Styles.container}>
//       <ImageBackground
//         style={Styles.image}
//         source={require('../../../assets/images/Bienvenue.png')}>
//            <View style={Styles.input}>
//           <Button text="Commencer" color="gray" onPress={() => navigation.navigate('Projet')}/>
//           </View>
//             </ImageBackground>
//     </View>
//   )
// }

// const Styles = StyleSheet.create({
//     container: {
//       width: '100%',
//       height: '100%',
//       alignSelf: 'center',
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       alignSelf: 'center',
//     },
//     input: {
//       padding: 10,
//       justifyContent: 'center',
//       top: 600,
//       borderRadius: 5,
//     },
// });

// export default Bienvenue
