export function Text_speech(message){
    let utterance = new SpeechSynthesisUtterance(message);
    let voicesArray = speechSynthesis.getVoices();
  //  utterance.rate=5;
   // utterance.pitch=2;  
    utterance.voice = voicesArray[2];  
    speechSynthesis.speak(utterance);
}