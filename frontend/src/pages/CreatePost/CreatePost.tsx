import { Box, Button, Flex, Heading, Icon, Image, Input, Menu, MenuButton, Select, Textarea, VStack, }
  from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { UploadButton } from 'react-uploader';
import { Uploader } from 'uploader';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import MenuListItems from '../../Navbar/Directory/MenuListItems';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface Community {
  comid: number;
  comName: string;
  category: string;
  communityProfileImage: string;
  timeCreated: string;
}

function CreatePost() {
  const [caption, setCaption] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [communities, setCommunities] = useState<Community[]>([{
    comid: 1,
    comName: 'sdfad',
    category: 'asdf',
    communityProfileImage: 'asdf',
    timeCreated: 'sfd'
  }]);
  const [selectedCommunity, setSelectedCommunity] = useState<number | null>(
    null
  );
  const user = useContext(AuthContext).user;

  const options = {
    multi: false,
  };
  const uploader = Uploader({
    apiKey: 'free',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Submitted', caption, content, image, selectedCommunity);
    // Add logic to submit post data to server/database
  };

  useEffect(() => {
    // Make an API call to fetch the communities
    const headers = { Authorization: `Bearer ${user?.token}` };
    axios
      .get('/fetchCommunities', { headers })
      .then((response) => {
        setCommunities(response.data);
        console.log('communities'+communities)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
              <h2>Select a Community</h2>
              <Menu>
                <MenuButton
                  cursor={'pointer'}
                  padding={'0.5em 1em'}
                  borderRadius={4}
                  bg={'black'}
                  mx={'0.5em'}
                  _hover={{ outline: '1px solid', outlineColor: 'palette.200' }}
                >
                  <Flex align={'center'} justify={'space-between'} width={{ base: 'auto', lg: '200px' }}>
                    <Flex align={'center'}>
                      <Flex display={{ base: 'none', lg: 'flex' }}>
                        {/* <Text>lkajsdlfkj</Text> */}
                      </Flex>
                    </Flex>
                    <ChevronDownIcon />
                  </Flex>
                </MenuButton>
                {Array.isArray(communities) && communities.length > 0 ? (
                  <div>
                    {communities.map((com) => (
                      <MenuListItems
                        key={com.comid}
                        displayText={com.comName.toUpperCase()}
                        imageURL={com.communityProfileImage}
                        iconColor='cyan.500'
                      />
                    ))}
                  </div>
                ) : (
                  <p>No communities found.</p>
                )}
              </Menu>

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
