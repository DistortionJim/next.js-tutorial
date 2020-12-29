import Router from "next/router";
import {MainLayout} from "../components/MainLayout";

export default function About () {
 return (
     <MainLayout>
      <h1>About</h1>
      <button onClick={() => Router.push('/')}>Home page</button>
     </MainLayout>
 )
}