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

export const Login = () => {
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
          <Center>
          <Image
            source={{
              uri: "https://i.ibb.co/3pVR8KH/hock.png",
                    }}
               alt="Alternate Text"
              size="lg"
          />
          <Text bold fontSize="xl" mb="5">
            Plataforma Hock
          </Text>
          </Center>
          <FormControl.Label>Login</FormControl.Label>
          <Input type="text" placeholder="insira seu login" />
          <FormControl.Label>Senha</FormControl.Label>
          <Input type="password" placeholder="insira sua senha" />
          <FormControl.HelperText>
            Sua senha deve conter 6 caracteres.
          </FormControl.HelperText>
          <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => navigation.navigate('ListarContato')}>LOGIN</Button>
          <Button colorScheme="danger" marginTop ="5px" onPress={() => navigation.navigate('CadastroUser')}>CADASTRE-SE</Button>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Senha incorreta.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Login />
      </Center>
    </NativeBaseProvider>
  )
}