import React from 'react';
import Post from './Post/Post';

//import './index.scss';



function MyPosts ({posts}) {

  return (
    <div className="posts box">
        <div className="new-post">
                <h3>Создать публикацию </h3>
            <div className="textarea-wrap">
                <textarea placeholder="Что у вас нового?" name="" id="" cols="70" rows="5"></textarea>
            </div>
            <div className="btn-wrap">
            <button className="button">Опубликовать</button>
            </div>
        </div>
        
        { posts.length >=1 ? posts.map(post => <Post key={post.id} post={post} />) : <div className="empty-posts"><h3>Записей нету...</h3></div>}
        
         
    </div>
  );
}

export default MyPosts;