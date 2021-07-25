import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';

export default function DetailScreen(props) {

    const [selectedState, setSelectedState] = useState({})
    useEffect(() => {
        let tempArr=ListData.filter(item => item.time === props.route.params.selectedTime)
        setSelectedState(tempArr[0])
    }, [ListData])
    
    const ListData = useSelector((state) => state.listData)
    return (
        <SafeAreaView>
            <Text>{selectedState.time}</Text>
        </SafeAreaView>
    )
}
