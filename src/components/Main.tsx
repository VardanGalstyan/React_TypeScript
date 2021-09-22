import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TypeTrack from './Types/Tracks'





interface SongsArray {
    data: TypeTrack[] | null
  
}



function Main({ data }: SongsArray) {
    return (
        <Container fluid>
            <Row>
                {
                    data && data.map(song => {
                       return  <Col id='singleCard' sm={6} md={3} lg={2}>
                            <Card>
                                <Card.Img variant="top" src={song.artist.picture_xl} />
                                <Card.Body>
                                    <Card.Title>{song.artist.name}</Card.Title>
                                    <Card.Title>{song.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                }
            </Row>
        </Container>
    )
}

export default Main
