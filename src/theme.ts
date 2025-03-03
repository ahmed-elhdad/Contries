// import {extendTheme} from "@chakra-ui/react";

// const config                                                                            = {
//     initialColorMode : "dark",
//     useSystemColorMode : false,
// }
// const theme = extendTheme( { config } )
// export default theme
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}