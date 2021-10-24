import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    Text,
    Image,
    View,
} from 'react-native';

import RefreshImg from '../../assets/refreshicon.png';
import { styles } from './styles'

type Props = RectButtonProps & {
    title: string;
    normalColor: boolean;
}

export function ButtonIcon({ title, normalColor, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={RefreshImg} style={styles.icon} />
            </View>

            <Text style={normalColor ? styles.title : styles.disabledTitle}>
                {title}
            </Text>
        </RectButton>
    )
}