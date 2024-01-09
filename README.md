# 리액트로 유튜브 만들기

```
Youtube Data API로 리액트 프로젝트 제작

- 제작기간: 2023.12.26 ~ 2024.01
- 구현환경: React
- 배포방법: Netlify
- 특징
  - 반응형
  - 네트워크 통신
  - 다크모드 지원
```

[💜 Duetube 💜](https://incomparable-concha-72a360.netlify.app/)

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

## 📬 주소 별 페이지

| 페이지 주소      | 페이지 종류   | 용도                  |
| ---------------- | ------------- | --------------------- |
| /                | 메인          | 인기 비디오 노출      |
| /search/:keyword | 비디오 리스트 | 키워드 검색 결과 출력 |
| /video/:videoId  | 비디오 상세   | 비디오 상세 페이지    |

## 🎨 페이지 구성 및 기능

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
