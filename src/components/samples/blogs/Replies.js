import React, { useEffect, useState } from "react";
import moment from "moment";
import { isEmpty } from "lodash";

function Replies({ rep }) {
  const [replyElements, setReplyElements] = useState([]);
  let testArray = [];
  useEffect(() => {
    getReplies(rep);
  }, []);

  const getReplies = (replies, count = 0) => {
    count++;
    if (replies) {
      replies.map((data, index) => {
        testArray.push(
          <div
            key={index}
            style={{
              padding: 10,
              marginLeft: 25 * count,
            }}
          >
            <h5 className="font-semibold text-black">
              {data.author_fullname +
                " " +
                moment.utc(data.created_utc).format("dddd h:mm a")}
            </h5>
            <p>{data.body}</p>
          </div>
        );
        if (!isEmpty(data.replies)) {
          getReplies(data.replies, count);
        } else {
          setReplyElements(testArray);
        }
      });
    }
  };

  return (
    <>
      <div className="font-semibold text-black">
        <i className="fa fa-pencil-square-o"></i>
        Replies
      </div>
      <p>{replyElements}</p>
    </>
  );
}

export default Replies;
