import { Flex, Icon, Link, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import NavHoverBox from './NavHoverBox';

function NavItem({ navSize, path, title, icon, active, description }) {
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems={navSize == 'small' ? 'center' : 'flex-start'}>
      <Menu placement="right">
        {description != null ? (
          <Link
            bgColor={active && 'AEC8CA'}
            p={3}
            borderRadius={8}
            _hover={{ textDector: 'none', bgColor: '#AEC8CA' }}
            w={navSize == 'large' && '100%'}
          >
            <MenuButton w="100%">
              <Flex>
                <Icon as={icon} mt={1} fontSize="xl" color={active ? '#82AAAD' : 'gray.500:'} />
                <Text ml={5} fontFamily={'Jua'} fontSize="xl" display={navSize == 'small' ? 'none' : 'flex'}>
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </Link>
        ) : (
          <Link
            bgColor={active && 'AEC8CA'}
            p={3}
            borderRadius={8}
            _hover={{ textDector: 'none', bgColor: '#AEC8CA' }}
            w={navSize == 'large' && '100%'}
            href={path}
          >
            <MenuButton w="100%">
              <Flex>
                <Icon as={icon} mt={1} fontSize="xl" color={active ? '#82AAAD' : 'gray.500:'} />
                <Text ml={5} fontFamily={'Jua'} fontSize="xl" display={navSize == 'small' ? 'none' : 'flex'}>
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </Link>
        )}
        {description != null ? (
          <MenuList py={0} border="none" w={200} h={200} ml={5}>
            <NavHoverBox title={title} icon={icon} description={description} />
          </MenuList>
        ) : (
          <></>
        )}
      </Menu>
    </Flex>
  );
}

export default NavItem;
