import React from "react";

const index = () => {
    return (
        <>
            {/* <div className="w-4/5 h-16  rounded-3xl p-6 items-center">

            </div> */}
            <nav class="border-gray-200 rounded-3xl absolute top-6 bg-lime-500 bg-opacity-50 backdrop-blur-[2px] w-[60%] px-4">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">   
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://i.postimg.cc/tRqqkh53/Screenshot-2024-06-26-212823.png" class="rounded-3xl h-12" alt="Aman Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AMAN VISHWAKARMA</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">About</a>
                            </li>
                            <li>
                                <a href="#  skills" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default index;