import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'} minH="90vh" display="flex" alignItems="center" justifyContent="center">
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
            MERN stack +{' '}
            <Text as={'span'} color={'green.400'} bgGradient="linear(to-r, #30CFD0 0%, #ce47e7 100%)" bgClip="text">
              Chakra UI
            </Text>
            <br />
            BLOG <br />
          </Heading>
        </Stack>
      </Container>
    </>
  );
}
