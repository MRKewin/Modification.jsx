import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../UI/Button';

const Status = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/Logo.png')}>
        <View style={styles.screenContainer}>
          <Text style={styles.textStyle}>Vous êtes</Text>

          <Button
            text="Visiteur"
            color="blue"
            onPress={() => navigation.navigate('Register')}
          />
          <Button
            text="Créateur"
            color="grey"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Status;

// import {View, Text, ImageBackground, StyleSheet} from 'react-native';
// import React from 'react';
// import Button from '../UI/Button';

// const Status = ({navigation}) => {
//   return (
//     <View>
//       <ImageBackground
//         style={[{width: '100%', height: '100%', alignSelf: 'center'}]}
//         source={require('../../../assets/images/Logo.png')}>
//         <View style={styles.screenContainer}>
//           <Text style={styles.TextStyle}>Vous êtes</Text>

//           <Button
//             text="Visiteur"
//             color="blue"
//             onPress={() => navigation.navigate('Register')}
//           />
//           <Button
//             text="Créateur"
//             color="grey"
//             onPress={() => navigation.navigate('Register')}
//           />
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   TextStyle: {
//     textAlign: 'center',
//     color: 'white',
//   },

//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 5,
//   },
// });

// export default Status;

// // alignSelf= positionner le contenaire
