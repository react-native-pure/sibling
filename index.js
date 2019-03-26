import {AppRegistry} from "react-native"
import WrapperComponent from "./src/WrapperComponent"
import Sibling from "./src/Sibling"

AppRegistry.setWrapperComponentProvider(() => WrapperComponent);

export default Sibling;
