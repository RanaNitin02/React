// import React from 'react'
import { HStack , Icon, Stack, Tag, Text } from "@chakra-ui/react"
import { IoMdInformationCircleOutline } from "react-icons/io";

const Portfolio = () => {
  return (
    <HStack bg={"white"} borderRadius={"xl"} p={6}>
      {/* 1. */}
        <Stack>
            <HStack color={"black.80"}>
              <Text fontSize={"14px"}>Total Portfolio Value</Text>
              <Icon as={IoMdInformationCircleOutline} />
            </HStack>
          <Text textStyle={"h2"}>₹112,456.32</Text>
        </Stack>
      {/* 2. */}
      <Stack>
            <HStack color={"black.80"}>
              <Text fontSize={"14px"}>Wallet Balance</Text>
            </HStack>
            <HStack>
              <Text textStyle={"h2"}>22.39401000</Text><Tag>BTC</Tag>
            </HStack>
            
        </Stack>
        <HStack>
              <Text textStyle={"h2"}>22.39401000</Text><Tag>BTC</Tag>
            </HStack>
    </HStack>
  )
}

export default Portfolio