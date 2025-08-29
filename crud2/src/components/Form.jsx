import React, { useState,useEffect } from 'react'
import { postData, updateData } from '../api/PostApi'
const Form = ({ data, setData, updateDataApi, setUpdataDataApi }) => {

  const [addData, setAddData] = useState({
    title: "",
    body: ""
  })

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev => {
      return {
        ...prev,
        [name]: value,
      }
    }))
  }

  const addPostData = async () => {
    const res = await postData(addData);
    console.log(res);
    if (res.status === 201) {
      setData([...data, res.data])
      setAddData({ title:"", body: "" });
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  }

  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      setData((prev) => {
        return prev.map((curElem) => (
          curElem.id === res.id ? res.data : curElem
        ))
      })
      setAddData({ title: " ", body: " " });
      setUpdataDataApi({});
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || ""
      })
  }, [updateDataApi]);

  let isEmpty = Object.keys(updateDataApi).length === 0;

  return (
    <div style={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input type="text"
            autoComplete='off'
            name="title"
            id="title"
            placeholder='Add Title'
            value={addData.title}
            onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="body"></label>
          <input type="text"
            autoComplete='off'
            name="body"
            id="body"
            placeholder='Add post'
            value={addData.body}
            onChange={handleInputChange} />
        </div>
        <button type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
      </form>
    </div>
  )
}

export default Form