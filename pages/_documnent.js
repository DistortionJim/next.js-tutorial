import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    {/*Import Fonts, etc..*/}
                </ Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

