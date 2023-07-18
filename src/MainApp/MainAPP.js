import React, { Fragment, useState } from 'react';
import "./MainApp.css"
import logo from "../images/MSPLogo.svg"
import Emoji1 from "../images/Emoji1.png"
import Emoji2 from "../images/Emoji2.png"
import Emoji3 from "../images/Emoji3.png"
import Emoji4 from "../images/Emoji4.png"
import mainImage from "../images/mainImage.png"
import Emotions from '../Emotions/Emotions';
import Record from '../Record/Record';


const MainAPP = () => {
  const images = [Emoji1, Emoji2, Emoji3, Emoji4]
  
  const [records , setRecords] = useState([]) 
 // const list = []
    const recordData = () => {
    const text = document.getElementsByTagName("input")[0];
    const emoji = document.querySelector("input[type='radio']:checked");
    if (text.value && emoji) {
      setRecords([...records,{text: text.value, emoji: images[emoji.value]}])
      //records.push({ text: text, emoji: records.map[emoji.valu] })
      text.value = "";
      emoji.checked = false;


    }
    else {
      alert("Please enter all data");
    }
    console.log(records)
  }
  const deleteRecord = (deleteIndex , event) =>{
   setRecords(records.filter((record,indx)=>deleteIndex !== indx)) 
  }
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} />
        </div>
        <h1>Recording Feelings</h1>

      </header>
      <main>
        <section>
          <input type="text" placeholder="Write your feelings here"></input>
          <div className="section">
            <div>
              <p>Select Emoji</p>
              <div className="Emoji">
                <Emotions images={images} />
              </div>
            </div>
            <button onClick={recordData}>Record</button>
          </div>

        </section>
        <img src={mainImage} alt="main-image" />


        <section>
          <Record list={records} deleteRecords = {deleteRecord} />
        </section>
      </main>

    </>
  )
}

export default MainAPP;