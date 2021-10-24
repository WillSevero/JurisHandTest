import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    Image,
    View,
} from 'react-native';

import ReturnImg from '../../assets/return2.png';
import { styles } from './styles'

type Props = RectButtonProps


export function ButtonBack({ ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View>
                <Image source={ReturnImg} style={styles.icon} />
            </View>
        </RectButton>
    )
}