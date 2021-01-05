import {MainLayout} from "../components/MainLayout";

import Image from 'next/image';

export default function Index() {
    return (
        <MainLayout title="Home page">
            <h1>Hello next.js</h1>
            <hr/>
            <h4>The Star Wars API</h4>
            <p>All the Star Wars data you've ever wanted:</p>
            <p><b>Planets, Spaceships, Vehicles, People, Films and Species</b></p>
            <p>From all SEVEN Star Wars films</p>
            <p>Now with The Force Awakens data!</p>
            <Image
                src="/175-1756185_trailer-de-star-wars-star-wars-os-ultimos.png"
                alt="Image"
                width={1140}
                height={500}
            />
        </MainLayout>
    )
}