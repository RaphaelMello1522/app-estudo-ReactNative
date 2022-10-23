import { useEffect, useState } from "react";
import { ProdutoresData } from "../services/dataLoad";


export default function UseProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = ProdutoresData();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
        console.log(retorno);
    }, []);

    return [titulo, lista] 
}