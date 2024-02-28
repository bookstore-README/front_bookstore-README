<div align="center">

<h3>
  커뮤니티형 도서 판매 서비스, 
</h3> 
<h1>
README!
</h1> 

![title](public/readme/sample.png)

</div>

### 책을 구매하고 리뷰를 남겨보세요!

웹에서든 모바일에서든 쉽고 간단하게 리드미를 사용해보세요.

### 책을 읽고 난 후의 감상을 포스팅해보세요!

리드미가 여러분의 기록을 소중하게 보관할게요.

<br/>
<br/>
<br/>

# 프로젝트 소개

README 는 책을 구매하고 정보를 공유하기 위해 만들어진 서비스입니다.

원하는 책을 직접 검색하거나 신간 섹션, 베스트셀러 섹션을 통해 관심 가는 책을 찾아 다른 사람들에게 공유할 수 있습니다.

책을 구입했다면, 리뷰를 남겨보세요. 그리고 커뮤니티 페이지에서 책에 대한 생각들을 자유로이 포스팅하고, 공유해보세요.

<br/>
<br/>
<br/>

# 기술 스택

### **💻 Tech Stack 💻**

<img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">  <img src="[https://img.shields.io/badge/axios-5a29e4?style=for-the-badge&logo=axios&logoColor=white](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactQuery&logoColor=white)"> <img src="[https://img.shields.io/badge/reacthookform-ec5990?style=for-the-badge&logo=reacthookform&logoColor=white](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)">

### 🔨 Tools 🔨

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="[https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)"> <img src="[https://img.shields.io/badge/discord-5865f2?style=for-the-badge&logo=discord&logoColor=white](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)">

### 📚 Managing 📚

<img src="[https://img.shields.io/badge/npm-cb3837?style=for-the-badge&logo=npm&logoColor=white](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)">

<br/>
<br/>
<br/>

# 배포 주소

https://front-bookstore-readme-virid.vercel.app/


<br/>
<br/>
<br/>

# 시작 가이드

```html
git clone https://github.com/bookstore-README/front_bookstore-README.git

npm install

npm run start
```

<br/>
<br/>
<br/>

# 팀원 소개

|안혜정 | 안윤진 | 이승연 | 조연아 | 홍재원 |
| ----|---|---|---|---|
|[<img src="https://avatars.githubusercontent.com/u/138510303?v=4" height=70 width=70> <br/> @hyejungan](https://github.com/hyejungan) | [<img src="https://avatars.githubusercontent.com/u/119280160?v=4" height=70 width=70> <br/> @thisisthewa2](https://github.com/thisisthewa2) | [<img src="https://avatars.githubusercontent.com/u/120437902?v=4" height=70 width=70> <br/> @orrhrr](https://github.com/orrhrr) | [<img src="https://avatars.githubusercontent.com/u/86518113?v=4" height=70 width=70> <br/> @yunajoe](https://github.com/yunajoe) | [<img src="https://avatars.githubusercontent.com/u/89698149?v=4" height=70 width=70> <br/> @Hongjw030](https://github.com/Hongjw030) |

### 안윤진

- 페이지 UI: 메인페이지, 결제페이지, 결제완료페이지
- 공통: 헤더
- 기능
    - vercel ci/cd
    - 로그인 여부 / 페이지에 따른 헤더 컴포넌트 구현
    - 선호장르에 해당하는 맞춤도서
    - 포트원 api를 이용한 테스트 결제 기능
    - 기본 배송지 get, 배송 데이터 post & get

### 안혜정

- 페이지 UI : 커뮤니티페이지, 결제상세페이지, 상품상세페이지, 모달디자인
- 공통 : 메인 & 모달 레이아웃, 버튼(케밥, 페이지네이션, 화면상단이동), 커뮤니티 카드 컴포넌트, input(모달 내 검색, label + input ,radio) 컴포넌트, 커스텀 훅(폼데이터 관리, 페이지네이션)
- 기능
    - 노션페이지, github 템플릿 생성 및 관리
    - next middleware & next-auth를 이용한 token 관리 
    ⇒  로그인유지 & 접근가능 페이지 구분 & 로그아웃
    - tanstack & axios를 이용한 api  기능
    - 행정안전부주소 api를 이용한 주소 검색 기능
    - 모달 내 폼 데이터 패칭 및 모달 기능

### 이승연

- 페이지 : 마이페이지 > 설정페이지, 베스트 페이지, 신간 페이지
- 공통: 책 미리보기 컴포넌트, 약관동의 컴포넌트, 공통 스타일 분리, custom Hook, tostify 적용
- 기능
    - 이벤트 캐러셀
    - 프로필 및 비밀번호 수정
    - 찜하기/ 찜 취소
    - 장바구니 추가
    - 마이페이지 레이아웃 조립
    - react-query cache 활용한 최적화
    - useMutation 내부 기능 사용 가능하도록 useUpdate 훅 수정

### 조연아

- 페이지: 회원가입 페이지, 찜 페이지, 장바구니 페이지, 맞춤페이지, 마이페이지>주문조회 페이지
- 공통:  신간도서 캐러셀 컴퍼넌트, 주문조회 날짜 컴퍼넌트, dropdown 컴퍼넌트
- 기능:
    - 초기 환경 설정
    - 환경에 따른 반응형 캐러셀
    - react-hook-form을 활용한 form, error 처리
    - 무한스크롤을 활용한 찜 fetch. 찜 개별, 다중 삭제
    - 장바구니 개별, 다중 삭제
    - 맞춘 장르에 대한 도서 , 장르 fetch.
    - 날짜에 따른, 주문 조회 fetch.

### 홍재원

- 페이지: 카테고리 페이지, 도서 상세 페이지, 마이페이지>나의 리뷰 페이지
- 공통: 실시간 도서 컴포넌트, input 컴포넌트, 로딩 스피너, 리뷰 컴포넌트,  무한스크롤 커스텀 훅, 사이드바
- 기능:
    - 카테고리 데이터 전역 관리
    - 무한 스크롤을 활용한 도서 데이터 fetch
    - 페이지네이션을 활용한 리뷰 데이터 fetch
    - 모바일 환경에서의 실시간 도서 컴포넌트 캐러셀 기능
    - 소셜 로그인 기능
    - avif확장자, SVGOMG 라이브러리를 활용한 이미지 최적화

<br/>
<br/>
<br/>

# 기능 및 디자인

| 메인 페이지                    |     카테고리 페이지 |
| ----------------------------- |---------------------------------|
|![title](public/readme/메인_데스크.png)| ![title](public/readme/카테고리_데스크.png)|

| 로그인 페이지                    |     회원가입 페이지 |
| ----------------------------- |---------------------------------|
|![title](public/readme/로그인_데스크.png)| ![title](public/readme/회원가입_데스크.png)|

| 베스트셀러 페이지                    |     신간 페이지 |
| ----------------------------- |---------------------------------|
|![title](public/readme/베스트셀러_데스크.png)| ![title](public/readme/신간_데스크.png)|

| 회원정보 설정 페이지                    |  | |
| ----------------------------- |---------------------------------|---------------------------------|
|![title](public/readme/프로필수정_데스크.png)| ![title](public/readme/선호장르선택_데스크.png)|![title](public/readme/비밀번호변경_데스크.png)|

| 맞춤도서 페이지                    |     커뮤니티 페이지 |
| ----------------------------- |---------------------------------|
|![title](public/readme/맞춤도서_데스크.png)| ![title](public/readme/커뮤니티_데스크.png)|

| 장바구니 페이지                    |     찜 페이지 |
| ----------------------------- |---------------------------------|
|![title](public/readme/장바구니_데스크.png)| ![title](public/readme/찜_데스크.png)|

| 결제 페이지                    |     주문 조회 페이지 |
| ----------------------------- |---------------------------------|
|![title](public/readme/결제_데스크.png)| ![title](public/readme/주문조회_데스크.png)|

| 나의 리뷰 페이지                    |     나의 커뮤니티 페이지 |
| ----------------------------- |---------------------------------|
|![title](public/readme/나의리뷰_데스크.png)| ![title](public/readme/나의커뮤_데스크.png)|

| 제품상세 페이지                    |      |
| ----------------------------- |---------------------------------|
|![title](public/readme/상품상세_데스크.png)| ![title](public/readme/상품리뷰_데스크.png)|


| 커뮤니티 글 쓰기                   |   리뷰 작성하기   |
| ----------------------------- |---------------------------------|
|![title](public/readme/모달_커뮤글쓰기2_데스크.png)| ![title](public/readme/모달_리뷰작성_데스크.png)|

| 삭제하기                  |   주소 찾기   |
| ----------------------------- |---------------------------------|
|![title](public/readme/모달_커뮤글삭제_데스크.png)| ![title](public/readme/모달_주소_데스크.png)|
