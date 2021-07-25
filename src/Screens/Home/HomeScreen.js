import React, { useEffect } from 'react'
import { Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './HomeStyle'
import { useState } from 'react'
import ListItem from 'Components/ListItem'
import MembersItem from 'Components/MembersItem'

export default function HomeScreen(props) {
    const [showMembers, setShowMembers] = useState([])
    const ListData = useSelector((state) => state.listData)

    useEffect(() => {
        let tempArr = ListData.filter((item) => item.FirstName.length > 0 && item.LastName.length > 0 && item.PhoneNumber.length > 0)
        setShowMembers(tempArr)
    }, [ListData])
    return (
        <View style={styles.Container} >
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView>
                {showMembers.length > 0
                    &&
                    <View style={styles.membersContainer}>
                        <Text style={styles.Heading}>Booked Slots</Text>
                        <FlatList
                            data={ListData}
                            keyExtractor={(item, index) => {
                                return 'MembersListKey-' + index
                            }}
                            renderItem={(item) => {
                                return <MembersItem data={item} navigation={props.navigation} />
                            }}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        />
                    </View>
                }
            </SafeAreaView>
            <View style={styles.ListContainer} >
                <Text style={styles.Heading}>Time Slots</Text>

                <FlatList
                    data={ListData}
                    keyExtractor={(item, index) => {
                        return 'MailListKey-' + index
                    }}
                    renderItem={(item) => {
                        return <ListItem data={item} navigation={props.navigation} />
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
