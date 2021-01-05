import {MainLayout} from "../components/MainLayout";
import Router from "next/router";
import Link from "next/link";

import {Row, Col, Card, ListGroup, ListGroupItem, Breadcrumb} from 'react-bootstrap';
// import {useState, useEffect} from "react";

export default function Ships ({ships}) {

    // const [ships, setShips] = useState({});

    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch('https://swapi.dev/api/starships/');
    //         const json  = await response.json();
    //         setShips(json);
    //         console.log(json);
    //     }
    //     load();
    // }, []);

    return (
        <MainLayout title="Ships">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <Breadcrumb.Item active>Starships</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Starships</h1>
            <Row className={'my-4'}>
                {
                    ships.map((ship, index) => (
                        <Col xs="12" sm="6" md="4" lg="3" className={'mb-4'} key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{ship.name}</Card.Title>
                                    <Card.Text>{ship.model}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Length: {ship.length}</ListGroupItem>
                                    <ListGroupItem>Class: {ship.starship_class}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Link href={"/ship/[id]"} as={`/ship/${ship.url.split('starships/')[1]}`}>
                                        <a>Show starship</a>
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

Ships.getInitialProps = async () => {
    const res = await fetch('https://swapi.dev/api/starships/');
    const ships = await res.json();
    return {
        ships: ships.results
    }
};