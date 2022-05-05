import React from 'react'

function BoxThree() {
    return (
        <div className="max-w-xs mr-2 bg-gray-100 border-2 rounded-lg shadow-lg lg:ml-0">
            <div className="px-4 py-4 text-4xl text-center">
                <i
                    className="px-4 py-3 text-white bg-gray-700 border-2 rounded-full fa fa-wrench"
                    aria-hidden="true"
                ></i>
            </div>
            <h1 className="text-2xl font-semibold text-center">Tools</h1>
            <div className="px-6 py-4 text-center">
                <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-400 rounded-full">
                    Gitlab
                  </span>
                <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-400 rounded-full">
                    Git Bash Terminal
                  </span>
                
                
            </div>
        </div>
    )
}

export default BoxThree
