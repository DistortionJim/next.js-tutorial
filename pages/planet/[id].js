import {useState, useEffect} from 'react';

import {MainLayout} from "../../components/MainLayout";
import {Loader} from "../../components/Loader";

import {Table, Breadcrumb} from 'react-bootstrap';
import Router from "next/router";
import Link from "next/link";

export default function Planet({planet: serverData}) {

    console.log('serverData', serverData);

    const [planet, setPlanet] = useState(serverData);

    useEffect(() => {
        async function load() {
            const res = await fetch('https://swapi.dev/api/planets/' + Router.query.id);
            const data = await res.json();
            setPlanet(data);

        }
        if(!serverData) {
            load();
        }

    }, []);

    if(!planet) {
        return (
            <MainLayout>
                <Loader />
            </MainLayout>
        );
    }

    return (
        <MainLayout title={planet.name}>
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className="breadcrumb-item">
                    <Link href="/planets"><a>Planets</a></Link>
                </li>
                <Breadcrumb.Item active>{planet.name}</Breadcrumb.Item>
            </Breadcrumb>
            <h1>{planet.name}</h1>
            <Table striped bordered hover style={{maxWidth: '600px'}}>
                 <tbody>
                    <tr>
                        <td>Diameter</td>
                        <td>{planet.diameter}</td>
                    </tr>
                    <tr>
                        <td>Rotation period</td>
                        <td>{planet.rotation_period}</td>
                    </tr>
                    <tr>
                        <td>Population</td>
                        <td>{planet.population}</td>
                    </tr>
                    <tr>
                        <td>Climate</td>
                        <td>{planet.climate}</td>
                    </tr>
                    <tr>
                        <td>Orbital period</td>
                        <td>{planet.orbital_period}</td>
                    </tr>
                    <tr>
                        <td>Gravity</td>
                        <td>{planet.gravity}</td>
                    </tr>
                </tbody>
            </Table>
            <button className="btn btn-primary" onClick={() => Router.push('/planets')}>All planets</button>

        </MainLayout>
    )
}

Planet.getInitialProps = async ({query, req}) => {
    if (!req) {
        console.log('Front request')
        return {
            planet: null
        }
    }

    const res = await fetch('https://swapi.dev/api/planets/' + query.id);
    const planet = await res.json();
    console.log('Back request');
    return {
        planet
    }
};

// export async function getServerSideProps({query, req}) {
//
//     const res = await fetch('https://swapi.dev/api/planets/' + query.id);
//     const planet = await res.json();
//     return {
//         props: {planet}
//     }
// }