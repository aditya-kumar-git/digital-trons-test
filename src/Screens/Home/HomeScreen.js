import React from 'react'
import { View,  FlatList, SafeAreaView, StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import ListItem from 'Components/ListItem'

export default function HomeScreen(props) {
    const ListData = useSelector((state) => state.listData)

    console.log(ListData);

    return (
        <View>
            <StatusBar
            barStyle={'dark-content'}
            />
            <SafeAreaView>

                <FlatList
                    data={ListData}
                    keyExtractor={(item, index) => {
                        return 'key-' + index
                    }}
                    renderItem={(item) => {
                        return <ListItem data={item}  navigation={props.navigation} />

                    }}
                />
            </SafeAreaView>
        </View>
    )
}
