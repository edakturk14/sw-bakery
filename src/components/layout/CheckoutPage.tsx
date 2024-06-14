'use client';
import React, { useState, useRef } from 'react';
import { SendTransaction } from '../sendTransaction';

export function CheckoutPage() {
    const [isFormVisible, setFormVisible] = useState(true);
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (modalRef.current) {
            modalRef.current.showModal();
        }
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
                                <input type="text" className="input-custom" placeholder="Enter your name" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">Surname</span>
                                </label>
                                <input type="text" className="input-custom" placeholder="Enter your surname" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input-custom" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="tel" className="input-custom" placeholder="Enter your phone number" />
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" className="input-custom" placeholder="Enter your address" />
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input type="text" className="input-custom" placeholder="Enter your city" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">Postal Code</span>
                                </label>
                                <input type="text" className="input-custom" placeholder="Enter your postal code" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Save</button>
                    </form>
                </div>
            ) : (
                <div className="text-center">
                    <h3 className="font-bold text-lg">🧁 Order Summary</h3>
                    <h3 className="font-bold text-lg">🚗 Address: </h3>
                    <p>Your order has been received. Proceed to payment.</p>
                </div>
            )}
            {!isFormVisible && <SendTransaction />}
        </div>
    );
}
