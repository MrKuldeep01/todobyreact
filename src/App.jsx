import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  let titleRef = useRef(null);
  let descRef = useRef(null);
  const [count, setCount] = useState(1);
  let [arr, setArr] = useState([]);
  function cancelFun() {
    setTitle("");
    setDesc("");
  }
  function saveFun() {
    if (!title || !desc) {
      alert("please enter the title or description correctly !")
    } else {
      let data = { title: title, desc: desc, key: count };
      arr.push({ ...data });
      setCount(count + 1);
      console.log(arr);
      setTitle("");
      setDesc("");
      
    }
  }
  function deleteHandeler(i, index) {
    let obj = parseInt(i.target.parentNode.parentNode.getAttribute('data-key'));
    if (obj === index) {
      let newArr = [...arr]; // Make a copy of the array
      newArr.splice(index, 1); // Remove the element at the specified index
      setArr(newArr); // Update the state with the new array
    }
  }
  
  let renderTask = arr.map((elm,index)=>{
       return ( 
       <div className="task" title="Task bar" data-key= {index} key= {index}>
        <div className="tasktext" >
          <span className="titletext" title="task heading">{elm.title}</span>
          <p className="desctext" title="task description">{elm.desc}</p>
        </div>
        <span
          className="checkbox"
        > 
        <i className="ri-subtract-line deletebtn" title="delete task" onClick={(i)=>{deleteHandeler(i,index)}}></i>
          <i className="ri-checkbox-blank-line no" title="isDone" onClick={(e) => {
            if (e.target.classList.contains("no")) {
              e.target.classList.remove(
                "ri-checkbox-blank-line",
                "no"
              );
              e.target.classList.add("ri-checkbox-line", "yes");
              e.target.parentNode.parentNode.style.opacity='.6'
            } else {
              e.target.classList.remove(
                "ri-checkbox-line",
                "yes"
              );
              e.target.parentNode.parentNode.style.opacity='1'
              e.target.classList.add(
                "ri-checkbox-blank-line",
                "no"
              );
            }
          }}></i>
        </span>
      </div>
       ) });
  return (
    <>
      <div className="topsec">
        <div className="left">
          <div className="inputbox">
            <input
              type="text"
              name="title"
              ref={titleRef}
              className="title"
              placeholder="Title ..."
              value={title}
              onChange={(evt) => {
                setTitle(evt.target.value);
              }}
            />
            <textarea
              placeholder="description ..."
              ref={descRef}
              name="desc"
              className="desc"
              value={desc}
              onChange={(evt) => {
                setDesc(evt.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="right">
         
          <button
            onClick={(e) => {
              saveFun();
            }}
          >
            save
          </button>
          <button
            onClick={(e) => {
              cancelFun();
            }}
          >cancel
          </button>
        </div>
      </div>
      <div className="herosec">
     {renderTask}
      </div>
    </>
  );
}

export default App;
