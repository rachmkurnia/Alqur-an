import React, { useEffect, useState } from 'react'
import CardSurah from '../components/CardSurah'
import { Container, Row } from 'react-bootstrap'
import Api from '../api/index'



const HalamanSurah = () => {
    const [surah, setSurah] = useState([]);

    const getSurahAll = async () => {
        await Api.get('/data')
        .then((response)=> {
            setSurah(response.data); //debug console
            // console.log(response.data); 
        }); 
    }

    useEffect(() => {
        getSurahAll();
    }, []);


  return (
    <div>
      <Container>
            <h1>LIST SURAH</h1>

            <Row className='mt-md-5'>
                    {
                        surah.length > 0 ?
                        surah.map((item, index)=>(
                            <CardSurah 
                            index={index + 1}
                            nama={item.nama} 
                            asma={item.asma}
                            type={item.type} 
                            ayat={item.ayat} 
                            />

                        ))
                        : <h1>Maaf, Data tidak tersedia</h1>
                    }                
            </Row>
      </Container>
    </div>
  )
}

export default HalamanSurah
