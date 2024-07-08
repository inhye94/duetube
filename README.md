```
2023.12 - 2024.01 (약 2개월, 개인 프로젝트)


[설명 및 제작 목표]
- 설명: Tanstack query로 데이터 fetching을 처리하는 유튜브 클론코딩 프로젝트
- 제작 목표: 부족했던 데이터 후처리 코드의 가독성과 안정성을 개선

[사용 스택]
- 리액트: 재사용 가능한 컴포넌트를 제작하고 싶었습니다.
- tanstack query: 컴포넌트 내부에 별도의 state 선언 없이 error/loadnig/success 상태를 처리하고 싶었습니다.

[결과]
- then이 반환한 promise를 사용하여 데이터 후처리하여 코드 안정성 개선
- QA/실서버 코드를 분리하여 디버깅이 쉽도록 개선
```

[💜 Duetube 💜](https://duetube.netlify.app/)

<details>
<summary>페이지 대표 이미지</summary>

<img width="1680" alt="스크린샷 2024-03-21 오후 3 13 49" src="https://github.com/DuetoPark/react-duetube/assets/69448900/066c06bd-cd2a-4f03-9d86-e02496ddbac7">
<img width="1680" alt="스크린샷 2024-03-21 오후 3 14 14" src="https://github.com/DuetoPark/react-duetube/assets/69448900/99487715-12d9-458e-a79c-e83418557244">
<img width="1680" alt="스크린샷 2024-03-21 오후 3 14 25" src="https://github.com/DuetoPark/react-duetube/assets/69448900/cdb59ad9-cfbc-4805-baae-693d9a3da329">
</details>

<br/>

## 🦄 프로젝트 관리 방법

### 문제와 해결

[GitHub WIKI]()

<details>
<summary>GitHub WIKI 예시 이미지 및 링크</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 3 45 25" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/c795a2b1-97b6-4979-a74e-646ea4b56979">
</details>

<br/>

## 🧚 기능과 구현 화면

<details>
<summary>다크모드 구현 화면</summary>

https://github.com/DuetoPark/react-duetube/assets/69448900/b034002c-c143-48a2-ba5d-a443f832c009

</details>

<details>
<summary>메인 페이지와 검색 구현 화면</summary>

https://github.com/DuetoPark/react-duetube/assets/69448900/ebdc5c24-b7b9-4520-89ac-09a232985cd3

</details>

<details>
<summary>동영상 상세정보 구현 화면</summary>

https://github.com/DuetoPark/react-duetube/assets/69448900/d8aaeda8-866c-4a73-83ff-866c7059fb3e

</details>

<br/>

## 🚀 특징

- qa/실서버 코드 관리
  - client 파일에 **데이터 fetching하는 코드**만 담아냄
  - qa 버전과 실서비스 버전으로 파일 분리
- 클린코드
  - ealry return
  - 임시변수 제거
  - 형변환 명시적으로 표현

<br/>

## 🍀 기능

- 다크모드
  - **DarkModeProvider** 생성해 다크모드 상태와 toggle하는 메소드 구현
  - **localStorage** 사용해 다크모드 상태 저장
- 검색
  - **useRef에 이전 검색어를 저장해 input의 state와 비교**하여 검색 API 호출
- 비디오 상세 정보
  - 필요한 데이터 : 비디오 상세 + 채널
  - useQuery에 async/await 사용하여 2개의 데이터를 순서대로 호출
  - 2개의 데이터를 하나의 객체로 병합하여 return해, useQuery에 의한 re-render 횟수를 2회에서 1회로 감소

<br/>

## 👀 프로젝트 구조

```
📦src
 ┣ 📂apis ------------------------------- NOTE: 특정 동작을 담당
 ┣ 📂component -------------------------- NOTE: 컴포넌트
 ┣ 📂context ---------------------------- NOTE: 컨텍스트
 ┣ 📂modules ---------------------------- NOTE: 범용 컴포넌트 (버튼, 태그, ...)
 ┣ 📂page ------------------------------- NOTE: 페이지 컴포넌트
 ┣ 📂util ------------------------------- NOTE: 공통 함수
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

<br/>

## 🤩 DB

### 외부 API

- Youtube Data API v3

<br/>

## 📦 사용한 packages

### 라우터

- react-dom-route

### 스타일

- tailwind
- react-icons

### 네트워크 통신

- react-query
- axios

### 그 외

- timeago
- react-youtube

<br/>

## 🎨 페이지 구성 및 기능

| 페이지 주소      | 페이지 종류   | 용도                  |
| ---------------- | ------------- | --------------------- |
| /                | 메인          | 인기 비디오 노출      |
| /search/:keyword | 비디오 리스트 | 키워드 검색 결과 출력 |
| /video/:videoId  | 비디오 상세   | 비디오 상세 페이지    |

### 글로벌 헤더

- 헤더
  - 로고
    - 홈으로 이동
  - 검색바
    - 키워드 검색
  - 세팅
    - 다크모드 지원

### 비디오 리스트

- 키워드
- 비디오 리스트

### 비디오 상세

- 비디오 상세 정보
- 채널 상세 정보
