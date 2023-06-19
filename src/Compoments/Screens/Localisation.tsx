import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Button from '../UI/Button';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const Localisation = ({navigation}) => {
  const [location, setLocation] = useState<GeoPosition | false>(false);

  const getLocation = useCallback(() => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  }, [location]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <View>
      <ImageBackground
        style={Styles.image}
        source={require('../../../assets/images/Logo.png')}>
        <View style={Styles.input}>
          <Button
            text="Obtenir l'emplacement"
            onPress={getLocation}
            color="black"
          />
        </View>
        <Text style={Styles.text}>
          Latitude: {location ? location.coords?.latitude : null}
        </Text>
        <Text style={Styles.text}>
          Longitude: {location ? location.coords?.longitude : null}
        </Text>
        <View style={Styles.input}>
          <Button
            text="Refuser"
            color="black"
            onPress={() => navigation.navigate('Rcaptcha')}
          />
          <Button
            text="Suivant"
            color="blue"
            onPress={() => navigation.navigate('Rcaptcha')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const Styles = StyleSheet.create({
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
  text: {
    top: 300,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
  },
});

export default Localisation;

// import {View, Text, ImageBackground, StyleSheet, PermissionsAndroid} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import Button from '../UI/Button';
// import Geolocation from 'react-native-geolocation-service';

// // Function to get permission for location
// const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Geolocation Permission',
//           message: 'Can we access your location?',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       console.log('granted', granted);
//       if (granted === 'granted') {
//         console.log('You can use Geolocation');
//         return true;
//       } else {
//         console.log('You cannot use Geolocation');
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };

// const Localisation = ({navigation}) => {

// // state to hold location
// const [location, setLocation] = useState(false);
// // function to check permissions and get Location
// const getLocation = () => {
//   const result = requestLocationPermission();
//   result.then(res => {
//     console.log('res is:', res);
//     if (res) {
//       Geolocation.getCurrentPosition(
//         position => {
//           console.log(position);
//           setLocation(position);
//         },
//         error => {
//           // See error code charts below.
//           console.log(error.code, error.message);
//           setLocation(false);
//         },
//         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//       );
//     }
//   });
//   console.log(location);
// };

//   return (
//     <View>
//       <ImageBackground
//         style={Styles.image}
//         source={require('../../../assets/images/Logo.png')}>
//         <View style={Styles.input}>
//           <Button text="Obtenir l'emplacement" onPress={getLocation}  color="black" />
//         </View>
//         <Text style={Styles.text}>Latitude: {location ? location.coords.latitude : null}</Text>
//       <Text style={Styles.text}>Longitude: {location ? location.coords.longitude : null}</Text>
//       <View style={Styles.input}>
//           <Button text="Refuser" color="black" onPress={() => navigation.navigate('Rcaptcha')}/>
//           <Button text="Suivant" color="blue" onPress={() => navigation.navigate('Rcaptcha')}/>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const Styles = StyleSheet.create({
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
//   text: {
//     top: 300,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     color: 'white',

//   },
// });

// export default Localisation;
