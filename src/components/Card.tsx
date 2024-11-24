import { Header } from "./Header"
import { Footer } from "./Footer"
import { login } from '../services/login'
import { DioButton } from './DioButton'

import { 
  Center,
  Input,
  Box,
} from '@chakra-ui/react'

export const Card = () => {
  return(
    <div>
      <Header />
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <DioButton text="Enviar" submit={login} />
          </Center>
        </Box>
      </Box>
      <Footer />
    </div>
  )
}