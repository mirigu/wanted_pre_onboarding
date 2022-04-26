# wanted_pre_onboarding👀
원티드 프리온보딩 선발 과제

## 구현기능 및 구현방법💬

### 1. Toggle.js
- 핵심 요소 : 버튼을 누를 때 마다 선택된 항목이 변한다.
- 부가 요소 : 슬라이드 애니메이션

```
✅ useState Hook을 이용해 선택한 쪽으로 토글이 이동하게 구현함

✅ transition으로 슬라이드 애니메이션 구현함
```

### 2. Tab.js
- 핵심 요소 : 버튼을 누를 때 마다 선택된 탭이 변한다.
- 부가 요소 : 슬라이드 애니메이션

```
✅ useState Hook을 이용해 선택한 탭으로 이동하고 언더라인이 표시되도록 구현함

✅ transition으로 슬라이드 애니메이션 구현함
```

### 3. Input.js
- 핵심 요소 : 인풋창에 이메일과 비밀번호 입력이 가능하다
- 부가 요소 : 이메일 형식에 맞을 경우 자동으로 체크 표시

```
✅ onchange를 이용해 input의 값이 바뀔때마다, 이메일 형식을 체크하는 함수를 실행시켜 ture/false로 아이콘 color 변경

✅ transition으로 슬라이드 애니메이션 구현함
```

- 부가 요소 : 비밀번호 입력란 우측 눈 표시를 누르면 비밀번호가 노출된다

```
✅ 눈표시 클릭시 type을 password에서 text로 변경해 비밀번호가 노출되도록 구현함

✅ input과 icon을 나란히하기 위해 div로 묶어주고, display:flex, justify-content: space-between, align-items: center 속성을 줌

✅ input을 div안에 넣어주어 focus일때, input에 border: none, outline: none 속성을 주어 테두리가 표시되지 않도록 함
```

### 4. Dropdown.js
- 핵심 요소 : 드롭다운을 누르면 선택창이 펼쳐지고, 아무거나 골라 클릭하면 선택된 항목으로 변경됨
- 부가 요소 : 키워드 필터 기능 구현

```
✅ ▼ 아이콘 클릭시 선택창 여닫는 상태값 state를 ture로 변경해 List 선택창이 보이게 해줌

✅ PLAYLIST 값을 map을 통해 선택창에서 보여주도록 구현함

✅ filter를 통해 검색 가능하도록 구현함

✅ 키워드 선택시, 선택값이 보여지고 선택창 state가 false로 변경되면서 선탱창이 닫히게 됨
```

