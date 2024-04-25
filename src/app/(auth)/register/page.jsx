import Image from 'next/image';
import { registerService } from '@/service/register.service';
import { redirect } from 'next/navigation';

const RegisterPage = () => {
  async function handleRegister(userInfo) {
    'use server'
    console.log("userinfor",userInfo)
    const newUserInfo = {
      firstname: userInfo.get("firstname"),
      lastname: userInfo.get("lastname"),
      email: userInfo.get("email"),
      gender: userInfo.get("gender"),
      password: userInfo.get("password"),
    };

    console.log("user",newUserInfo)
    const res = await registerService(newUserInfo);
    console.log("res", res);
    if (res.status == 200) {
      redirect("/login")
    } 
  }
  
  return (
    <main className="bg-white w-screen h-screen flex-col items-center justify-between grid grid-cols-12 grid-rows-1 gap-1">
      <div className="col-span-7 h-screen py-10 pl-5">
        <div className="">
          <form class="max-w-md mx-auto mt-6" action={handleRegister}>
          <Image className='mb-10' src="../assets/icons/logo.svg" alt="Logo" width={178} height={128} />
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
              <label
                  for="firstname"
                  class="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  First Name :
                </label>
                <input
                  type="text"
                  class="text-black mt-3 w-full px-4 py-2 rounded-lg text-[0.75rem] bg-[#EEEEEE] placeholder-[#555555] focus:outline-none focus:border-[#EEEEEE]
                  focus:bg-[#EEEEEE]"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your name.."
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
              <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
Last Name :
                </label>
                <input
                  type="text"
                  class="text-black mt-3 w-full px-4 py-2 rounded-lg text-[0.75rem] bg-[#EEEEEE] placeholder-[#555555] focus:outline-none focus:border-[#EEEEEE]
                  focus:bg-[#EEEEEE]"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your name.."
                  required
                />
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
              <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email  :
                </label>
                <input
                  type="text bg-gray-"
                  class="text-black mt-3 w-full px-4 py-2 rounded-lg text-[0.75rem] bg-[#EEEEEE] placeholder-[#555555] focus:outline-none focus:border-[#EEEEEE]
                  focus:bg-[#EEEEEE]"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
              <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Gender :
                </label>                           
                <select id="gender" name="gender" className="text-black mt-3 w-full px-4 py-2 rounded-lg text-[0.75rem] bg-[#EEEEEE] placeholder-[#555555] focus:outline-none focus:border-[#EEEEEE]">
                  <option>Male</option>
                  <option>female</option>
                  <option>other</option>
                </select>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
              <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password :
                </label>
                <input
                  type="password"
                  class="text-black mt-3 w-full px-4 py-2 rounded-lg text-[0.75rem] bg-[#EEEEEE] placeholder-[#555555] focus:outline-none focus:border-[#EEEEEE]
                  focus:bg-[#EEEEEE]"
                  id="password"
                  name="password"
                  placeholder="............"
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
              <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm Password  :
                </label>
                <input
                  type="password"
                  class="text-black mt-3 w-full px-4 py-2 rounded-lg text-[0.75rem] bg-[#EEEEEE] placeholder-[#555555] focus:outline-none focus:border-[#EEEEEE]
                  focus:bg-[#EEEEEE]"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="............"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-[#306bff] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="col-span-5 h-screen flex items-center justify-center">
        <div class="m-12 xl:m-16 w-full bg-contain bg-no-repeat">
          <div className="rounded-lg mx-auto flex items-center justify-center">
          <Image src="../assets/icons/sign-up.svg" alt="Logo" width={400} height={200} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
