import { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '0.5em',
    fontSize: '10pt',
    fontWeight: 700,
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: '8pt',
    },
    md: {
      fontSize: '10pt',
    },
  },
  variants: {
    solid: {
      color: 'white',
      bg: 'buttonClr.100',
      _hover: {
        // bg: 'buttonClr.200',
        color: 'black',
        transform: 'scale(1.1)',
      },
    },
    outline: {
      color: 'buttonClr.100',
      border: '1px solid',
      borderColor: 'buttonClr.100',
      _hover: {
        bg: 'none',
        transform: 'scale(1.1)',
      },
    },
  },
}
