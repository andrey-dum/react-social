import React from 'react';
import Post from './Post/Post';

//import './index.scss';



function MyPosts ({state, posts, dispatch}) {

  const textarea = React.createRef();
  
  const onAddPost = () => {
    dispatch({ 
      type: 'ADD_POST'
    });
  }

  const onUpdatePost = () => {
    let text = textarea.current.value;
    dispatch({ 
      type: 'UPDATE_NEW_POST_TEXT', NewPosttext: text });
  }

  return (
    <div className="posts box">
        <div className="new-post">
                <h3>Создать публикацию </h3>
            <div className="textarea-wrap">
                <textarea ref={textarea} onChange={onUpdatePost} value={state.NewPosttext} placeholder="Что у вас нового?" name="" id="" cols="70" rows="5"></textarea>
            </div>
            <div>{state.NewPosttext}</div> 
            <div className="btn-wrap">
            <button className="button" onClick={onAddPost}>Опубликовать</button>
            </div>
        </div>
        
        {/* { posts.length >=1 ? posts.map(post => <Post key={post.id} post={post} />) : <div className="empty-posts"><h3>Записей нету...</h3></div>} */}
        { posts.map(post => <Post key={post.id} post={post} />) }
         
    </div>
  );
}

export default MyPosts;