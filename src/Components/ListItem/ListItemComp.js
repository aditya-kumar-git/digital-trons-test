import React, { useState } from 'react'
import { useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './ListItemStyle'

export default function ListItemComp(props) {
    const { data, navigation } = props
    let listData = data.item

    const [bookedORnot, setBookedORnot] = useState(false)
    useEffect(() => {

        if (listData.FirstName.length > 0 && listData.LastName.length > 0 && listData.PhoneNumber.length > 0) {
            setBookedORnot(true)
        }
    }, [data])


    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Detail", { selectedTime: listData.time })
            }}
            style={bookedORnot ? styles.BlockContainerSelected : styles.BlockContainer}
            activeOpacity={0.7}
        >
            <Text style={styles.BlockTitle}>{listData.time}</Text>
            <Text style={styles.BlockSubText}>{
                bookedORnot ? 'Booked Already' : 'Book Your Slot'
            }</Text>
        </TouchableOpacity>
    )
}
