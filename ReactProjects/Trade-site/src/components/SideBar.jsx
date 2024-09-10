// import React from 'react'
import { Stack, HStack, Icon, Text, Heading, Box } from "@chakra-ui/react"
import { FaBookOpen } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";


const SideBar = () => {

  const navLinks = [
    {
      icon: FaBookOpen,
      text: "Dashboard",
      link: "/"
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions"
    }
  ] ;

  return (
    <Stack bg={"White"} justify="space-between" boxShadow={{
      base: "none",
      lg: "lg"
    }} 
      w={{
        base: "full",
        lg: "16rem"
      }} minH="100vh">
     <Box>
     <Heading as="h1" fontSize="20px" pt="3rem" textAlign="center" >@Your Logo</Heading>
        <Box mt="6" mx="3">
            { navLinks.map((nav) => (
              <HStack mt="3" key={nav.text} 
              py="3" px="4" borderRadius="10px"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717"
                }}
                color="#797E82" 
              >
                  <Icon as={nav.icon} />
                  <Text fontSize="14px" fontWeight="medium" 
                    color="#797e82"
                  > {nav.text}</Text>
              </HStack>
            ))}
        </Box>
     </Box>
        <Box mt="6" mx="3" mb="6">
            <HStack mt="3" py="3" px="4" borderRadius="10px"
              _hover={{
                bg: "#F3F3F7",
                color: "#212121"
              }}
              color="#797E82"
            >
              <Icon as={BiSupport} />
              <Text fontSize="14px" color="#797E82">Support</Text>
            </HStack>
        </Box>
    </Stack>
  )
}

export default SideBar