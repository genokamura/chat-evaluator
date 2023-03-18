# Chat Evaluator

ウェブチャットの会話の内容から、AIがチームのコミュニケーションを評価します。

## 起動方法

1. Nodejs16.x系をインストール
1. openaiのページにてAPIキーを取得
1. .env.exampleをコピーし、OPENAI_API_KEYに取得したAPIキーの値をセット

```(bash)
git clone https://github.com/genokamura/chat-evaluator.git
cd chat-evaluator
npm install
npm run start
```

`http://localhost:3000`にブラウザでアクセスします。

## 使い方

Slack、Mattermost、チャットワーク等の画面から会話の履歴をエクスポート、あるいはコピーしてきます。
テキストエリアに内容をペーストして、「Evaluate」ボタンを押下します。

