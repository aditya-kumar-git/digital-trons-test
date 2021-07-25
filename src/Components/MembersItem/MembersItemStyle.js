import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Block: {
        height: 160,
        width: 120,
        backgroundColor: '#F0F5FF',
        marginRight: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    BlockTitle: {
        fontSize: 15,
        fontWeight: '500'
    },
    BlockSubText: {
        fontSize: 12,
        fontWeight: '200',
        marginTop: 5
    },
    BlockEmoji: {
        fontSize: 30,
    },
    BlockEmojiContainer:{
        backgroundColor:'white',
        height: 60,
        width: 60,
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 5
    }
});
