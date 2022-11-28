import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { api } from "../../services/api";
import { Card, List } from "./styles";

export const Home = () => {
    const [ninjas, setNinjas] = useState([]);

    useEffect(() => {
        async function getNinjas() {
            const response = await api.get('/characters', {
                offset: 0,
                limit: 300
            });

            setNinjas(response.data);
        }

        getNinjas();
    }, [])


    return (
        <>
            <h1>Tsunode Shippuden</h1>

            <List>
                {
                    ninjas.map(ninja => 
                        <Card key={ninja.id}>
                            <Link to={`/ninja/${ninja.name}`}>
                                <span>{ninja.name}</span>
                                <img src={ninja.images[0]} alt={ninja.name} />
                            </Link>
                        </Card>
                    )
                }
            </List>
        </>
    )
}