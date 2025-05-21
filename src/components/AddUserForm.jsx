import { useState } from 'react';
import './css/AddUserForm.css';
import { Button } from './Button';

export const AddUserForm = ({ onAddUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;
        
        onAddUser({
            id: Date.now(),
            ...formData
        });
        
        setFormData({ name: '', email: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form className="add-user-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre del usuario"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email del usuario"
                value={formData.email}
                onChange={handleChange}
            />
            <Button type="submit">Agregar Usuario</Button>
        </form>
    );
}
