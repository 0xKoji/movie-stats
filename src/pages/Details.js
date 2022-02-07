import { ArrowBackIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Center, Container, Grid, GridItem, Image, Img, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {

    let {media, id} = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async() => {
            await fetch(`https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.REACT_APP_API}&language=en-US&images`)
            .then(res => res.json())
            .then((result) => {
                setData(result)
                setLoading(false)
            })
        })()
    }, [media, id])

  return (
      <>
        {
            (loading ? null : (
                <Container maxW={'container.xl'} mt={20}>
                    <Link to={'/'}><Text><ArrowBackIcon />Back</Text></Link>
                    <Center>
                        <Image src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} boxShadow={'2xl'} mb={6} />
                    </Center>
                    <Text textAlign={'center'} fontSize={40} fontWeight={'bold'} mb={5}>{data.original_title || data.original_name}</Text>
                    <Text textAlign={'center'}>{data.overview}</Text>
                    <Center>
                        <Text textAlign={'center'} fontSize={20} m={4} fontWeight={'bold'}><StarIcon color={'yellow.400'} /> {data.vote_average}</Text>
                        <Text textAlign={'center'} fontSize={20} m={4} fontWeight={'bold'}>{data.release_date}</Text>
                    </Center>
                </Container>
            ))
        }
      </>
  )
};

export default Details;
