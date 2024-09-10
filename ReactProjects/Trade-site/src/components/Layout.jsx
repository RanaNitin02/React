import { Flex, Container, Box, useDisclosure } from "@chakra-ui/react"
import PropTypes from 'prop-types';
import SideBar from './SideBar'
import TopNav from './TopNav'
import SideDrawer from "./SideDrawer";

const Layout = ({title,children}) => {

  const { isOpen, onClose, onOpen  } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex"
        }}
      >
        <SideBar />
      </Box>
   
      <SideDrawer 
        isOpen={isOpen}
        onClose={onClose}
      />
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen}/>
          <Container mt={6} maxW="70rem">
              {children}
          </Container>
        </Box>
    </Flex>
  )
};


Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


export default Layout