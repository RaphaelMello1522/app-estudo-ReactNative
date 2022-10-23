import React from "react";
import { Text, View } from "react-native";
import Topo from "../Home/Topo";
import Produtores from "./Produtores";

export default function Home(){
    return <> 
        <Produtores topo={Topo}/>
    </>
}