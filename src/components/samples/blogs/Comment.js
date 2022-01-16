import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Replies from "./Replies";

function Comment({ post }) {
  const [commentList, setCommentList] = useState([]);

  const getCommentList = async () => {
    const comments = await post.comments.fetchAll();
    setCommentList(comments);
  };

  return (
    <div>
      <Button onClick={() => getCommentList()}>
        <i className="pr-2 fa fa-comment"></i>
        Comments ({post.num_comments})
      </Button>
      {commentList &&
        commentList.map((data, index) => {
          return (
            <div key={index}>
              <div key={index} className="py-2 bg-gray-50">
                <div className="px-5 py-4 bg-white rounded-lg shadow">
                  <div className="flex mb-4">
                    <div className="font-semibold text-black">
                      <i className="px-2 fa fa-user"></i>
                      {data.author_fullname}
                    </div>
                  </div>
                  <div>{data.body}</div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="ml-1 font-light text-gray-500">
                      {data.replies.length > 0 ? (
                        <Replies rep={data.replies} index={index} />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Comment;
