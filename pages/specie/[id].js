import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";

import {Table, Breadcrumb} from 'react-bootstrap';
import Router from "next/router";

export default function Specie({specie}) {
    return (
        <MainLayout title={specie.name}>
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className="breadcrumb-item">
                    <Link href="/species"><a>Species</a></Link>
                </li>
                <Breadcrumb.Item active>{specie.name}</Breadcrumb.Item>
            </Breadcrumb>
            <h1>{specie.name}</h1>
            <h3>{specie.classification}</h3>
            <Table striped bordered hover style={{maxWidth: '600px'}}>
                 <tbody>
                    <tr>
                        <td>Average height</td>
                        <td>{specie.average_height}</td>
                    </tr>
                    <tr>
                        <td>Average lifespan</td>
                        <td>{specie.average_lifespan}</td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>{specie.designation}</td>
                    </tr>
                    <tr>
                        <td>Eye colors</td>
                        <td>{specie.eye_colors}</td>
                    </tr>
                    <tr>
                        <td>Hair colors</td>
                        <td>{specie.hair_colors}</td>
                    </tr>
                     <tr>
                        <td>Skin colors</td>
                        <td>{specie.skin_colors}</td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td>{specie.language}</td>
                    </tr>
                </tbody>
            </Table>
            <button className="btn btn-primary" onClick={() => Router.push('/species')}>All species</button>

        </MainLayout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/species/');
    const specie = await res.json();

    const paths = specie.results.map((specie, index) => ({
        params: { id: (index + 1).toString() },
    }));

    return { paths, fallback: false }
}

export async function getStaticProps({params})  {
    const res = await fetch('https://swapi.dev/api/species/' + params.id);
    const specie = await res.json();

    if (!specie) {
        return {
            notFound: true,
        }
    }

    return {
        props: {specie}
    }
}