
import PropTypes from 'prop-types';
import { Heading, HStack, Box, Icon } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const TopNav = ({ title, onOpen }) => {
  return (
    <Box boxShadow="lg" px={6} bg={"white"}>
      <HStack maxW="70rem" bg={"aliceblue"} height="16" mx="auto" justify="space-between" px="12">
        <Icon as={FaBars} onClick={onOpen} display={{
        base: "block",
        lg: "none"
      }}/>
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon as={HiOutlineUserCircle} boxSize={8} />
          </MenuButton>
          <MenuList>
            <MenuItem>Log out</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};


TopNav.propTypes = {
  onOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopNav;
