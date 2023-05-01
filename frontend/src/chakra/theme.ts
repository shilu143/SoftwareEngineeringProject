// // 1. import `extendTheme` function
// import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// const theme = extendTheme({
//   config: {
//     initialColorMode: 'dark' as const, // or "light" or "system"
//     useSystemColorMode: false,
//   },
//   colors: {
//     brand: {
//       900: '#1a365d',
//       800: '#153e75',
//       700: '#2a69ac',
//     },
//     back: {
//       100: '#181818',
//     },
//     nav: {
//       100: '#101010',
//     },
//     palette: {
//       100: '#d29ead',
//       200: '#45b77b',
//       300: '#171717',
//       400: '#736e6d',
//       500: '#3d805e',
//       600: '#474545',
//       700: '#80549e',
//       800: '#35156a',
//       900: '#94543c',
//     },
//   },
// })

// export default theme

import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { Button } from '../chakra/button'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  back: {
    100: '#181818',
  },
  nav: {
    100: '#101010',
  },
  palette: {
    100: '#d29ead',
    200: '#45b77b',
    300: '#171717',
    400: '#736e6d',
    500: '#3d805e',
    600: '#474545',
    700: '#80549e',
    800: '#35156a',
    900: '#94543c',
  },

  buttonClr: {
    100: '#45b77b',
    200: '#379262',
  },
}

const styles = {
  global: {
    '::-webkit-scrollbar': {
      width: '6px',
    },
    '::-webkit-scrollbar-track': {
      width: '6px',
      backgroundColor: 'black',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray.500',
      borderRadius: '3px',
    },
  },
}

const components = {
  Button,
}

const theme = extendTheme({ config, colors, components, styles })

export default theme
