import { StyleSheet } from "react-native";
import colors from "../common/colors";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    header: {
        height: "20%",

        justifyContent: "center",
        alignItems: "center",
    },
    headerLogo: {
        marginTop: 10,
        width: 75,
        height: 75,
    },
    headerTitle: {
        fontSize: 40,
        fontFamily: "SimplyDiet",
        marginVertical: 10,
    },
    mainIput: {
        height: "10%",

        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "90%",
        height: 40,
        paddingHorizontal: 10,

        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
    },
    iconFilter: {
        height: "50%",
        aspectRatio: 1,
        position: "absolute",
        right: 25,
        justifyContent: "center",
        alignItems: "center",
    },

    eraseFilter: {
        height: "50%",
        aspectRatio: 1,
        position: "absolute",
        right: 75,
        justifyContent: "center",
        alignItems: "center",
    },

    clearHistory: {
        backgroundColor: colors.secondary,
        justifyContent: "center",
        borderRadius: 10,
        width: '33%',
        marginVertical: 10
    },
    clearHistoryText: {
        textAlign: "center",
        color: 'white',
        fontSize: 18

    },

    main: {
        maxHeight: "63.5%",
    },

    //--------------------------

    modalFilter: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(0,0,0, 0.6)",
    },
    modalContainer: {
        width: "80%",

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "white",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    modalTextHeader: {
        width: "100%",

        textAlign: "center",

        fontSize: 50,

        fontFamily: "SimplyDiet",
    },
    exitModalButton: {
        width: 25,
        height: 25,

        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        top: 10,
        right: 20,
    },

    formContainer: {
        width: "100%",
        marginVertical: 5,

        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    formContainerItem: {
        alignItems: "center",
    },
    checkBox: {
        height: 25,
        width: 25,

        borderColor: colors.secondaryv2,
        borderWidth: 2,

        alignItems: "center",
        justifyContent: "center",
    },
    applyButton: {
        width: "80%",
        height: 35,
        marginVertical: 5,
        backgroundColor: colors.primary,

        alignItems: "center",
        justifyContent: "center",
    },
    applyButtonText: {
        color: "white",
        fontFamily: "SimplyDiet",

        fontSize: 24,
    },

    //Nothing found

    emptyContainer: {
        height: "70%",
        justifyContent: "center",
    },

    emptyText: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.secondaryv2
    },


});

export default styles;
