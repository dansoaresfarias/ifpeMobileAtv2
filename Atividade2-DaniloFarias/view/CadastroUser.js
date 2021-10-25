import React from "react"
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Image,
  Button,
} from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export const CadastroUser = () => {
    const navigation = useNavigation(); 
    return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Nome</FormControl.Label>
          <Input type="text" placeholder=""/>
          <FormControl.Label>CPF</FormControl.Label>
          <Input type="number" placeholder=""/>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input type="email" placeholder="" />
          <FormControl.Label>Senha</FormControl.Label>
          <Input type="password" placeholder="" />
          <FormControl.HelperText>
            Sua senha deve conter 6 caracteres.
          </FormControl.HelperText>
          <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => navigation.navigate('Login')}>Salvar</Button>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CadastroUser />
      </Center>
    </NativeBaseProvider>
  )
}