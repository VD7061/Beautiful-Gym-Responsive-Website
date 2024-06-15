// PricingForm.jsx
import React from 'react'
import FormButton from '../Buttons/formButton'

const PricingForm = () => {
  return (
    <form>
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          className="w-1/2 border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className=" mb-4">
        <FormButton
          name="Submit"
          size="large"
          className="bg-transparent border-4 border-black hover:bg-black text-black hover:text-white rounded-full font-bold transition-colors duration-300"
        />
      </div>
    </form>
  )
}

export default PricingForm
