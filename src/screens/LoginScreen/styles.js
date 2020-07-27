import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: '100%',
    height: '100%'
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 200,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#1354CC",
    width: '75%',
    marginTop: 30,
    height: 48,
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
});
