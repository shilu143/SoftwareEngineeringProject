import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Input,
    Textarea,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { UploadButton } from 'react-uploader';
  import { Uploader } from 'uploader';
  
  function CreatePost() {
    const [caption, setCaption] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState<string | null>(null);
  
    const options = {
      multi: false,
    };
    const uploader = Uploader({
      apiKey: 'free',
    });
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Submitted', caption, content, image);
      // Add logic to submit post data to server/database
    };
  
    return (
      <Box p={10}>
        <Flex justify="center" align="center">
          <Box w="50%">
            <Heading as="h1" size="xl" mb={6}>
              Create a New Post
            </Heading>
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <Input
                  type="text"
                  placeholder="Post caption"
                  value={caption}
                  onChange={(event) => setCaption(event.target.value)}
                  required
                />
                <Textarea
                  placeholder="Write your post content"
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  required
                  size="lg"
                  h="200px"
                  overflow="auto"
                />
                <UploadButton
                  uploader={uploader}
                  options={options}
                  onComplete={(files) => {
                    if (files.length === 0) {
                      console.log('No files selected.');
                    } else {
                      console.log('Files uploaded:');
                      console.log(files.map((f) => f.fileUrl));
                      setImage(files[0].fileUrl);
                    }
                  }}
                >
                  {({ onClick }) => (
                    <Button colorScheme="green" onClick={onClick}>
                      Upload Pic
                      <input
                        type="file"
                        accept=".png, .jpeg"
                        style={{ display: 'none' }} // hide the default file input
                      />
                    </Button>
                  )}
                </UploadButton>
                {image && <Image src={image} boxSize="100%" />}
                <Button type="submit" colorScheme="blue" w="100%">
                  Submit Post
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Box>
    );
  }
  
  export default CreatePost;
  