import { 
    Button
  } from '@chakra-ui/react'

  interface IButton {
    text: string,
    submit: () => void
}

export const DioButton = ({ text, submit }: IButton) => {
    return(
      <Button onClick={submit} value={text} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        {text}
      </Button>
    )
  }