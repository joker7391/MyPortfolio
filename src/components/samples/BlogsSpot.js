import React, { useState, useEffect } from "react";
import moment from "moment";
import Comment from "./blogs/Comment";
import EllipsisComponent from "./blogs/EllipsisComponent";
import snoowrap from "snoowrap";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

const r = new snoowrap({
  userAgent: "Beneficial-Coach-769",
  clientId: "QfocOYMGf-n1_Q",
  clientSecret: "f6_rWRiPl4zMJbCTC3tQ0SIK6hJ0yw",
  refreshToken: "648499866206-i-1w74CNE1HuNsCdrs4jPSGJgt2IRw",
});

function Blogs() {
  const [hotList, setHotList] = useState([]);

  useEffect(async () => {
    setHotList(await r.getHot());
  }, []);

  return (
    <>
      {hotList &&
        hotList.map((post, index) => {
          return (
            <div key={index} className="p-8 bg-gray-50">
              <div className="px-5 py-4 bg-white rounded-lg shadow">
                <div className="flex mb-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={isEmpty(post.thumbnail) ? "" : post.thumbnail}
                    alt={
                      isEmpty(post.thumbnail)
                        ? "no image uploaded"
                        : post.thumbnail
                    }
                  />
                  <div className="ml-2 mt-0.5">
                    <span className="block text-base font-medium leading-snug text-black">
                      {"posted by " + post.author.name}
                    </span>
                    <span className="block text-sm font-light leading-snug text-gray-500">
                      {moment.utc(post.created_utc).format("dddd h:mm a")}
                    </span>
                  </div>
                </div>
                <p>{post.title}</p>
                <p className="leading-snug text-gray-800 md:leading-normal">
                  {post.selftext === "" ? (
                    "No descriptions added"
                  ) : (
                    <EllipsisComponent text={post.selftext} />
                  )}
                </p>
                <div className="flex items-center justify-between mt-5">
                  <div className="ml-1 font-light text-gray-500">
                    {post.num_comments === 0 ? (
                      <>
                        <i className="fa fa-comment"></i>
                        Comments (0)
                      </>
                    ) : (
                      <Comment post={post} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Blogs;
