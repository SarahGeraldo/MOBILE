import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setItem } from '../components/AsyncStorage';


const { width, height } = Dimensions.get("window")
export default function OnBoardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    setItem('onboarded', '1')
    navigation.navigate("Home");
  }

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[{
          backgroundColor: "yellow",
          image: (
            <View style={styles.lottie}>
              <LottieView
                source={require("../assents/images/cat.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }} />
            </View>),
          title: "Welcome to the app!!"
        },

        {
          backgroundColor: "blue",
          image: (
            <View style={styles.lottie}>
              <LottieView
                source={require("../assents/images/cat.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }} />
            </View>),
          title: "Drag to the next page!!"
        },

        {
          backgroundColor: "orange",
          image: (
            <View style={styles.lottie}>
              <LottieView
                source={require("../assents/images/cat.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }} />
            </View>),
          title: "I hope you enjoyed the app!!"
        }

        ]}


      />


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(251, 49, 150)',
  },

  lottie: {
    width: width * 0.9,
    height: width
  },

  doneButton: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: "100%",
    borderBottomLeftRadius: "100%"
  }
});
