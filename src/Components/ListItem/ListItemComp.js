import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ListItemComp(props) {

    const {  data, navigtion } = props

    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate("Detail",{selectedTime:data.item.time})
            }}
            style={{ backgroundColor: 'pink', margin: 20, padding: 15 }}
        >
            <Text>{data.item.time}</Text>
        </TouchableOpacity>
    )
}
