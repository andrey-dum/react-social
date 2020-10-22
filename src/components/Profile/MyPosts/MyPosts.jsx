import React from 'react';
import Post from './Post/Post';

//import './index.scss';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../common/FormControls/FormControls';
import { required } from '../../../utils/validators/validator';


const MyPosts = React.memo(({posts, addPost}) => {

  
  const onAddPost = (formData) => {
    addPost(formData.newPostText)
    console.log(formData)
  }

  // function compare(a, b) {
  //   return a - b;
  // }
  return (
    <div className="posts box">
        <div className="new-post">
                <h3>Создать публикацию </h3>
                <AddPostFormRedux onSubmit={onAddPost} />
        </div>
        
        {/* { posts.length >=1 ? posts.map(post => <Post key={post.id} post={post} />) : <div className="empty-posts"><h3>Записей нету...</h3></div>} */}
        { posts.map(post => <Post key={post.id} post={post} />) }
         
    </div>
  );
})

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="textarea-wrap">
        <Field placeholder="Что у вас нового?" name="newPostText" component={Textarea} validate={[required]} />
       </div>
        <div className="btn-wrap">
          <button className="button">Опубликовать</button>
        </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(AddPostForm);

export default MyPosts;