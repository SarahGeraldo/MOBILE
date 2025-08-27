import AsyncStorage from "@react-native-async-storage/async-storage";

// salva os dados na memória do celular
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
  }
}

// libera as memórias
export const getItem = async (key, value) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log(error)
  }
}

// exclui as memórias
export const removeItem = async (key, value) => {
  try {
    await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error)
  }
}
