import React, { useState } from "react";

function CreateUser() {
  const selectList = ["대전", "세종", "울릉도", "서울"];

  const [inputs, setInputs] = useState({
    email: "",
    userId: "",
    password: "",
    city: "",
  });

  const { email, userId, password, city } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const onReset = () => {
    setInputs({
      email: "",
      userId: "",
      password: "",
      city: "",
    });
  };
  return (
    <div>
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <input
        name="userId"
        placeholder="아이디"
        onChange={onChange}
        value={userId}
      />
      <input
        name="password"
        placeholder="비밀번호"
        onChange={onChange}
        value={password}
      />
      <select onChange={onChange} value={city} name="city">
        {selectList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={onReset}>등록</button>

      <div>
        <b>
          이메일:{email} , 아이디:{userId} , 비밀번호:{password} , 지역:{city}
        </b>
      </div>
    </div>
  );
}

export default CreateUser;
