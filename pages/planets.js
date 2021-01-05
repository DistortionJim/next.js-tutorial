import {useState, useEffect} from 'react';

import {MainLayout} from "../components/MainLayout";
import {Loader} from "../components/Loader";
import Router from "next/router";
import Link from "next/link";

import {Row, Col, Card, ListGroup, ListGroupItem, Breadcrumb} from 'react-bootstrap';

export default function Planets ({planets: serverData}) {

    const [planets, setPlanets] = useState(serverData);

    useEffect(() => {
        async function load() {
            const res = await fetch('https://swapi.dev/api/planets/');
            const data = await res.json();

            setPlanets(data.results);

        }
        if(!serverData) {
            load();
        }

    }, []);

    if(!planets) {
        return (
            <MainLayout>
                <Loader />
            </MainLayout>
        );
    }


    return (
        <MainLayout title="Planets">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <Breadcrumb.Item active>Planets</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Planets</h1>
            <Row className={'my-4'}>
                {
                    planets.map((planet, index) => (
                        <Col  xs="12" sm="6" md="4" lg="3" className={'mb-4'} key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{planet.name}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Diameter: {planet.diameter}</ListGroupItem>
                                    <ListGroupItem>Population: {planet.population}</ListGroupItem>
                                    <ListGroupItem>Climate: {planet.climate}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Link href={ {
                                        pathname: "/planet/[id]",
                                        query: {id: `${planet.url.split('planets/')[1]}`},
                                    }}>
                                        <a>Show planet</a>
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

// Planets.getInitialProps = async ({req}) => {
//     if (!req) {
//         console.log('Front request');
//         return {
//             planets: null
//         }
//     }
//     const res = await fetch('https://swapi.dev/api/planets/');
//     const planets = await res.json();
//     console.log('Back request');
//     return {
//         planets: planets.results
//     }
//
// };

export async function getServerSideProps({req}) {
    console.log('----req-----', req);
    if (!req) {
        console.log('Front request');
        return {
            planets: null
        }
    }
    const res = await fetch('https://swapi.dev/api/planets/');
    const planets = await res.json();
    console.log('Back request');
    return {
        props: {
            planets: planets.results
        }
    }
}