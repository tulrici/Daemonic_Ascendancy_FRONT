import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { View } from 'react-native-web';

export default function ArticleJambon() {

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

            <TouchableOpacity onPress={() => toggleVisible()}>
                <Text>Créer un Jambon à regarder</Text>
            </TouchableOpacity>
                    {visible && <ArticleJambon />}

            <Image 
                source={{uri:'https://www.lamaisonfrancaise.com/776-large_default/jambon-de-porc-gascon-affine.jpg'}} 
                style={{ width: 200, height: 200 }} 
            />

            <Text>On observe ce magnifique Jambon depuis {timer} secondes</Text>

            <TouchableOpacity onPress={() => toggleVisible()}>
                <Text>Cesser de mater cet INSANE jambon</Text>
            </TouchableOpacity>


        </View>
    );  
}
