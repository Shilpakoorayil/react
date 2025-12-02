import React, { useState } from 'react'
import './FormSample.css'

const FormSample = () => {

const [formData, setFormData] = useState({
  card: '',
  month: '',
  year: '',
  cvv: '',
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  zip: '',
  city: '',
  country: 'United States',
  state: '',
  email: ''
});


  const [sameAsShipping, setSameAsShipping] = useState(false);


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;


    setFormData(prev => ({
      ...prev,
      [name]: value

    }))
  }

const validation = () => {
  const newErrors = {};

  if (!formData.card) newErrors.card = "Card number required";
  if (!formData.month) newErrors.month = "Month required";
  if (!formData.year) newErrors.year = "Year required";

  if (!formData.cvv || !/^\d{3}$/.test(formData.cvv)) {
    newErrors.cvv = "CVV must be 3 digits";
  }

  if (!formData.firstName) newErrors.firstName = "First name required";
  if (!formData.lastName) newErrors.lastName = "Last name required";
  if (!formData.address1) newErrors.address1 = "Address required";
  if (!formData.zip) newErrors.zip = "ZIP required";
  if (!formData.city) newErrors.city = "City required";

  if (!formData.country) newErrors.country = "Please select your Country";
  if (!formData.state) newErrors.state = "Please select your State";

  if (!formData.email) {
    newErrors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  return newErrors;
};

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
        card: '',
        month: '',
        year: '',
        cvv: '',
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        zip: '',
        city: '',
        country: 'United States',
        state: '',
        email:'',
        checkbox:'',
      })
    }

  }

  return (

    <form onSubmit={handleSubmit}>
      <div><h4>BILLING INFO</h4></div>
      {/* CARD */}
      <div>

        <input
          type="text"
          name='card'
          value={formData.card}
          placeholder='#card'
          onChange={handleChange}

        />

        {errors.card && <p style={{ color: 'red' }}>{errors.card}</p>}
      </div>
      {/* ..........Month year abd cvv....................... */}
      {/* Month Dropdown */}
      <div className="row">

        {/* Month */}
        <div>
           <select name="month" value={formData.month} onChange={handleChange}>
          <option value="">Month</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        
        </select>
          {errors.month && <p style={{ color: 'red' }}>{errors.month}</p>}
        </div>
       

        {/* Year */}
      <div>
          <select name="year" value={formData.year} onChange={handleChange}>
          <option value="">Year</option>
          {Array.from({ length: 10 }, (_, i) => {
            const year = new Date().getFullYear() + i;
            return <option key={year} value={year}>{year}</option>;
          })}
         
        </select>
       
  {errors.year && <p style={{ color: 'red' }}>{errors.year}</p>}
      </div>
        {/* CVV */}
       <div>
         <input
          type="password"
          name="cvv"
          placeholder="CVV"
          maxLength="3"
          value={formData.cvv}
          onChange={handleChange}
        />
        {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
      </div>
       </div>
      {/* .................................. */}
      <div className="row-name">
       <div>
         <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
       </div>
        <div>
          <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        </div>
      </div>
      {/* ...................................... */}

      {/* Address Line 1 */}
      <div className="address-group">

        <input
          type="text"
          name="address1"
          placeholder="Address 1"
          value={formData.address1}
          onChange={handleChange}
        />
        {errors.address1 && <p style={{ color: 'red' }}>{errors.address1}</p>}
      </div>

      {/* Address Line 2 */}
      <div className="address-group">

        <input
          type="text"
          name="address2"
          placeholder="Address 2(optional)"
          value={formData.address2}
          onChange={handleChange}
        />
        {errors.address2 && <p style={{ color: 'red' }}>{errors.address2}</p>}
      </div>
      {/* zip and city */}
      <div className="zip-city">
       <div>
         <input
          type="text"
          name="zip"
          placeholder="ZIP "
          value={formData.zip}
          onChange={handleChange}
        />
        {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}
       </div>
        <div>
          <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        /> {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
        </div>

      </div>
      {/* ..................United states and states .....*/}
      <div className="us-states">
        {/* Country */}
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="United States">United States</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
        </select>
       {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}

        {/* State */}
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
          <option value="New York">New York</option>
        </select>
        {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
      </div>
      {/* ................................................ */}

      {/* .............email.......... */}

      <div>
        <input
          type='email'
          name='email'
          value={formData.email}
          placeholder='Email'
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>



      {/* ...shipping ........ */}

      <div className="checkbox-row">
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={sameAsShipping}
            onChange={(e) => setSameAsShipping(e.target.checked)}
          />
          Use above information for shipping
        </label>
      </div>


      <button type='submit'>Continue</button>

    </form>
  )
}

export default FormSample
