import {MainLayout} from "../../components/MainLayout";
import Router from "next/router";
import Link from "next/link";

import {Row, Col, Card, ListGroup, ListGroupItem, Breadcrumb} from 'react-bootstrap';

export default function Index ({species}) {
    return (
        <MainLayout title="Index">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <Breadcrumb.Item active>Index</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Index</h1>
            <Row className={'my-4'}>
                {
                    species.map((specie, index) => (
                        <Col xs="12" sm="6" md="4" lg="3" className={'mb-4'} key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{specie.name}</Card.Title>
                                    <Card.Text>{specie.classification}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Average height: {specie.average_height}</ListGroupItem>
                                    <ListGroupItem>Average lifespan: {specie.average_lifespan}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Link href={"/specie/[id]"} as={`/specie/${specie.url.split('species/')[1]}`}>
                                        <a>Show specie</a>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <button className="btn btn-primary" onClick={() => Router.push('/')}>Home page</button>

        </MainLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://swapi.dev/api/species/');
    const species = await res.json();
    if (!species) {
        return {
            notFound: true,
        }
    }
    return {
        props: {species: species.results}
    }
}