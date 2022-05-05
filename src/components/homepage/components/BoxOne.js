import React from 'react'

function BoxOne() {
    return (
        <div className="max-w-xs mr-2 bg-gray-100 border-2 rounded-lg shadow-lg lg:ml-0">
            <div className="px-4 py-4 text-4xl text-center">
                <i className="px-4 py-3 text-white bg-gray-700 border-2 rounded-full fa fa-file-code-o"></i>
            </div>
            <h1 className="text-2xl font-semibold text-center">Frontend</h1>
            <div className="px-6 py-4 text-center">
                <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-400 rounded-full">
                    React JS
                  </span>
               
             
                <span className="inline-block px-3 py-1 mt-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-400 rounded-full">
                    React Native
                  </span>
               
                <span className="inline-block px-3 py-1 mt-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-400 rounded-full">
                    Tailwind CSS
                  </span>
            </div>
        </div>
    )
}

export default BoxOne
