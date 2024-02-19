import React, { useEffect, useState } from 'react';
import { chat } from './chat';  // chat.js のインポート
 
const App = () => {
  // メッセージの状態管理用
  const [ message, setMessage ] = useState( '' );
  // 回答の状態管理用
  const [ answer, setAnswer ] = useState( '' );
  const [showMessage , setShowessage] = useState('')
  // メッセージの格納
  const handleMessageChange = ( event )  => {
    setMessage( event.target.value );
  }
 
  // ボタンを押したときの処理
  const handleSubmit = async ( event ) => {
    event.preventDefault();
    setShowessage( message )
    setMessage('')

    // chat.js にメッセージを渡して API から回答を取得
    const responseText = await chat( message );
 
    // 回答の格納
    setAnswer( responseText );
    
  }



  return (
    <div>
      <div className='box'>
        <p className='name'>理沙</p>
        {
          showMessage && (
            <div className='you'>
              <h2>あなた：</h2>
              <p>{showMessage}</p>
            </div>
          )
        }
        { answer && (
          <div className='risa'>
            <h2>理沙:</h2>
            <p>{ answer }</p>
          </div>
        ) }

        <form onSubmit={ handleSubmit } className='form'>
        <label className='label'>
          <input type="text" value={ message }
            onChange={ handleMessageChange } className='input'/>
        </label>
        <div className="btn">
          <button type="submit" className='btnBox'>送信</button>
        </div>
      </form>
      </div>



    </div>
  );
}
 
export default App;