import {useState} from "react"
import "./index.css"

const Home=()=>{
    const [str,setState]=useState("")
    const [replacestring,setstr]=useState("");
    const [replacewith,setReplaceWith]=useState("");
    const [afterreplaced,setAfterReplaced]=useState("");
    const change=(event)=>{
            setState(event.target.value)   
    }

   

    const changeReplaceString=()=>{
        const input=str;
        const replaceWith=replacewith;
        const replaceString=replacestring;
        setState("")
        setstr("")
        setReplaceWith("")
        if (replacestring!=="" && replacewith!==""){
            setAfterReplaced(input.replaceAll(replaceWith,replaceString))
            console.log(str)
        } 

    }
    const ReplaceString=(event)=>{
              setstr(event.target.value)
    }
    const ReplaceWith=(event)=>{
        setReplaceWith(event.target.value)
    }

    const charCount=()=>{
        let c=0;
        for(let i of str){
            if(i!==" " && i!==","){
                c++;
            }
        }
        return c
    }

    const word=()=>{
        let len=str.split(" ").length
        return len-1
    }
    const wordcount=word();
    const chrcount=charCount()
    return(
        <div className="Home">
            <textarea className="input" placeholder="Enter Text"  type="textarea" rows="5" cols="50" onChange={change} value={str}></textarea>
            <div className="count-cont">
            <div className="sub-count-cont">
            <p className="para">wordscount:</p>
            <p className="para">{wordcount}</p>
            </div>
            <div className="sub-count-cont">
            <p className="para">charecters:</p>
            <p className="para">{chrcount}</p>
            </div>
            </div>
            <input className="input" type="text" onChange={ReplaceString} value={replacestring} placeholder="Enter String"/>
            <input className="input" type="text" onChange={ReplaceWith} value={replacewith} placeholder="Replace With"/>
            <button type="button" className="button" onClick={changeReplaceString}>Replace All</button>
            <div className="sub-count-cont">
            <p className="para">After Replcaed:</p>
            <p className="para">{afterreplaced}</p>
            </div>
        </div>
    )
}


export default Home