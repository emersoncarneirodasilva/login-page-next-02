import Document, { Html, Head } from 'next/document';

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