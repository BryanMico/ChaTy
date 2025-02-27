import { useState } from "react"
import GenderCheckbox from "./GenderCheckbox"
import { Link } from "react-router-dom"
import useSignup from "../../hooks/useSignup"

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-black-500">
                ChatY
            </h1>
            <span className="flex items-center justify-center text-center">Sign Up</span>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10" 
                    value={inputs.fullname}
                    onChange={(e)=> setInputs({...inputs, fullname: e.target.value})}/>
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
                     value={inputs.username} onChange={(e)=> setInputs({...inputs, username: e.target.value})} />
                </div>

                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" 
                     value={inputs.password} onChange={(e)=> setInputs({...inputs, password: e.target.value})}/>
                </div>

                <div>
                    <label className="label">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" 
                     value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}/>
                </div>

                <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender}/>

                <Link to="/login" className="flex justify-center text-center text-sm hover:underline hover:text-gray-500 mt-2 inline-block">
                    Already have an account?
                </Link>

                <div>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp