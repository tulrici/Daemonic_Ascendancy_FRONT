import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { View } from 'react-native-web';

export default function ArticleJambon(props) {

    const [timer, setTimer] = useState(0);
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      setVisible(!visible);
      };
    

    useEffect(() => {
      const interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, [timer]);


    return (

        <View>
            <Text>{props.description}</Text>
            <Image 
                source={{ uri: props.url }} 
                style={{ width: 200, height: 200 }} 
            />

            <Text>On observe ce magnifique Jambon depuis {timer} secondes</Text>

            <TouchableOpacity onPress={() => toggleVisible()}>
                <Text>Toggle Jambon ci-dessous &#x1F447;</Text>
            </TouchableOpacity>
                    {visible && <ArticleJambon />}


        </View>
    );  
}
