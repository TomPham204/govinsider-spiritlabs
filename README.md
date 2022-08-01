This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

Setup project

```bash
npm run prepare:husky
npm run dev

# or yarn (recommend)
yarn prepare:husky
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## -------------------------------------------------------------------

# Recommended Practices

#### 1. Separate our dependency imports from local imports by a newline.

```
  import React from 'react'
  import get from lodash/get

  // utils
  import { tools } from '/utils/function'

  // components
  import ABC from "ABC"
```

#### 2. Avoid missing dependency warning

```
   Nếu setState trong useEffect có sử dụng state,
   tránh sử dụng:
     let newState = change(state);
     setState(newState)
   sử dụng:
     setState(oldState => change(state))
   để tránh warning thiếu dependency
```

#### 3. Order of component files

```
   khai báo biến, state,ref, hooks,... => function handler logic => useEffect => function renderFooter => return => PropTypes => export => biến, hàm bên ngoài => styled-component

```

#### 4. Only call function (with useCallback) in useEffect

```javascript
  // use:
  const _getApiData = useCallback(async () => {
    ...
  }, [deps])

  useEffect(() => {
    _getApiData();
  }, [_getApiData])
```

```javascript
  // avoid:
  useEffect(() => {
    {
      ... code for getting data
    }
  }, [deps])
```

```
  mục đích: Thuận tiện cho việc đọc flow trước (với meaningful name function) thay vì phải đọc hiểu từng function trước khi đọc flow
```

#### 5. Single Responsibility for easier-applying small parts and avoiding modifying big old ones (modify small parts instead)

```javascript
  // use
  function getUser(id) {...}
  function handleOpenModal(isOpened) {...}
  function sendConnection(message) {...}

  // avoid
  function getUserOpenModalAndSendConnection(id,isOpened,message)
```

```javascript
// useEffect, chỉ gọi những hàm có liên quan về mặt logic trong cùng useEffect, để dễ đọc từng flow riêng và tránh thừa hàm khi deps thay đổi
// use
useEffect(() => {
  _getUserProfile();
}, [_getUserProfile]);

useEffect(() => {
  _getUserComments();
}, [_getUserComments]);

// avoid
useEffect(() => {
  _getUserProfile();
  _getUserComments();
}, [_getUserComments, _getUserProfile]);
```

#### 6. Performance

```
  sử dụng useCallback() khi truyền hàm xuống dưới component con và useEffect, luôn điền đủ dependencies (deps)

  nếu useState nhận vào 1 function return object, truyền function chưa invoke, useState sẽ caching return value
  //use
  useState(getState)
  //avoid
  useState(getState())

  chỉ sử dụng memo cho những component có node cha thường xuyên render mà không cần render theo,
  khi dùng memo nhớ kiểm tra props tránh nhận các biến thay đổi liên tục : như object thừa, function không dùng useCallback
    VD: Box chat đổi state (comments) liên tục => re-render, nhưng các comment thì không cần re-render theo
```

#### 7. Do not passing anonymous function as props

```avoid
<input
  onChange={e => {
    model.name = e.target.value;  //Don't do that
  }}
/>
```

```use
<input
  onChange={_onChange} // Better
/>
```

#### 8. Naming things

```Khai báo hàm local bắt đầu bằng "_", các hàm handle sự kiện on bắt đầu bằng on
const handleUpdateDate = date => {}

const onSubmit = e => {
  e.preventDefault();
};
```

```các function truyền dưới dạng props sẽ không có "_"
<User
  renameUser={renameUser}
/>
```

```sử dụng tên biến, tên hàm,arguments,...  có ý nghĩa, hạn chế comment code để giải thích cho những hàm đơn giản
  // use:
  const updateUserName = (userId, newName) => {};

  // avoid:
  // update user name, with userId and user name as argument
  const updateData = (id, name) => {}
```

#### 9. Writing our own hooks

```
  tránh lặp code bằng cách viết custom hooks
  tham khảo các files trong folder hooks để quen với việc viết custom  hooks
```

## Abstraction and Dont Repeat Yourself (DRY)

```
KHÔNG copy paste những function, component giống nhau 100%.
Nhưng nếu giống nhau 80% hoặc ít hơn, hạn chế abstract hàm có sẵn. Vì requirement project sẽ thay đổi rất nhiều,
việc abstract bừa bãi sẽ làm các phần code không liên quan phụ thuộc vào nhau
khiến việc đọc code khó (phải đọc logic cho nhiều nơi khi chỉ sửa 1 nơi)
và sửa code khó (sửa code 1 nơi sẽ ảnh hưởng đến nhiều nơi khác dẫn đến bug lặp đi lặp lại)

Giữa việc abstract để 1 function chạy ở 10 chỗ "gần giống nhau" và copy paste chỉnh sửa 10 functions cho 10 chỗ
còn có thể chọn abstract thành 2, 3 functions đủ đơn giản để áp dụng cho 10 chỗ
```
