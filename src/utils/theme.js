import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: 'dark',
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#2b2d42', '#2b2d42')(props)
            }
        })
    },

})

export default theme