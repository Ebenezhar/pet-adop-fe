import axios from 'axios';
import { useFormik } from 'formik';
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../API/api';

function AdoptGive() {
  const navigate = useNavigate();
  let petsBreed = {
    dog: ["Poodle", "German Sheperd", "Bull Dog", "Hound", "Golden"],
    cat: ["British Shorthair", "Persian Cat", "Maine Coon Cats"],
  }
  const lookingfor = useParams();
  console.log(lookingfor.type);
  const [breed, setBreed] = useState([])
  let varref = useRef();
  let handleData = () => {
    setBreed(petsBreed[`${varref.current.value}`])
  }
  const formik = useFormik(
    {
      initialValues: {
        inputVar: "",
        age: "",
        inputBreed: '',
        ownerfullname: '',
        email: "",
        phone: '',
        lookfor: '',

      },
      validate: (values) => {
        let errors = {};
        if (!values.age) {
          errors.age = 'Please select the pet age';
        }
        if (!values.inputBreed) {
          errors.inputBreed = 'Please select the pet breed';
        }
        if (!values.ownerfullname) {
          errors.ownerfullname = 'Please Enter your Full name';
        } else if (values.ownerfullname.length < 3) {
          errors.ownerfullname = 'Length must be more than five';
        } if (!values.email) {
          errors.email = 'Please Enter your email-id';
        }
        if (!values.phone) {
          errors.phone = 'Please Enter your contact number';
        }
        return errors;
      },
      onSubmit: async (values) => {
        values.inputVar = varref.current.value;
        values.lookfor = lookingfor.type;
        try {
          const result = await instance.post(`/portal/postpetdata`, values)
          if (result.status === 200) {
            alert(result.data.message)
            navigate("/")
          }

        } catch (error) {
          alert(error)
        }
      }
    }
  )

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ backgroundColor: "#EBF9FF" }} className='col w-60 p-2'>
        {
          lookingfor.type === "adopt" ? <h3 className='p-2'>Adopt a pet</h3> : <h3 className='p-2'>Giveaway</h3>
        }
        <h6 className='p-2'>What pet do you want to adopt?</h6>
        <label className='px-2' for="inputVar">Pet Type*</label>
        <select value={formik.values.type}
          className="form-control w-50 m-2" ref={varref} onChange={handleData} id="inputVar">
          <option value="none" selected></option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <label className='px-2' for="inputBreed">Breed*</label>
        <select value={formik.values.breed}
          onChange={formik.handleChange} className="form-control w-50 m-2" id="inputBreed">
          <option value="">-- select one -- </option>
          {
            breed ? breed.map((e) => {
              return (
                <option value={e}>{e}</option>
              )
            }) : null
          }
        </select>
        {formik.errors.inputBreed ? (
          <span style={{ color: "red" }}>
            {" "}
            {formik.errors.inputBreed}
          </span>
        ) : null}
        <div className='row p-2'>
          <label className='px-2' for="age">Age*</label>
          <input value={formik.values.age}
            onChange={formik.handleChange} className='w-auto m-2' min="0" type={"number"} id='age' />
          {formik.errors.age ? (
            <span style={{ color: "red" }}>
              {" "}
              {formik.errors.age}
            </span>
          ) : null}
        </div>

        <div className='d-flex flex-column'>
          <h6 className='p-2'>
            Please fill in your details
          </h6>
          <label className='px-2' for="name">Full name*</label>
          <input
            onChange={formik.handleChange} value={formik.values.ownerfullname} className='w-50 m-2' type={"text"} id='ownerfullname' />
          {formik.errors.ownerfullname ? (
            <span style={{ color: "red" }}>
              {" "}
              {formik.errors.ownerfullname}
            </span>
          ) : null}
          <label className='px-2' for="email">Email*</label>
          <input value={formik.values.email}
            onChange={formik.handleChange} className='w-50 m-2' type={"email"} id='email' />
          {formik.errors.email ? (
            <span style={{ color: "red" }}>
              {" "}
              {formik.errors.email}
            </span>
          ) : null}
          <label className='px-2' for="phone">Phone*</label>
          <input value={formik.values.phone}
            onChange={formik.handleChange} className='w-50 m-2' type={"text"} id='phone' />
          {formik.errors.phone ? (
            <span style={{ color: "red" }}>
              {" "}
              {formik.errors.phone}
            </span>
          ) : null}
        </div>
      </div>
      <div className='p-2 w-50 m-2 text-end'>
        {
          lookingfor.type === "adopt" ? <button type='submit' style={{ backgroundColor: "#FF6584", color: 'white' }} className=' btn btn-light border border-dark mx-2'>REQUEST FOR ADOPTION</button> :
            <button type='submit' style={{ backgroundColor: "#FF6584", color: 'white' }} className=' btn btn-light border border-dark mx-2'>REQUEST FOR GIVE AWAY</button>
        }

      </div>
    </form>
  )
}

export default AdoptGive