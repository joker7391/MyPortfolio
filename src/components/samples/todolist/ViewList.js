import { isEmpty } from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ViewList({ match }) {
  const { id } = match.params;
  const posts = useSelector((state) => state.post.posts);
  const [selectedList, setSelectedList] = useState({});
  useEffect(() => {
    if (!isEmpty(posts) && id) {
      let index = posts.findIndex((post) => post.id === parseInt(id));
      setSelectedList(posts[index]);
    }
  }, [id, posts]);

  console.log(selectedList);

  return (
    <div className="m-8">
      <div className="my-8 border border-black">
        <p className="w-full p-5 text-2xl text-center">View List</p>
      </div>

      <div>
        {!isEmpty(selectedList) && (
          <div key={selectedList.id}>
            <div className="w-full py-5 my-5 border lg:w-1/2 md:px-4 borderlblack">
              <div className="bg-white hover:shadow-xl">
                <div className="py-4 md:px-10">
                  <h1 className="text-lg font-bold uppercase">
                    {selectedList.name}
                  </h1>
                  <p className="py-4">{selectedList.description}</p>
                  <div className="pt-8">
                    <div className="w-full py-4 text-sm font-medium">
                      {moment(selectedList.date).format("MMMM d YYYY, h:mm a")}
                    </div>
                    <div className="2/3">
                      <div className="text-sm font-medium">
                        SHARE:
                        <a href="#" className="px-1 text-blue-700 ">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" className="px-1 text-cyan-500 ">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" className="px-1 text-red-600 ">
                          <i className="fa fa-google"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/5 mr-2 duration-200 ease-in transform border-2 border-black hover:bg-green-400 hover:text-white hover:border-green-400">
        <Link to="/project-samples/todo-list">
          <button
            type="submit"
            className="w-full py-2 text-xl font-semibold focus:outline-none"
          >
            <i className="fa fa-sign-out"></i>Back to Post
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ViewList;
