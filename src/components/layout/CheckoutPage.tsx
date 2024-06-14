'use client';
import React, { useState } from 'react';
import { SendTransaction } from '../sendTransaction';

export function CheckoutPage() {
    const [isFormVisible, setFormVisible] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            surname: (form.elements.namedItem('surname') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            address: (form.elements.namedItem('address') as HTMLInputElement).value,
            city: (form.elements.namedItem('city') as HTMLInputElement).value,
            postalCode: (form.elements.namedItem('postalCode') as HTMLInputElement).value
        };
        setFormData(data);
        setFormVisible(false); // Condense the form
    };

    return (
        <div className="form-control w-full border rounded-lg shadow-md p-4">
            {isFormVisible ? (
                <div className="max-w-3xl">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" className="input-custom" placeholder="Enter your name" required />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">Surname</span>
                                </label>
                                <input type="text" name="surname" className="input-custom" placeholder="Enter your surname" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" className="input-custom" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="tel" name="phone" className="input-custom" placeholder="Enter your phone number" required />
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="address" className="input-custom" placeholder="Enter your address" required />
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input type="text" name="city" className="input-custom" placeholder="Enter your city" required />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">Postal Code</span>
                                </label>
                                <input type="text" name="postalCode" className="input-custom" placeholder="Enter your postal code" required />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Save</button>
                    </form>
                </div>
            ) : (
                <div className="text-center">
                    <h3 className="font-bold text-lg">🧁 Order Summary</h3>
                    <p className="mt-2"><strong>Name:</strong> {formData.name}</p>
                    <p className="mt-2"><strong>Surname:</strong> {formData.surname}</p>
                    <p className="mt-2"><strong>Email:</strong> {formData.email}</p>
                    <p className="mt-2"><strong>Phone:</strong> {formData.phone}</p>
                    <p className="mt-2"><strong>Address:</strong> {formData.address}</p>
                    <p className="mt-2"><strong>City:</strong> {formData.city}</p>
                    <p className="mt-2"><strong>Postal Code:</strong> {formData.postalCode}</p>
                    <SendTransaction />
                </div>
            )}
        </div>
    );
}
