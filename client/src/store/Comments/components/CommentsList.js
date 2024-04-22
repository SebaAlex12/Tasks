import React from "react";

import { StyledCommentList } from "../styles/StyledCommentList";
import CommentsItem from "./CommentsItem";

const CommentsList = ({comments, responsiblePerson}) => {

    const commentsContent = comments.length > 0
      ? comments.map((comment) => {
          return (
            <CommentsItem
              item={comment}
              key={comment._id ? comment._id : Math.random()}
              responsiblePerson={responsiblePerson}
            />
          );
        })
      : "no comments";

    return (
      <StyledCommentList>
        <ul className="comments-list-box list-group">{commentsContent}</ul>
      </StyledCommentList>
    );
}

export default CommentsList;
