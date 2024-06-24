import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        parent: {
            name: '',
            surname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            gender: 'M', // Default value
            document: '',
            acceptTerms: false
        },
        children: [
            { name: '', surname: '', lastname: '', birthdate: '' }
        ]
    });

    const [error, setError] = useState('');
    const navigate = useNavigate(); // Obtener la función de navegación

    const handleParentChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            parent: {
                ...formData.parent,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    };

    const handleChildChange = (e, index) => {
        const { name, value } = e.target;
        const children = [...formData.children];
        children[index][name] = value;
        setFormData({ ...formData, children });
    };

    const addChild = () => {
        setFormData({
            ...formData,
            children: [...formData.children, { name: '', surname: '', lastname: '', birthdate: '' }]
        });
    };

    const removeChild = (index) => {
        const children = [...formData.children];
        children.splice(index, 1);
        setFormData({ ...formData, children });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.parent.acceptTerms) {
            setError('Debes aceptar los términos y condiciones para registrarte.');
            return;
        }
        setError('');
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result);
                navigate('/', { state: { successMessage: 'Registro exitoso' } }); // Redirigir al home con un mensaje de éxito
            } else {
                setError('Error en el registro');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error en el registro');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Registro</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <h3 className="text-xl font-semibold mb-4">Información del Padre</h3>
            <div className="mb-4">
                <label className="block text-gray-700">Nombre:</label>
                <input type="text" name="name" value={formData.parent.name} onChange={handleParentChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Apellido:</label>
                <input type="text" name="surname" value={formData.parent.surname} onChange={handleParentChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Segundo Apellido:</label>
                <input type="text" name="lastname" value={formData.parent.lastname} onChange={handleParentChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Correo Electrónico:</label>
                <input type="email" name="email" value={formData.parent.email} onChange={handleParentChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Teléfono:</label>
                <input type="text" name="phone" value={formData.parent.phone} onChange={handleParentChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Dirección:</label>
                <input type="text" name="address" value={formData.parent.address} onChange={handleParentChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Dirección, Ciudad, Estado, Código Postal, País" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Género:</label>
                <select name="gender" value={formData.parent.gender} onChange={handleParentChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="Other">Otro</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Documento:</label>
                <input type="text" name="document" value={formData.parent.document} onChange={handleParentChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.parent.acceptTerms}
                        onChange={handleParentChange}
                        className="form-checkbox"
                    />
                    <span className="ml-2 text-gray-700">
                        Acepto los <Link to="/register/terms" target="_blank" className="text-blue-500 underline">términos y condiciones</Link>
                    </span>
                </label>
            </div>

            <h3 className="text-xl font-semibold mb-4">Información de los Hijos</h3>
            {formData.children.map((child, index) => (
                <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre:</label>
                        <input type="text" name="name" value={child.name} onChange={(e) => handleChildChange(e, index)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Apellido:</label>
                        <input type="text" name="surname" value={child.surname} onChange={(e) => handleChildChange(e, index)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Segundo Apellido:</label>
                        <input type="text" name="lastname" value={child.lastname} onChange={(e) => handleChildChange(e, index)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Fecha de Nacimiento:</label>
                        <input type="date" name="birthdate" value={child.birthdate} onChange={(e) => handleChildChange(e, index)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <button type="button" onClick={() => removeChild(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                        Eliminar Hijo
                    </button>
                </div>
            ))}
            <button type="button" onClick={addChild} className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
                Añadir Hijo
            </button>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Registrarse
            </button>
        </form>
    );
};

export default RegisterForm;
