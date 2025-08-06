import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { removeItem } from '../components/AsyncStorage';

const { width, height } = Dimensions.get("window")

export default function HomeScreen() {
  const navigation = useNavigation()

  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('OnBoarding')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <LottieView source={require("../assents/images/confeti.json")} autoPlay loop style={styles.lottieView} />
      </View>
      <Text style={styles.txt}>Home page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Go</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(251, 49, 150)',
    alignItems: 'center',
  },

  lottie: {
    width: width * 0.9,
    height: width
  },

  lottieView: {
    width: "100%",
    height: "100%"
  },

  txt: {
    fontSize: width * 0.09,
    marginBottom: 10
  },

  resetButton: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 10
  }
});
