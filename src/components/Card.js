import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({title, poster, media, id}) => {
  return (
    <Link to={`/${media}/${id}`}>
        <Box>
            <Image src={`https://image.tmdb.org/t/p/w500/${poster}`} boxShadow={'2xl'} />
            <Text>{title}</Text>
        </Box> 
    </Link>

  )
};

export default Card;
