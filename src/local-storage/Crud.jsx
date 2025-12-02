import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    //load user from localstorege
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);
            } catch (error) {
                console.error('Error parsing data', error);
                localStorage.removeItem("users");
            }
        }
        setIsLoaded(true); //mark as loaded
    }, []);

    //save users to localstorage (whenever user changes but after initial load)
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isLoaded])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = 'Name is required!';

        if (!email) newErrors.email = 'Email is required!';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email is invalid!';

        if (!age) newErrors.age = 'Age is required!';
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = 'Age must between 1 and 120';

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return
        }

        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() }
            setUsers([...users, newUser]);
        }

        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''
        });
        setErrors({});
    }

    const handleEdit = (user) => {
        setFormData(user)
        setEditMode(true)
    }

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const handleCancel = () => {
        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''
        });
        setEditMode(false);
        setErrors({});
    }
   const handleClearAllData = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all data?");
    if (confirmClear) {
        setUsers([]);                 // clear state
        localStorage.removeItem("users"); // clear localStorage
        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''
        });
        setErrors({});
        setEditMode(false);
    }
};


    return (
        <div className='formnew'>
            <h1>Simple CRUD</h1>
            <form onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        placeholder='Your name'
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>

                {/* email */}
                <div>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder='Your email'
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                {/* age */}
                <div>
                    <input
                        type="number"
                        name='age'
                        value={formData.age}
                        placeholder='Your age'
                        onChange={handleChange}
                    />
                    {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
                </div>

                <button type='submit'>{editMode ? "Update" : "Add"}</button>
                {editMode && (
                    <button onClick={handleCancel} type='button' style={{ marginLeft: '10px' }}>Cancel</button>
                )}
            </form>


            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h2>User List</h2>
                {/* clear button */}
                {users.length > 0 && (
                    <button onClick={handleClearAllData}
                        style={{
                            background: 'red',
                            color: 'white',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginLeft: '30px'
                        }}
                    >
                        Clear All Data
                    </button>
                )}
            </div>

            {/* table */}
            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button style={{ marginLeft: '10px' }}
                                        onClick={() => handleDelete(user.id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users added yet.</p>
            )}
        </div>
    )
}

export default Crud