import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: "#8ECAE6",
    alignItems: "center",
    justifyContent: "center"
  },
  containerList: {
    flex: 1,
    backgroundColor: "#8ECAE6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100
  },
  footer: {
    width: '100%',
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    elevation: 10
  },
  imageFooter: {
    width: 63,
    height: 63,
  },
  ImageBackground: {
    width: 200,
    height: 200,
    opacity: 0.80
  },
  text: {
    fontSize: 20
  },
  list:{
    width: 320,
    height: 120,
    backgroundColor: "#fff",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    elevation: 5
  }
});

export default styles;