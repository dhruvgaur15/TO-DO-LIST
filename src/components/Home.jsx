import React,{useEffect, useState} from 'react'
import Task from './Task'
const Home = () =>{
    const initialarr = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    :[];
    const[tasks ,settasks] = useState(initialarr);
    const[title , settitle] = useState();
    const[description , setdescription] = useState("");
    const submitHandler = (e) => {
    e.preventDefault();
    settasks([...tasks , {
        title,description
    }])
    settitle("");
    setdescription("");
    }
    const deletetask = (index) =>{
        const filterdARr = tasks.filter((val,i)=>{
            return i !== index;
        });
        console.log(filterdARr)
        settasks(filterdARr);
       }
       useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));

       }, [tasks])
    return <div className='container'>
        <h1>DAILY GOALS</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title'
            value={title}
            onChange={(e) => settitle(e.target.value)} />
            <textarea placeholder='description'
            value={description}
            onChange={(e) => setdescription(e.target.value)}></textarea>
            <button type='submit' >ADD</button>
        </form>
        {tasks.map((item,index) =>(
            <Task key={index} title={item.title} description={item.description} deletetask={deletetask}
            index={index}/>
        ))}
    </div>
}

export default Home