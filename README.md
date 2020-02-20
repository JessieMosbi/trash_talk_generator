# 幹話產生器
工作到煩了嗎？快來試試這個幹話產生器，輕鬆點擊對象即可產出幹話，讓你工作輕鬆又愉快。

![scrrenshot](https://github.com/JessieMosbi/trash_talk_generator/blob/master/screenshot.gif?raw=true)

## Requirement
[Node.js](https://nodejs.org/en/)

## Packages
[express](https://expressjs.com/)
[express-handlebars](https://www.npmjs.com/package/express-handlebars)
[body-parser](https://www.npmjs.com/package/body-parser)

## Installing
透過 `git clone` 指令將專案下載下來到本機端
```console
git clone https://github.com/JessieMosbi/trash_talk_generator.git
```

開啟終端機 (Terminal)，進入 trash_talk_generator 資料夾內，並檢查是否有 package.json 檔案
```console
cd trash_talk_generator
```

執行 `npm install`，將專案所需套件下載下來
```console
npm install
```

套件安裝完畢後，用專案所設定的統一指令，即可執行專案
```console
npm run dev
```

預設 port 為 3000，請直接打開瀏覽器，並在 URL 輸入 http://localhost:3000/ 即可瀏覽網頁

## Features
使用者點擊想說幹話對象的單選框，再點擊「產生幹話」按鈕，即可產生幹話