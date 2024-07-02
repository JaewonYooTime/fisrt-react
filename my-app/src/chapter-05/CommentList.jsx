import React from 'react';
import Comment from './Comment';

// function CommentList(props){
//   return (
//     <div>
//       <Comment name={"유재원"} comment={"안녕하세요. 유재원입니다."}/>
//       <Comment name={"김수연"} comment={"안녕하세요. 파이썬 재미있어요~!!"}/>
//       <Comment name={"흑석동 치타"} comment={"안녕하세요. 오늘 뛰시나요?"}/>
//     </div>
//   )
// }

const comments = [
  {
    name: "유재원",
    comments: "안녕하세요, 유재원입니다.",
  },
  {
    name: "김수연",
    comments: "안녕하세요, 파이썬 재미있어요~!!",
  },
  {
    name: "흑석동 치타",
    comments: "안녕하세요, 오늘 뛰시나요?",
  },
]

function CommentList(props){
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comments} />
        )
      })}
    </div>
  )
}

export default CommentList;