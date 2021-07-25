import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#1F1F1F',
    },
    DataContainer: {
        backgroundColor: '#000',
        padding: 20,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        flex: 1,
    },
    InputStyles: {
        backgroundColor: '#181818',
        marginVertical: 20,
        borderRadius: 20,
        padding: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: '300',
    },
    BackButtonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    BackButton: {
        color: 'white',
        fontSize: 30,
        paddingLeft: 20,
        marginTop: 10,
        marginBottom: 30,
    },
    Heading: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    SaveButton: {
        backgroundColor: '#8ccfaf',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 30
    },
    SaveButtonText: {
        fontSize: 20,
        fontWeight: '300',
    },
    CancelButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    CancelButton: {
        backgroundColor: '#c40000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    CancelButtonText: {
        color: 'white',
        fontSize: 10
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    }

});
