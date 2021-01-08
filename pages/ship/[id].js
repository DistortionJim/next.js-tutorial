// import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";

import {Table, Breadcrumb} from 'react-bootstrap';
import Router from "next/router";


export default function Ship({ship}) {
    // const router = useRouter();
    // console.log('router', router);
    return (
        <MainLayout title={ship.name}>
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className="breadcrumb-item">
                    <Link href="/ships"><a>Starships</a></Link>
                </li>
                <Breadcrumb.Item active>{ship.name}</Breadcrumb.Item>
            </Breadcrumb>
            <h1>{ship.name}</h1>
            <h3>{ship.model}</h3>
            <Table striped bordered hover style={{maxWidth: '600px'}}>
                 <tbody>
                    <tr>
                        <td>Manufacturer</td>
                        <td>{ship.manufacturer}</td>
                    </tr>
                    <tr>
                        <td>Length</td>
                        <td>{ship.length}</td>
                    </tr>
                    <tr>
                        <td>Starship class</td>
                        <td>{ship.starship_class}</td>
                    </tr>
                    <tr>
                        <td>Consumables</td>
                        <td>{ship.consumables}</td>
                    </tr>
                    <tr>
                        <td>Crew</td>
                        <td>{ship.crew}</td>
                    </tr>
                </tbody>
            </Table>

            <button className="btn btn-primary" onClick={() => Router.push('/ships')}>All ships</button>

        </MainLayout>
    )
}

Ship.getInitialProps = async (ctx) => {
    const res = await fetch('https://swapi.dev/api/starships/' + ctx.query.id);
    const ship = await res.json();
    console.log('ctx', ctx);
    return {
        ship
    }
};