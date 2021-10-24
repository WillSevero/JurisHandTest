import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    Text,
    Image,
    View,
} from 'react-native';

import CloseImg from '../../assets/close.png';
import { styles } from './styles'

type Props = RectButtonProps


export function ButtonClose({ ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View>
                <Image source={CloseImg} style={styles.icon} />
            </View>


        </RectButton>
    )
}