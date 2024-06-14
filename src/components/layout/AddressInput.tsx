'use client'

import React, { useState } from 'react';

export function AddressInput() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
        modal.showModal();
    };

    return (
        <div className="form-control w-full border rounded-lg shadow-md">
            <div className="max-w-3xl p-4">
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
                    <button type="submit" className="btn btn-primary w-full">Submit</button>
                </form>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Order Received! 🚗🧁</h3>
                    <p className="py-4">We have received your order.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
