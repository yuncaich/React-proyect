import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        date_of_birth: '',
        gender: 'M', // Default value
        nie: '',
        nationality: '',
        acceptTerms: false
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.acceptTerms) {
            setError('Debes aceptar los términos y condiciones para registrarte.');
            return;
        }
        setError('');
        try {
            const response = await fetch('http://tu-dominio.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Registro</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <div className="mb-4">
                <label className="block text-gray-700">Nombre:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Apellido:</label>
                <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Segundo Apellido:</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Correo Electrónico:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Teléfono:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Dirección:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Ciudad:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Estado:</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Código Postal:</label>
                <input type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">País:</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Fecha de Nacimiento:</label>
                <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Género:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="Other">Otro</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">NIE:</label>
                <input type="text" name="nie" value={formData.nie} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Nacionalidad:</label>
                <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="form-checkbox"
                    />
                    <span className="ml-2 text-gray-700">
                        Acepto los <Link to="/terms" className="text-blue-500 underline">términos y condiciones</Link>
                    </span>
                </label>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Registrarse
            </button>
        </form>
    );
};

export default RegisterForm;
