import React from "react"
import { createRoot } from "react-dom/client"
// import PrimeraApp from "./PrimerApp";
import './index.css'
import CounterApp from "./CounterApp";


const divRoot = document.getElementById('root');
const root = createRoot(divRoot);

root.render(<CounterApp value={1996} />);

