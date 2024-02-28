import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({ //0
    이름: '',
    nickname: '',
    email : ''
  });


  const { 이름, nickname, email } = inputs; // 비구조화 할당을 통해 값 추출
  //const 이름 = inputs.이름  => ''
  //const nickname = inputs.nickname => ''
  //const email = inputs.email   => ''
  const onChange = (e) => {

    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    // const value = e.target.value
    // const name = e.target.name 

    setInputs({
      ...inputs, // 기존의 inputs 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      이름: '',
      nickname: '',
      email: '',
    })
   
  };


  return (
    <div>
      <input name="이름" placeholder="이름을쓰세요" onChange={onChange} value={이름} />
      <input name="nickname" placeholder="닉네임을쓰세요" onChange={onChange} value={nickname}/>
      <input name="email" placeholder="이메일을 입력하세요" onChange={onChange} value={email}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {이름} ({nickname}) 
        <p>email:{email}</p>
      </div>
    </div>
  );
}

export default InputSample;