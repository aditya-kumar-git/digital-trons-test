import React from 'react'
import { Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import ListItem from 'Components/ListItem'
import styles from './HomeStyle'

export default function HomeScreen(props) {
    const ListData = useSelector((state) => state.listData)

    return (
        <View style={styles.Container} >
            <StatusBar  barStyle={'light-content'}/>
            <SafeAreaView>
                <View style={{ height: 200 }}>
                </View>
            </SafeAreaView>
            <View style={styles.ListContainer} >
                <Text style={styles.Heading}>Time Slots</Text>

                <FlatList
                    data={ListData}
                    keyExtractor={(item, index) => {
                        return 'key-' + index
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
