import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Ninja } from '../pages/Ninja';

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ninja/:id' element={<Ninja />} />
        </Routes>
    )
}