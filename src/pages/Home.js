import { Box, Container, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        if(search < 2){
            fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API}`)
            .then(res => res.json())
            .then((result) => {
                setData(result.results)
            })
        }else{
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API}&language=en-US&query=${search}&page=1&include_adult=false`)
            .then(res => res.json())
            .then((result) => {
                setData(result.results)
            })
        }
    }, [search])

  return (
      <>
      <Container maxW={'container.xl'} mb={10}>
          <Input placeholder='Search' mt={5} mb={5} value={search} onChange={(e) => setSearch(e.target.value)} />
          <SimpleGrid columns={{sm: 2, md: 5}} spacing='30px'>
            {
                data.map((item, index) => {
                    return(
                        (item.poster_path ? <Card key={index} title={item.title || item.name} poster={item.poster_path} media={item.media_type} id={item.id} /> : null)
                    )
                })
            }
          </SimpleGrid>
      </Container>
      </>
  )
};

export default Home;
