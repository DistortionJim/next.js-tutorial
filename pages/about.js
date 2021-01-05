import Router from "next/router";
import {MainLayout} from "../components/MainLayout";

import {Breadcrumb} from 'react-bootstrap';
import Link from "next/link";

export default function About () {
 return (
     <MainLayout  title="About">
         <Breadcrumb>
             <li className="breadcrumb-item">
                 <Link href="/"><a>Home</a></Link>
             </li>
             <Breadcrumb.Item active>About</Breadcrumb.Item>
         </Breadcrumb>
          <h1>What is this?</h1>
          <p>The Star Wars API is the world's first quantified and programmatically-formatted set of Star Wars data.</p>
          <p>After hours of watching films and trawling through content online, we present to you all the People, Films, Species, Starships, Vehicles and Planets from Star Wars.</p>
          <p>We've formatted this data in JSON and exposed it to you in a RESTish implementation that allows you to programmatically collect and measure the data.</p>
      <button className="btn btn-primary mt-4" onClick={() => Router.push('/')}>Home page</button>
     </MainLayout>
 )
}