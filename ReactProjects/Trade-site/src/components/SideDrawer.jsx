import PropTypes from 'prop-types';
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import SideBar from './SideBar'
// import React from 'react'

const SideDrawer = ({isOpen, onClose}) => {
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            
  
            <DrawerBody>
              <SideBar />
            </DrawerBody>
   
          </DrawerContent>
        </Drawer>
      </>
    )
}

SideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SideDrawer