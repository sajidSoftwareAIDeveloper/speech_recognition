import React, {useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime';
import { Text_speech } from './text_speech';
import {Button, Button1} from './Button';

export function SpeechToText(){
  const textWrite=useRef();
  const [speech,setSpeech]=useState();

  const {  
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous:true,language:'en-IN' });

  function listenHandle(event){
    event.preventDefault();
    const speak=textWrite.current.value;

    if(speak.length!==null){
      Text_speech(speak);  
    }
   if(speak.length===0) {
      Text_speech('please inter');
    }
  }
  
  function listenHandle1(){
    if(transcript){
      Text_speech(transcript);
       Text_speech(speech);
    }else Text_speech('please start microphone and then listen');
  }

  useEffect(()=>{
    setSpeech(transcript);
  },[]);

  return (
    <div className="p-5">  

      <form onSubmit={listenHandle}>
        <label htmlFor='text'/>
           <textarea type='text' name='text' id="text" ref={textWrite} className='w-full p-2 rounded-xl'/>
          <br/> 
          <Button1 name="listen"/>
      </form>

      <p className='text-red-500 text-3xl'>Microphone: {listening ? 'on' : 'off'}</p>
        <Button name="Start" clickHandle={startListening}/>
        <Button name="Stop" clickHandle={SpeechRecognition.stopListening}/>
        <Button name="Reset" clickHandle={resetTranscript}/>
        <Button name="listen" clickHandle={listenHandle1}/>
      <p className="w-full h-28 border-red-200 border bg-white text-red-400 rounded-xl">{transcript}</p>

    
    </div>
  );
};
