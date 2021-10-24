import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';


import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';
import AssinaturasService from '../../services/assinatura.service';

export function SignIn() {
    const [btnActive, setbtnActive] = useState(true);
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home', {
            onGoBack: () => findAllAssinatura(),
        });
    }

    const findAllAssinatura = () => {
        AssinaturasService.findAll()
            .then((response: any) => {
                console.log('test');
                if (response.length > 0) {
                    setbtnActive(false)
                }
            }), (error) => {
                console.log(error);
            }
    }

    useEffect(() => {
        findAllAssinatura()
    })

    return (

        <View style={styles.container}>
            <Text style={styles.title}>
                Configurações
            </Text>
            <View style={styles.buttonContainer}>
                <ButtonIcon
                    title="Faça upgrade agora "
                    onPress={handleSignIn}
                    enabled={btnActive}
                    normalColor={btnActive}
                />
            </View>
        </View>
    );
}