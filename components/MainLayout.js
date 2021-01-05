import Link from "next/link";
import Image from 'next/image';

import {Nav} from 'react-bootstrap';
import { useRouter } from 'next/router';

import Head from 'next/head'



export function MainLayout({children, title}) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{title} | Next.JS tutorial</title>
                <meta charSet="UTF-8"/>
                <meta name="keywords" content="next, react, nextjs"/>
                <meta name="description" content="Next.JS Tutorial"/>
            </Head>
            <header className="header">
                <Link href="/">
                    <a className="header__logo">
                        <Image
                            src="/star_wars_logo_PNG10.png"
                            alt="Logo"
                            width={100}
                            height={50}
                        />
                    </a>
                </Link>
                <Nav
                    activeKey="/"
                    as="ul"
                >
                    <Nav.Item as="li">
                        <Link href="/"><a className={router.pathname == "/" ? "active nav-link" : "nav-link"}>Home</a></Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link href="/about"><a className={router.pathname == "/about" ? "active nav-link" : "nav-link"}>About</a></Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link href="/ships"><a className={router.pathname == "/ships" ? "active nav-link" : "nav-link"}>Starships</a></Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link href="/planets"><a className={router.pathname == "/planets" ? "active nav-link" : "nav-link"}>Planets</a></Link>
                    </Nav.Item>
                </Nav>

            </header>

            <main>
                <div className="container py-3">
                    {children}
                </div>
            </main>
        </>
    )
}