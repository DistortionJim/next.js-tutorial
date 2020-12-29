import Link from "next/link";

import {Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export function MainLayout({children}) {
    return (
        <>
            <Nav
                activeKey="/home"
                as="ul"
            >
                <Nav.Item as="li">
                    <Link href="/"><a className="nav-link">Home</a></Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link href="/about"><a className="nav-link">About</a></Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link href="/posts"><a className="nav-link">Post</a></Link>
                </Nav.Item>
            </Nav>
            <main>
                {children}
            </main>
        </>
    )
}