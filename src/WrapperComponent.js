import * as React from "react";
import {View, StyleSheet} from "react-native"
import Siblings from "./Siblings";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

function WrapperComponent(props) {
    return (
        <View style={styles.container}>
            {props.children}
            <Siblings/>
        </View>
    );
}

export default React.memo(WrapperComponent);