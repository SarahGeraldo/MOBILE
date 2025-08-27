import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
// import reanimated
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate
} from 'react-native-reanimated';
// import axios
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("screen");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 1.76;
const spacing = 12;

function Photo({ item, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(scrollX.value, [index - 1, index, index + 1], [1.6, 1, 1.6]) },
        { rotate: `${interpolate(scrollX.value, [index - 1, index, index + 1], [15, 1, -15])}deg` }
      ]
    }
  })
  return (
    <View style={{ width: imageWidth, height: imageHeight, overflow: 'hidden', borderRadius: 20 }}>
      <Animated.Image source={{ uri: item.Poster }} style={[{ flex: 1 }, stylez]} />
    </View>
  )
}

function BackdropPhoto({ photo, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollX.value, [index - 1, index, index + 1], [0, 1, 0])
    }
  })
  return (
    <Animated.Image source={{ uri: photo.Poster }} style={[StyleSheet.absoluteFillObject, stylez]} />
  )
}

export default function App() {
  const [data, setData] = useState([]);
  const Navigation = useNavigation();

  /* useSharedValue => Reativo as animações, quando o nosso scrollX.value for alterado
  todas as animações serão alteradas. */
  const scrollX = useSharedValue(0);

  /* useAnimatedScrollHandler => Hook do reanimated, que serve para "escutar"
  o evento de rolagem (onScroll) da nossa lista */
  const onScroll = useAnimatedScrollHandler((e) => {
    // e.contentOffset.x => Distância em pixels que a lista já foi rolada na horizontal
    // scrollX.value = 320 / (300 + 20)
    // scrollX.value = 0
    // scrollX.value = 1
    // scrollX.value = 2
    scrollX.value = e.contentOffset.x / (imageWidth + spacing);
    // "=" é sinal de atribuição
  })

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?s=Batman&page=2&apikey=b59c145c`,
      );
      setData(res.data.Search.slice(0, 10));
    } catch (error) {
      console.log("Erro ao buscar as imagens: ", error)
    }
  }

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Carregando ...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* "absoluteFillObject" resume => position: absolute, bottom: 0, top: 0, left: 0, right: 0 */}
      <View style={StyleSheet.absoluteFillObject}>
        {/* ESTRUTURA DA IMAGEM DE FUNDO */}
        {data.map((photo, index) => (
          <BackdropPhoto key={photo.imdbID} photo={photo} index={index} scrollX={scrollX} />
        ))}
      </View>

      <Animated.FlatList
        data={data}
        keyExtractor={(item) => String(item.imdbID)}
        horizontal
        // style={{ flexGrow: 0 }} ou alignItems: "center"
        snapToInterval={imageWidth + spacing}
        /* snapToInterval => faz com que a rolagem pare exatamente a cada
        intervalo especificado,nasta caso, o tamanho da imagem + o gap
        (spacing). */
        docelerationRate={"fast"}
        /* docelerationRate => controla a velocidade de desaceleração da
        nossa rolagem. */
        contentContainerStyle={{
          gap: spacing,
          paddingHorizontal: (width - imageWidth) / 2,
          alignItems: "center"
        }}
        /* contentContainerStyle => aplica estilo no conteúdo internodo
        nosso FlatList. */
        renderItem={({ item, index }) => <Photo item={item} index={index} scrollX={scrollX} />}
        onScroll={onScroll}
        /* onScroll => função chamada enquanto "rolamos" nossa lista. */
        scrollEventThrottle={16}
        /* scrollEventThrottle => define a freqência que o evento onScroll é chamado (60FPS). */
        showsHorizontalScrollIndicator={false}
      /* showsHorizontalScrollIndicator => oculta a "barrinha" horizontalda nossa "rolagem". */
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
