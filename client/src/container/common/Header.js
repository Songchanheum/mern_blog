import React from 'react';
import { chakra, useColorModeValue, Flex, Button, Link, Text, Stack, HStack } from '@chakra-ui/react';
import AddPostForm from '../../components/AddPostForm';
import { useDisclosure } from '@chakra-ui/hooks';

const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <chakra.header bg={bg} w="full" px={5} py={1} shadow="md" mx="auto">
        <Flex align="center" justify="space-between" mx="auto" maxW="1420px">
          <Flex>
            <chakra.a href={'/blog_temp'} title="Choc Home Page" display="flex" alignItems="center">
              <HStack>
                <Text fontSize="3xl">⚾</Text>
                <Text
                  m={2}
                  bgGradient="linear(to-r, blue.300 0%, blue.200 50%, gray.100 100%)"
                  bgClip="text"
                  fontWeight={700}
                  fontSize={'4xl'}
                  fontFamily={'Gamja Flower'}
                >
                  SCH BLOG
                </Text>
              </HStack>
            </chakra.a>
          </Flex>
          <Flex align="center">
            {/* <Link
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="lg"
              href={'/posts'}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            >
              Posts
            </Link> */}
            <Button ml="10" colorScheme="teal" size="sm" onClick={onOpen}>
              New Post
            </Button>
          </Flex>
        </Flex>
      </chakra.header>
      <AddPostForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
