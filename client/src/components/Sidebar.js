import { Divider, Flex, IconButton } from '@chakra-ui/react'
import {FiMenu, FiHome, FiUser, FiDollarSign, FiSettings} from 'react-icons/fi';
import React, {useState} from 'react'
import NavItem from './NavItem';

function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            h="95vh"
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
            borderRadius={navSize =="small" ? "15px" : "30px"}
            w={navSize == "small"? "75px":"200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    bg="none"
                    mt={5}
                    _hover={{bg:'none'}}
                    icon={<FiMenu />}
                    onClick={() =>{
                        if(navSize == "small"){
                            changeNavSize("large");
                        }else{
                            changeNavSize("small");
                        }
                    }}
                ></IconButton>
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="Dashboard Info" active />
                <NavItem navSize={navSize} icon={FiUser} title="User" description="User Info" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Dollar" description="Dashboard Info" />
                <NavItem navSize={navSize} icon={FiSettings} title="Setting" description="Dashboard Info" />
            </Flex>
        </Flex>
    )
}

export default Sidebar
