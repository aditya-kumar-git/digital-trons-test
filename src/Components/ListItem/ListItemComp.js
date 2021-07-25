import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ListItemComp(props) {
    const {  data, navigtion } = props
    let listData= data.item


    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate("Detail",{selectedTime:listData.time})
            }}
            style={{ backgroundColor: listData.FirstName.length > 0?'red':'pink', margin: 20, padding: 15 }}
        >
            <Text>{listData.time}</Text>
        </TouchableOpacity>
    )
}
