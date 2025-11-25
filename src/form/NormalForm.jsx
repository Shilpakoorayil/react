import React, { useState } from 'react';
import './form.css';

const NormalForm = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmpassword: '',
        gender: '',
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;


        setFormData(prev => ({
            ...prev,
            [name]: value

        }))
    }

    const validation = () => {
        const newErrors = {}

        const { name, email, age, password, confirmpassword, gender } = formData;


        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if ((!/^\S+@\S+\.\S+$/.test(email))) newErrors.email = "Email is inValid";
        if (!age) newErrors.age = "Age is required";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";


        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be atleast 6 charaters/numbers";

        if (!confirmpassword) newErrors.confirmpassword = "Please Confirm Password is requird";
        else if (password != confirmpassword) newErrors.confirmpassword = "Password do not match";


        if (!gender) newErrors.gender = "Gender is required";

        return newErrors;


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation();
        if (Object.keys(validationErrors).length > 0) {//["name","email"...]
            setErrors(validationErrors)

        } else {
            setErrors({})
            alert("Form  Submitted Successfully!");
            console.log("form data : ", formData);
            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmpassword: '',
                gender: '',

            })
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Name */}
            <div>

                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    placeholder='Name'
                    onChange={handleChange}

                />

                {errors.name && <p style ={{color:'red'}}>{errors.name}</p>}
            </div>
            {/* .............email.......... */}

            <div>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    placeholder='Email'
                    onChange={handleChange}
                />
                 {errors.email && <p style ={{color:'red'}}>{errors.email}</p>}
            </div>
            {/* .........Age........... */}
            <div>
                <input
                    type='text'
                    name='age'
                    value={formData.age}
                    placeholder='Age'
                    onChange={handleChange}
                />
                   {errors.age && <p style ={{color:'red'}}>{errors.age}</p>}
            </div>
            {/*............ Password............... */}

            <div>
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    placeholder='Password'
                    onChange={handleChange}
                />
                   {errors.password && <p style ={{color:'red'}}>{errors.password}</p>}
            </div>
            {/*................. Confirm Password ................. */}
            <div>
                <input
                    type='password'
                    name='confirmpassword'
                    value={formData.confirmpassword}
                    placeholder='Confirm Password'
                    onChange={handleChange}
                />
                   {errors.confirmpassword && <p style ={{color:'red'}}>{errors.confirmpassword}</p>}
            </div>
            {/* ...Gender ........ */}
            <div>
                <label>
                    <input
                        type="radio"
                        name='gender'
                        value="male"
                        onChange={handleChange}
                        checked={formData.gender === "male"}
                    />
                    Male
                </label>
                 
                <label>
                    <input
                        type="radio"
                        name='gender'
                        value="female"
                        onChange={handleChange}
                        checked={formData.gender === "female"}
                    />
                    Female
                </label>
                   {errors.gender && <p style ={{color:'red'}}>{errors.gender}</p>}
            </div>
            <button type='submit'>Submit </button>

        </form>
    )
}

export default NormalForm
