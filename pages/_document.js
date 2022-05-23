import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>                  
          <title>Login</title>
        </Head>        
      </Html>
    )
  }
}

export default MyDocument