# Duetube

**Tanstack-Query로 데이터 fetching을 처리하는 유튜브 클론코딩 프로젝트**

📎 [배포 링크](https://duetube.netlify.app/)

```
2023.12 - 2024.01 (약 2개월, 개인 프로젝트)

[설명 및 제작 목표]
- 설명: Tanstack-Query로 데이터 fetching을 처리하는 유튜브 클론코딩 프로젝트
- 제작 목표: 부족했던 데이터 전처리 코드의 가독성과 안정성을 개선

[사용 스택]
- React: 재사용 가능한 컴포넌트를 제작하고 싶었습니다.
- Tanstack-Query: 컴포넌트 내부에 별도의 state 선언 없이 error/loadnig/success 상태를 처리하고 싶었습니다.
- TailwindCSS: 빠른 스타일링을 위해 사용했습니다.

[결과]
- then이 반환한 promise를 사용하여 데이터 전처리하여 코드 안정성 개선
- QA/실서버 코드를 분리하여 디버깅이 쉽도록 개선
```

<br/>

## 🚀 특징

- qa/실서버 코드 관리
  - client 파일에 **데이터 fetching하는 코드**만 담아냄
  - qa 버전과 실서비스 버전으로 파일 분리
- 클린코드
  - ealry return
  - 임시변수 제거
  - 형변환 명시적으로 표현

## 🧚 기능과 구현 화면

| 다크모드 구현 화면                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![라이트 모드](https://github.com/user-attachments/assets/ace47821-6924-4de1-bd0b-32c5dc6e8da8)![다크 모드](https://github.com/user-attachments/assets/51b8a165-b335-4d50-b7e6-e7c89ebdba22) |
| - **DarkModeProvider** 생성해 다크모드 상태와 toggle하는 메소드 구현<br/>- **localStorage** 사용해 다크모드 상태 저장                                                                        |

| 메인 페이지                                                                                     |
| ----------------------------------------------------------------------------------------------- |
| ![메인 페이지](https://github.com/user-attachments/assets/cdb44e3e-4847-4711-ac37-2b48501a6c1b) |
| - **useRef에 이전 검색어를 저장해 input의 state와 비교**하여 검색 API 호출                      |

| 동영상 상세 페이지                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![메인 페이지](https://github.com/user-attachments/assets/ac0fdcd7-7df7-486c-a2f9-8780a5774086)                                                                                                                   |
| - 필요한 데이터 : 비디오 상세 + 채널<br/>- useQuery에 async/await 사용하여 2개의 데이터를 순서대로 호출<br/>- 2개의 데이터를 하나의 객체로 병합하여 return해, useQuery에 의한 re-render 횟수를 2회에서 1회로 감소 |

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
