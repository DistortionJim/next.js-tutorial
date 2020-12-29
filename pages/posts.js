import Head from "next/head"
import {MainLayout} from "../components/MainLayout";

export default function Posts () {
    return (
        <MainLayout>
            <Head>
                <title>Posts | Next.JS tutorial</title>
                <meta charSet="UTF-8"/>
            </Head>
            <h1>Posts</h1>
        </MainLayout>
    )
}