import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export const Ninja = () => {
    const { id } = useParams();
    const [ninja, setNinja] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getNinja() {
            try {
                const response = await api.get(`characters/${id}`);
    
                setNinja(response.data);
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false);
            }
        }

        getNinja();
    }, [id])

    if(loading) {
        return <div>Loading...</div>
    }

    if(!ninja) {
        return <div>Ninja não encontrado</div>
    }

    return (
        <h1>{ninja.name}</h1>
    )
}