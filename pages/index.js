import Head from '../components/head';
import Header from '../components/header';
import Form from "../components/generateForm";
import { useState } from "react";
import Result from "../components/result";

const MyApp = () => {
  
  const [data, setData] = useState();

  const handleGetData = ( response ) => {
    setData(response)
  }

  const handleReset = () => ( setData() )
  
  return (
    <>
      <Head title="Home" />
      <Header />
      <br />
      <main>
        <section id="urlbox">
          <h1>Paste the URL to be shortened</h1>
          
          { data ? ( <Result data={data} reset={handleReset} /> ) : ( <Form responseData={handleGetData} /> ) }
          
        </section>
      </main>
    </>
  )
}

export default MyApp;