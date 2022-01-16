import React from 'react'
import Res from "../../../images/res.jpg";

function ResponsiveContent() {
    return (
        <>
            <div className="py-8 lg:py-12">
                <img
                    className="border-2 rounded-lg shadow-lg lg:shadow-2xl lg:w-10/12"
                    src={Res}
                    alt="responsive"
                />
            </div>
            <div className="px-8 py-8 lg:py-16">
                <h1 className="px-2 py-2 text-xl font-semibold text-gray-700 hover-link lg:py-2 lg:px-2">
                    <span>
                        <i className="pr-2 fa fa-check-square-o" aria-hidden="true"></i>
                    </span>
              Can create responsive websites from scratch.
            </h1>
                <h1 className="px-2 py-2 text-xl font-semibold text-gray-700 hover-link lg:py-2 lg:px-2">
                    <span>
                        <i className="pr-2 fa fa-check-square-o" aria-hidden="true"></i>
                    </span>
              Able to create client's request UX/UI designs.
            </h1>
                <h1 className="px-2 py-2 text-xl font-semibold text-gray-700 hover-link lg:py-2 lg:px-2">
                    <span>
                        <i className="pr-2 fa fa-check-square-o" aria-hidden="true"></i>
                    </span>
              Always finish tasks before deadline.
            </h1>
                <h1 className="px-2 py-2 text-xl font-semibold text-gray-700 hover-link lg:py-2 lg:px-2">
                    <span>
                        <i className="pr-2 fa fa-check-square-o" aria-hidden="true"></i>
                    </span>
              Can communicate to fellow developers.
            </h1>
                <h1 className="px-2 py-2 text-xl font-semibold text-gray-700 hover-link lg:py-2 lg:px-2">
                    <span>
                        <i className="pr-2 fa fa-check-square-o" aria-hidden="true"></i>
                    </span>
              Work efficient.
            </h1>
                <h1 className="px-2 py-2 text-xl font-semibold text-gray-700 hover-link lg:py-2 lg:px-2">
                    <span>
                        <i className="pr-2 fa fa-check-square-o" aria-hidden="true"></i>
                    </span>
              Fast Learner.
            </h1>
            </div>
        </>
    )
}

export default ResponsiveContent
