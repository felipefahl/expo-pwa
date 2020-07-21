import React, { useState, useEffect } from "react"
import { View, FlatList, Image, Text, StyleSheet } from "react-native"

interface Member{
    login: string;
    avatar_url: string;
}

const Main: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/members').then(response =>{
            response.json().then(data => {
                setMembers(data);
            })
        })
    }, []);

    return (
        <FlatList 
            contentContainerStyle = {{padding: 24}}
            data={members}
            keyExtractor={member => member.login}
            renderItem={({item:member}) => (
                <View style={styles.member}>
                    <Image source={{ uri: member.avatar_url}} style={styles.image}></Image>
                    <Text>{member.login}</Text>
                </View>
            )}
        >

        </FlatList>
    );
}


const styles = StyleSheet.create({
    member:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },

    image:{
        width: 48,
        height: 48,
        marginRight: 16,
        borderRadius: 24,
    }
});

export default Main;

