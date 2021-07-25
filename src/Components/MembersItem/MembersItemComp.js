import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './MembersItemStyle'

export default function MembersItemComp(props) {
    const [showData, setshowData] = useState(false)
    let emojis = ['😗','💂','👽','💩','🔥','✨','👀','🐸'];
    
    const { data, navigation } = props
    let listData = data.item

    let getRandomColor = () => {
        return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)'

    }

    useEffect(() => {

        if (listData.FirstName.length > 0 && listData.LastName.length > 0 && listData.PhoneNumber.length > 0) {
            setshowData(true)
        }
        else {
            setshowData(false)

        }
    }, [data])
    return (
        <View>
            {
                showData && <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate("Detail", { selectedTime: listData.time, isBooked: showData })
                }}
                    style={[styles.Block,{backgroundColor:getRandomColor()}]}
                >
                    <View
                    style={styles.BlockEmojiContainer}
                    >
                    <Text numberOfLines={1} style={styles.BlockEmoji}>{emojis[data.index]}</Text>
                        </View>
                    <Text numberOfLines={1} style={styles.BlockTitle} >{listData.FirstName}</Text>
                    <Text numberOfLines={1} style={styles.BlockSubText} >{listData.time}</Text>
                </TouchableOpacity>
            }

        </View>
    )
}
