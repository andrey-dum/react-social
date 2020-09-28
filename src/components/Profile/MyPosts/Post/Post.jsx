import React from 'react';

//import './index.scss';

import { AiOutlineLike, AiOutlineShareAlt, AiOutlineComment, AiTwotoneLike} from "react-icons/ai";


function Post ({post}) {
  return (
        <div className="post">
            <div className="post-head">
                <div className="post-item-img">
                    <img src="https://olympus.crumina.net/wp-content/uploads/avatars/9/5c34850901fc7-bpthumb.jpg" className="avatar photo" width="50" height="50" alt="Profile Photo" />
                </div>
                <div className="post-meta">
                    <h4 className="post-author m-0">Andrey Dum</h4>
                    <div className="post-info">3 min ago</div>
                </div>
            </div>
            <div className="post-body">
                {post.text}
            </div>
            <div className="post-reactions">
            
                <div className="post-likes">
                    <AiTwotoneLike/> <span>{post.likes}</span>
                </div>
            
               <div className="post-details">
                    <div className="post-action "><AiOutlineLike/>Нравится</div>
                    <div className="post-action "><AiOutlineComment/>Комментировать</div>
                    <div className="post-action "><AiOutlineShareAlt/>Поделится</div>
               </div>
            </div>
        </div>
  );
}

export default Post;