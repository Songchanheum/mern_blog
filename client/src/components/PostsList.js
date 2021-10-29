/* eslint-disable */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts} from '../redux/actions/post';
import Loader from './Loader';
import { useColorModeValue, Box, Wrap, Flex, Text, Icon, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router';
import {FiBook} from 'react-icons/fi';

const PostsList = () => {
  const listPost = useSelector(state => state.posts);
  const { posts, loading, error } = listPost;
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
    <Stack bg={useColorModeValue('#F9FAFB', 'gray.600')} textAlign={'center'} >
      <Text pt={10} fontSize="4xl" bgGradient="linear(to-r, blue.300 0%, blue.200 50%, gray.100 100%)" bgClip="text" fontWeight={600}>
        <Icon as={FiBook} color="blue.300" />  {category != null ?category: 'ALL'}
      </Text>
    </Stack>
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      px={5}
      py={30}
      w="full"
      align="center"
      justify="center"
      minH="100vh"
    >
      <Wrap spacing="30px" justify="center">
        {error && <p>{error}</p>}
        {loading ? (
          <Loader />
        ) : posts?.length > 0 && (category == null || posts.findIndex((item) => item.tag == category) > -1) ? (
          posts?.map(post => (
            (category == null || post.tag == category) ? (
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg={('white', 'gray.800')}
              maxW="md"
              key={post?._id}
              boxShadow="dark-lg"
            >
              <Post post={post} category={category}/>
            </Box>
            ) :  (<></>)
          ))
        ) : (
          'Blog not found!'
        )}
      </Wrap>
    </Flex>
    </>
  );
};

export default PostsList;
