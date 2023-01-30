# new-denki_homepage
2023/1/30: リポジトリの移動を行いました。旧リポジトリは<a href="https://github.com/hiropen1414/homepage" target="_blank">こちら</a>です。


# 概要
リポジトリ一覧にあるold-denki_homepageをraectでリニューアルしたものです。デザイン的な問題があったのと、もともと旧サイトもコンポーネント指向で開発していたのでreactで設計し直しました。
# 使用言語
- html/css
- JavaScript(React.js)
- TypeScript
- GraphQL(AppSync)

#工夫した点など
ブランチモデルは「git-flow」を採用しています。(2023/1/30:リポジトリを移動したのでPRやfeatureBranchは残っていません。上記の旧リポジトリに残っています。)
Uiデザインモデルは「Atomic design」を使用し、「Ant design」のコンポーネントを一部使用しています。
タスク管理ツールとして、「Trello」を用いて要件定義などを行っています。
<img src="https://user-images.githubusercontent.com/123922176/215470343-632b01f3-ee49-43bc-bde1-c10e56aebfd8.png" width="600px">
<img src="https://user-images.githubusercontent.com/123922176/215470683-d2064f0a-eb33-45ce-a97f-380bc5f984dd.png" width="400px">

Atomic Designに則り、コンポーネント設計に汎用性を持たせるよう意識しています。


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
