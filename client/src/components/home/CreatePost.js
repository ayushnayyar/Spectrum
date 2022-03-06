import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import FileBase from 'react-file-base64';

import Avatar from '../../assets/images/man.png';
import Plus from '../../assets/icons/Plus';

import { createPost } from '../../actions/posts';
import '../../common/home/create-post.scss';

const CreatePost = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  const [rows, setRows] = useState(1);
  const [fileKey, setFileKey] = useState(Date().now);
  // const [postText, setPostText] = useState('');
  const [postData, setPostData] = useState({
    description: '',
    tags: '',
    selectedFile: '',
  });

  useEffect(() => {
    const rowlen = postData.description.split('\n');

    if (rowlen.length >= 1) {
      setRows(rowlen.length);
    }
  }, [postData.description]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createPost({ ...postData, name: user?.result?.name }));

    setPostData({ ...postData, description: '', selectedFile: '' });

    setFileKey(Date.now());
  };

  const getBase64 = async (file, callback) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      callback(reader.result);
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  if (!user?.result?._id) {
    return <h3>Please sign in to post.</h3>;
  }

  return (
    <div className="Create__Post">
      <form
        className="Create__Post__Form"
        autoComplete="off"
        noValidate
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="Create__Post__PrimaryRow">
          <div className="Create__Post__Logo">
            <img src={Avatar} />
          </div>
          <div className="Create__Post__TextField">
            <textarea
              className="Create__Post__TextArea"
              onChange={(text) => {
                setPostData({ ...postData, description: text.target.value });
                // setPostText(text.target.value);
              }}
              value={postData.description}
              rows={rows}
              type="text"
              placeholder=" What's new, Ayush?"
            />
          </div>
        </div>
        <div className="Create__Post__SecondaryRow">
          <div className="Create__Post__FileImage">
            <input
              key={fileKey}
              type="file"
              multiple={false}
              onChange={(event) => {
                getBase64(event.target.files[0], (result) =>
                  setPostData({ ...postData, selectedFile: result })
                );
              }}
              accept="jpg, jpeg, png"
            />
            {/* <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          /> */}
          </div>
          <div className="Create__Post__Button">
            <button
              type="submit"
              onClick={() => {
                console.log('Clicked');
              }}
            >
              <Plus />
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
