import { StatusBar } from 'expo-status-bar';
// import VARIÁVEIS
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import STYLES
import { styles } from './source/assets/styles/StylesSheet';
// import ICON
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  {/* PREÇO EM RELAÇÃO A QUANTIDADE DE PRODUTOS --------------------- */ }
  const [quant, setQuant] = useState(1);
  const pricePerDrink = 8;
  const totalPrice = quant * pricePerDrink;

  const moreProduct = () => {
    setQuant(prevQuant => prevQuant + 1);
    console.log(totalPrice)
  }

  const lessProduct = () => {
    if (quant > 1) {
      setQuant(prevQuant => prevQuant - 1);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./source/assets/img/brilho.jpg")}
        style={{ width: "100%", height: "71%", resizeMode: "cover" }}>

        <TouchableOpacity style={{
          position: 'absolute',
          top: 40,
          left: 30,
          width: 48,
          height: 48,
          backgroundColor: "	#E0FFFF	",
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <AntDesign name="leftcircleo" size={35} color="black" />
        </TouchableOpacity>

      </ImageBackground>
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: "100%",
        height: "50%",
        backgroundColor: "#FFC0CB",
        borderTopEndRadius: 50
      }}>

        {/* VIEW PRINCIPAL--------------------- */}
        <View style={{ padding: 30 }}>
          <Text style={{ color: "#E0FFFF", fontSize: 25 }}>Fresh drinks</Text>
          <View style={{ width: "100%", marginTop: 10, gap: 20, flexDirection: "row" }}>

            {/* QUANTIDADE ---------------------------- */}
            <View style={{
              position: "absolute",
              right: 40,
              top: -130,
              backgroundColor: "#FFC0CB",
              width: 60,
              height: 110,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
              gap: 10
            }}>
              <TouchableOpacity style={{
                width: 20,
                height: 20,
                backgroundColor: "#E0FFFF",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center"
              }}
                onPress={moreProduct}>
                <Text style={{ color: "black" }}>+</Text>
              </TouchableOpacity>
              <Text style={{ color: "black" }}>{quant}</Text>
              <TouchableOpacity style={{
                width: 20,
                height: 20,
                backgroundColor: "#E0FFFF",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center"
              }}
                onPress={lessProduct}>
                <Text style={{ color: "black" }}>-</Text>
              </TouchableOpacity>
            </View>

            {/* TEXTO ---------------------------- */}
            <View style={{
              width: 90,
              padding: 10,
              borderWidth: 1,
              borderColor: "#E0FFFF",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ color: "#E0FFFF", fontSize: 18 }}>30%</Text>
              <Text style={{ color: "#000", fontSize: 18 }}>Lemon</Text>
            </View>

            {/* TEXTO ---------------------------- */}
            <View style={{
              width: 92,
              padding: 10,
              borderWidth: 1,
              borderColor: "#E0FFFF",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ color: "#E0FFFF", fontSize: 18 }}>30%</Text>
              <Text style={{ color: "#000", fontSize: 18 }}>Guaraná</Text>
            </View>

            {/* TEXTO ---------------------------- */}
            <View style={{
              width: 90,
              padding: 10,
              borderWidth: 1,
              borderColor: "#E0FFFF",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ color: "#E0FFFF", fontSize: 18 }}>30%</Text>
              <Text style={{ color: "#000", fontSize: 18 }}>Cherry</Text>
            </View>

          </View>

          {/* PREÇO ---------------------------- */}
          <View style={{
            width: "100%",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 20,
          }}>
            <View style={{ width: "40%", backgroundColor: "#13132a", padding: 15, borderRadius: 10 }}>
              <Text style={{ color: "#E0FFFF", fontSize: 15, }}>$8 Price</Text>
            </View>
            <View style={{ width: "40%", backgroundColor: "#13132a", padding: 15, borderRadius: 10 }}>
              <Text style={{ color: "#E0FFFF", fontSize: 15, }}>${totalPrice} <Text style={{ color: "#E0FFFF" }}>Total price</Text> </Text>
            </View>
          </View>
        </View>

        {/* --------------------- */}
        <View style={{ flex: 1, backgroundColor: "#FFC0CB" }}>
          <Text style={{ color: "#black", fontSize: 18, marginTop: 20 }}>Total order</Text>

          <View style={{ width: "100%", paddingTop: 20, flexDirection: 'row', gap: 20, justifyContent: "space-evenly" }}>
            <View style={{ alignItems: "center", width: 90, height: 50, justifyContent: "flex-end" }}>
              <Entypo name='drink' size={24} color="#E0FFFF" />
              <Text style={{ color: "#000", fontSize: 19 }}>Bag</Text>
            </View>

            <View style={{ alignItems: "center", width: 90, height: 50, justifyContent: "flex-end" }}>
              {/* <Text style={{ color: "#E0FFFF", fontSize: 20 }}>$</Text>
              <Text style={{ color: "black", fontSize: 19, }}>Total price</Text> */}
            </View>
          </View>

          <View style={{
            position: "absolute",
            right: 60,
            top: -60,
            backgroundColor: "#E0FFFF",
            width: 60,
            height: 110,
            justifyContent: "center",
            alignItems: "flex-end",
            padding: 10,
            borderRadius: 10,
            gap: 10
          }}>
            <AntDesign name="creditcard" size={24} color="#E0FFFF" />
            <Text style={{ color: "black", fontSize: 19 }}>Mastercard</Text>
            <Text style={{ color: "black", fontSize: 19, }}>Pay</Text>
          </View>
        </View>
        {/* --------------------- */}
      </View>
    </View >
  );
}
