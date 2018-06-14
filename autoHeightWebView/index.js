import { Platform } from "react-native";
import AutoHeightWebViewIos from "./index.ios.js";
import AutoHeightWebViewAndroid from "./index.android.js";

const AutoHeightWebView = Platform.OS === "ios"
  ? AutoHeightWebViewIos
  : AutoHeightWebViewAndroid;

export default AutoHeightWebView;
