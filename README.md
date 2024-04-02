# 리액트로 유튜브 만들기

```
✅ Youtube Data API로 리액트 프로젝트 제작

- 제작기간: 2023.12.26 ~ 2024.01.08
- 구현환경: React, TailwindCSS, Youtube Data API
- 배포방법: Netlify
- 특징
  - 다크모드 지원
  - 인기 동영상 추천
  - 동영상 검색
  - 동영상 상세정보 출력
  - 반응형
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

```
✅ 다크모드 지원
✅ 동영상 검색
✅ 동영상 상세정보 출력
✅ 반응형
```

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

## 🚀 구현

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
