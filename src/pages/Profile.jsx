import { useState, useEffect } from 'react';
import profileData from "../assets/userProfile.json"

const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        setProfile(profileData);
    }, []);

    const handleChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>

            <div className="space-y-4">
                <Input label="Name" value={profile.name} onChange={(e) => handleChange('name', e.target.value)} />
                <Input label="Email" value={profile.email} onChange={(e) => handleChange('email', e.target.value)} />
                <Input label="Phone" value={profile.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                <Input label="Address" value={profile.address} onChange={(e) => handleChange('address', e.target.value)} />

                <div>
                    <h2 className="text-lg font-semibold mt-6 mb-2">Card Details</h2>
                    <Input label="Card Number" value={profile.card?.number} onChange={(e) => setProfile(p => ({ ...p, card: { ...p.card, number: e.target.value } }))} />
                    <Input label="Expiry Date" value={profile.card?.expiry} onChange={(e) => setProfile(p => ({ ...p, card: { ...p.card, expiry: e.target.value } }))} />
                    <Input label="Card Holder Name" value={profile.card?.name} onChange={(e) => setProfile(p => ({ ...p, card: { ...p.card, name: e.target.value } }))} />
                </div>

                <div>
                    <h2 className="text-lg font-semibold mt-6 mb-2">Recent Orders</h2>
                    {profile.orders?.map((order, index) => (
                        <div key={index} className="border p-3 rounded-md mb-2 bg-gray-50">
                            <p><strong>ID:</strong> {order.id}</p>
                            <p><strong>Item:</strong> {order.item}</p>
                            <p><strong>Amount:</strong> {order.amount}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Input = ({ label, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type="text"
            value={value || ''}
            onChange={onChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
        />
    </div>
);

export default Profile;
