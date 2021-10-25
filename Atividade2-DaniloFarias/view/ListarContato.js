import React from "react"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Button,
} from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


export const ListarContato = () => {
    const navigation = useNavigation(); 

  const contatos = [
    {
      id: "01",
      fullName: "Danilo Farias",
      recentText: "Analista de Sistemas",
      avatarUrl:
        "http://www.nutes.ufpe.br/forum/wp-content/themes/ample/img/danilo_farias.png,
    },
    {
      id: "02",
      fullName: "Bruno Pires",
      recentText: "Gerente de Projetos",
      avatarUrl:
        "http://www.nutes.ufpe.br/forum/wp-content/themes/ample/img/bruno_pires.png",
    },
    {
      id: "03",
      fullName: "Alexandre Luna",
      recentText: "Consultor de TI",
      avatarUrl: "http://www.nutes.ufpe.br/forum/wp-content/themes/ample/img/alexandre_luna.png",
    },
    {
      id: "04",
      fullName: "Fernando Sales",
      recentText: "Vice Coordenador do Núcleo",
      avatarUrl: "http://www.nutes.ufpe.br/forum/wp-content/themes/ample/img/fernando_sales.png",
    },
    {
      id: "05",
      fullName: "Magdala Novaes",
      recentText: "Coordenadora do Núcleo",
      avatarUrl: "http://www.nutes.ufpe.br/forum/wp-content/themes/ample/img/magdala_novaes.png",
    }
  ]
  return (
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" >
        Contatos
      </Heading>
      <FlatList
        contatos={contatos}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
            <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => navigation.navigate('CadastroContato')}>Adicionar</Button>

    </Box>
   
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex="1" >
        <ListarContato />
      </Center>
    </NativeBaseProvider>
  )
}