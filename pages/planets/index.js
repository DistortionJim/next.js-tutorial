import {MainLayout} from "../../components/MainLayout";
import {Loader} from "../../components/Loader/index";
import Router from "next/router";
import Link from "next/link";

// import useSWR from 'swr'
import {Row, Col, Card, ListGroup, ListGroupItem, Breadcrumb} from 'react-bootstrap';
import {useEffect, useState} from "react";

export default function Planets ({planets: serverData}) {

    // const fetcher = url => fetch(url).then(r => r.json());
    //
    // const { data, error } = useSWR('https://swapi.dev/api/planets/', fetcher, { initialData: planets });
    //
    // if (!data) {
    //     return (
    //         <MainLayout>
    //             <Loader />
    //         </MainLayout>
    //     );
    // }

    // if (error) return <div>failed to load</div>;

    const [planets, setPlanets] = useState(serverData);

    useEffect(() => {
        async function load() {
            const res = await fetch('https://swapi.dev/api/planets/');
            const data = await res.json();
            setPlanets(data);

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
        <MainLayout title="Index">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <Breadcrumb.Item active>Planets</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Planets</h1>
            <Row className={'my-4'}>
                {
                    planets.results.map((planet, index) => (
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



// export async function getServerSideProps() {
//     const res = await fetch('https://swapi.dev/api/planets/');
//     const planets = await res.json();
//     console.log('Backend request');
//     return {
//         props: {planets}
//     }
// }

Planets.getInitialProps = async ({req}) => {
    if (!req) {
        console.log('Front request');
        return {
            planet: null
        }
    }

    const res = await fetch('https://swapi.dev/api/planets/');
    const planets = await res.json();
    console.log('Back request');
    return {
        planets
    }
};