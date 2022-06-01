import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ECAE6",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: '100%',
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff"
  },
  button: {
    padding: 20,
  },
  imageFooter: {
    width: 63,
    height: 63
  },
  ImageBackground: {
    width: 200,
    height: 200,
    opacity: 0.80
  },
  text: {
    fontSize: 20
  },
  flatList:{
    flex: 1,
    width: 10,
    height: 10,
    backgroundColor: "#fff"
  }
});

export default styles;