# React based To-Do application

> 📝리액트로 구현한 할 일 관리 웹 어플리케이션

## Overview

- [데모 링크](https://michelle-todo.herokuapp.com/)

- **사용된 언어 및 프레임 워크**: react, css/Scss, node.js, express
- **서버 배포**: heroku
- **기타(트랜스 파일링, 번들링)** : webpack, babel

---

## 1. 기능

![할 일 관리 앱](https://media.giphy.com/media/RMxE1JQg5hnT3NRzP4/giphy.gif)

- **할 일 추가**
  - 추가된 할 일은 기본적으로 _Doing_
- _All, Doing, Completed_ 구분해서 보여지는 **할 일 리스트**
  - *react-router*를 이용한 **라우팅과 fallback** 처리
- 할 일 리스트의 **상태 변경 시 실시간으로 반영**
- 상태 전환
  - _Fold 버튼 클릭 시_ **할 일 리스트 보이기 <-> 숨기기 전환**
  - _체크 버튼 클릭 시_ **Doing <-> Completed 전환**
- _휴지통 버튼 클릭 시_ **할 일 삭제**

---

## 2. Webpack 설정

### 2-1. package.json을 활용하여 build 설정

- **dev와 production 분리**

  - 개발용 url 과 배포용 url을 분리하기 위해 _definePlugin_ 사용
  - build 가 정상적으로 실행되는지 확인하기 위해 스크립트 실행시 `NODE_ENV` 환경 변수로 구분해서 전달

```
// package.json의 scripts 코드

 "scripts": {
    "start": "node app.js",
    "dev-server": "webpack-dev-server --open --config webpack.config.dev.js",
    "build": "webpack --config webpack.config.js",
    "dev-build": "NODE_ENV=dev webpack --config webpack.config.js"
  },
```

```
// webpack.config.js의 plugins 코드
const url =
  process.env.NODE_ENV === "dev"
    ? `http://localhost:3000/todos`
    : "https://michelle-todo.herokuapp.com/todos";


  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: `./public/index.html`}),
    new webpack.DefinePlugin({URL: JSON.stringify(url)})
  ]
```

### 2-2. CRA 없이 webpack, babel 설정

- [학습 내용 정리](https://leehwarang.github.io/2019/08/20/react_setting.html)

---

## 3. 리액트 Hooks

### 3-1. 목적에 맞는 리액트 Hooks 사용

- **useState: 하나의 컴포넌트에서 관리하고 싶은 상태가 있을 때**

  - AddTodo에서 input창에 입력이 발생할 때 마다 변하는 값을 관리
  - Navigation에서 Fold 버튼을 클릭할 때 마다 변하는 값을 관리

```
const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
}
```

```
const Navigation = () => {
  const [toggle, setToggle] = useState(true);
}
```

- **useEffect: 첫 렌더링 시에만 / 렌더링이 일어날 때 마다 / 어떤 값이 변할 때만 실행 시키고 싶은 코드가 있을 때**

  - useFetch(custom hook)에서 첫 렌더링 시에만 초기 데이터 요청하는 함수 실행

```
const useFetch = (cbFunc, url, errorHandler) => {

  const fetchInitialData = async (cbFunc, url, errorHandler) => {
    try {
      // 데이터 요청
    } catch (errorMsg) {
      // 에러 처리
    }
  };

  useEffect(() => {
    fetchInitialData(cbFunc, url, errorHandler);
  }, []);

  return loading;
};
```

- **createContext: 계층이 복잡하거나 여러 개의 컴포넌트들에게 동일한 데이터를 쉽게 전달해주고 싶을 때**

  - TodoStore이 관리하는 *value*들을 _children_ 컴포넌트들이 접근할 수 있도록 설정

```

export const TodoContext = React.createContext({});

export const ToDoStore = ({ children }) => {
  const [datas, dispatch] = useReducer(TodoReducer, []);

  const [error, setError] = useState(false);
  const loading = useFetch(setInitTodoData, URL, errorHandler);

  const { todoCnt, doneCnt } = filterdData(datas);

  return (
    <>
      <TodoContext.Provider
        value={{ datas, error, loading, dispatch, todoCnt, doneCnt }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};
```

- **useReducer: 컴포넌트의 내부 로직을 분리하고 싶을 때**

  - ToDoStore에서 관리하는 datas(할 일 목록)을 수정, 추가, 삭제 하는 로직을 TodoReducer로 분리하여 관리

```
const TodoReducer = (todoData, { type, payload }) => {
  switch (type) {
    case "INIT_TODO": {}
    case "ADD_TODO": {}
    case "CHANGE_TODO": {}
    case "DELETE_TODO": {}
  }
};
```
