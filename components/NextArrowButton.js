
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";

export default class NextArrowButton extends Component {
    render() {
        return (
            <View style={styles.buttonWrapper}>
                <TouchableHighlight style={[{ opacity: 1 }, styles.button]} onPress={this._login()}>
                    <Icon
                        name="angle-right"
                        color={{color: '#fff'}}
                        size={32}
                        style={styles.icon}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    buttonWrapper: {
        alignItems: "flex-end",
        right: 20,
        bottom: 20,
        paddingTop: 0
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: '#FBAF42'
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
        color: '#fff'
    }
});