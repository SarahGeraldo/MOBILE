import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4a23',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // LOGIN
  interno: {
    backgroundColor: '#ffb9aa',
    width: '90%',
    height: '70%',
    borderRadius: 1000,
    justifyContent: 'center',
    padding: 40,
    gap: 20
  },

  title: {
    fontSize: 40
  },

  input: {
    borderBottomWidth: 1
  },

  forget: {
    width: "100%",
    alignItems: "flex-end"
  },

  viewBtn: {
    width: '100%',
    alignItems: "center"
  },

  txtDObtn: {
    fontSize: 30
  },

  image: {
    width: "100%",
    height: "100%"
  },
});
