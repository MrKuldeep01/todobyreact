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
  let renderTask = arr.map((elm)=>{
       return ( <div className="task">
        <div className="tasktext">
          <span className="titletext">{elm.title}</span>
          <p className="desctext">{elm.desc}</p>
        </div>
        <span
          className="checkbox"
        >
          <i className="ri-checkbox-blank-line no" onClick={(e) => {
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
