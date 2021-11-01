import { Divider, Flex, IconButton } from '@chakra-ui/react'
import {FiMenu, FiHome, FiBook, FiChevronsRight, FiSettings} from 'react-icons/fi';
import {BiBaseball} from 'react-icons/bi';
import React, {useState} from 'react'
import NavItem from './NavItem';
import { useSelector } from 'react-redux';

function Sidebar() {
    const [navSize, changeNavSize] = useState("small")
    
    const categories = useSelector(state => state.category);
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
                    onClick={() => {
                        if(navSize == "small"){
                            changeNavSize("large");
                        }else{
                            changeNavSize("small");
                        }
                    }}
                ></IconButton>
                <NavItem navSize={navSize} icon={FiHome} title="대시보드" path="dashboard"/>
                <NavItem navSize={navSize} icon={FiBook} title="전체보기" path="posts"/>
                <NavItem navSize={navSize} icon={FiChevronsRight} title="카테고리별" description={categories.category.post}/>
                <NavItem navSize={navSize} icon={BiBaseball} title="야구" path="baseball" />
                <NavItem navSize={navSize} icon={FiSettings} title="설정" path="setting"/>
            </Flex>
        </Flex>
    )
}

export default Sidebar
