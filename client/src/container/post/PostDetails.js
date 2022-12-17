import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePost, deletePost } from '../../redux/actions/post';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditPostForm from '../../components/EditPostForm';
import Loader from '../common/Loader';
import {
  Flex,
  Box,
  Image,
  chakra,
  Spacer,
  Link,
  Button,
  Heading,
  Textarea,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import ResizeTextarea from 'react-textarea-autosize';

import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

const PostDetails = ({ match }) => {
  const { id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const currentPosts = useSelector(state => state.posts);
  const { currentPost, loading, error } = currentPosts;
  const [editMode, setEditMode] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openEditMode = () => {
    setEditMode(true);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };

  const convertRelativeTime = date => {
    return moment(date).format('LL');
  };

  useEffect(() => {
    if (id) dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  const removePost = () => {
    dispatch(deletePost(currentPost?._id));
    toast.success('Blog successfully removed!');
    setTimeout(() => {
      onClose();
      history.push('/posts');
    }, 500);
  };
  const newTheme = {
    p: props => {
      const { children } = props;
      return (
        <Textarea
          mt={4}
          fontSize="lg"
          color={('gray.400', 'gray.300')}
          isReadOnly="true"
          variant="unstyled"
          resize={'none'}
          overflow="hidden"
          as={ResizeTextarea}
        >
          {children}
        </Textarea>
      );
    },
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {error && <p>{error}</p>}
          {editMode ? (
            <EditPostForm post={currentPost} closeEditMode={closeEditMode} />
          ) : (
            <Flex maxW="900px" mx="auto" align="center" justify="center" px={5}>
              <Box w="100%" py={5}>
                <Box py={6}>
                  <Heading as="h1" size="xl" color={('gray.600', 'gray.100')}>
                    {currentPost?.title}
                  </Heading>
                  <Heading
                    as="h2"
                    fontWeight="normal"
                    size="sm"
                    mt={2}
                    fontStyle="italic"
                    color={('gray.600', 'gray.400')}
                  >
                    {currentPost?.subtitle}
                  </Heading>
                  <Box my={6}>
                    <Flex align="center">
                      <Flex align="center" justify="between">
                        <Image
                          h={10}
                          fit="cover"
                          rounded="full"
                          src="https://source.unsplash.com/random/48x48"
                          alt="Avatar"
                        />
                        <Flex align="flex-start" direction="column">
                          <Link mx={3} fontWeight="bold" color={('blue.600', 'brand.200')}>
                            {currentPost?.author}
                          </Link>
                          <chakra.span mx={3} fontSize="sm" color={('gray.600', 'whiteAlpha.600')}>
                            {convertRelativeTime(currentPost?.createdAt)}
                          </chakra.span>
                        </Flex>
                      </Flex>

                      <Spacer />

                      <Button colorScheme="blue" mr={3} onClick={openEditMode}>
                        <EditIcon />
                      </Button>
                      <Button onClick={onOpen} colorScheme="red">
                        <DeleteIcon />
                      </Button>
                    </Flex>
                  </Box>
                  <figure style={{ marginBottom: '2rem' }}>
                    <Image
                      w="100%"
                      borderRadius="md"
                      src={currentPost?.image || 'https://loremflickr.com/1280/720'}
                      alt={currentPost?.tag}
                    />
                  </figure>
                  <ReactMarkdown
                    components={ChakraUIRenderer(newTheme)}
                    children={currentPost?.content.replace()}
                    skipHtml
                  />
                </Box>
              </Box>
            </Flex>
          )}
        </div>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>게시글 삭제</ModalHeader>
          <ModalCloseButton />
          <ModalBody>게시글을 삭제하시겠습니까?</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              취소
            </Button>
            <Button variant="ghost" onClick={removePost}>
              삭제
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostDetails;
