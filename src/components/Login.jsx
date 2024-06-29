import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast'
import { useAuth} from '../context/AuthProvider';
import { SERVER_URL } from '../utils/helper';

function Login() {
    const [authUser, setAuthUser] = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate();

      const onSubmit =  async (data) => {
        const userInfo = {
          email:data.email,
          password:data.password,
        };
        try {
          const {data} = await axios.post(SERVER_URL + "/user/login", userInfo)
          console.log("ji", SERVER_URL);
          if(data){
           toast.success("Loggedin Successfully");
           document.getElementById("my_modal_3").close();
           console.log('dataUser',data.user)
             localStorage.setItem("Users",JSON.stringify(data.user));
              setAuthUser(data.user)
              navigate('/course')
          } 

        } catch (err) {
          if(err.response){ 
            console.log("hi", err)
            console.log("hi", import.meta.env.SERVER_URL)
            toast.error("Error:"+ err.response.data.message);
          }
        }
          
      }
  return (
    // id has been used in navbar section of login button
    <div className="dark:bg-slate-900 dark:text-black">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
          <button
              type="button"
              onClick={()=>document.getElementById('my_modal_3').close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
         
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2" >
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none "
               {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
          </div>
          {/* password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="type"
              placeholder="password"
              className="w-80 px-3 py-1 border rounded-md outline-none "
              {...register("password", { required: true })}
            />
             <br />
            {errors.password && <span  className="text-sm text-red-500" >This field is required</span>}
          </div>
          {/* button */}
          <div className="flex justify-around mt-4">
            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
            <p>
                Not registered? {" "}
                 <Link to={'/signup'} className="underline text-blue-500 cursor-pointer">Signup</Link>{" "}
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
