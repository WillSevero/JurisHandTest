import React from 'react';
import { View, Text, Image } from 'react-native';
import { ButtonBack } from '../../components/ButtonBack';
import { ButtonClose } from '../../components/ButtonClose';
import { styles } from './styles';
import JobsImg from '../../assets/jobs.png'
import { ButtonSign } from '../../components/ButtonSign';
import { useNavigation } from '@react-navigation/native';
import { Assinatura } from '../../models/assinatura.model';
import AssinaturasService from '../../services/assinatura.service';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'

import { signApp } from '../../store/storeAcoes';
import { useDispatch, useSelector } from 'react-redux';

export function Home() {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  function handleBack(dis: boolean = false) {
    navigation.navigate('SignIn', { dis });
  }

  function handleSign() {
    console.log('insert');

    let file: Assinatura = new Assinatura()

    file.code = uuid()
    const insertId = AssinaturasService.addData(file);
    dispatch(signApp(file.code));
    if (insertId == null || insertId == undefined) {
      alert("Não foi possivel inserir nova assinatura")
    } else {
      handleBack()
    }
  }

  return (
    <View style={styles.container}>

      <ButtonBack onPress={handleBack} />

      <View style={styles.greybox} >

        <View style={styles.buttonContainer}>
          <ButtonClose onPress={handleBack} />
        </View>

        <Text style={styles.upgrade}>
          Faça upgrade no {"\n"}
          JurisHand e seja feliz.
        </Text>

        <Image source={JobsImg} style={styles.jobs} />

        <Text style={styles.sign}>
          Assine por R$ 299,90 por ano{"\n"}
          (R$ 24,90 por mês)
        </Text>

        <View style={styles.buttonsign}>
          <ButtonSign
            title='Assine agora'
            onPress={handleSign}
          />
        </View>

      </View>

      <Text style={styles.footer} >

        Você será cobrado imediatamente.{"\n"}
        Sem período trial.

      </Text>

    </View>
  )
}