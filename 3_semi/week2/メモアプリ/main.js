// const addButton = document.getElementById("add-button")
// const memoInput = document.getElementById("memo-input")
// const list = document.getElementById("list")

// addButton.onclick = function() {
//   const text = memoInput.value
//   const memo = document.createElement("div")
//   memo.textContent = memoInput.value
//   // memo.append(text);
//   list.append(memo)
//   memoInput.value = ""
// }

// localStorageに保存できる（文字列しか保存できない）
// JSONであればjsのオブジェクトや配列を文字列にしてくれる
// JSON.stringify　⇨　配列やオブジェクトを文字列に
// JSON.parse ⇨　文字列を元に戻す

// 配列に追加する方法
// jsには組み込みオブジェクトと組み込みメソッドがある
// 0,"0",{},[]　⇨　実は全部オブジェクト　最初から用意されている

// 配列に追加⇨ push()

// やること
// ボタンを押したら配列を読み込んで表示する

// const addButton = document.getElementById("add-button")
// const memoInput = document.getElementById("memo-input")
// const list = document.getElementById("list")
// let memos = []

// addButton.onclick = function() {
//   memos.push(memoInput.value)
//   console.log(memos)

//   // 1. listの内容を消去する
//   list.innerHTML = ""
//   // 2. listにmemosを反映する。
//   for (let i = 0; i < memos.length; i++) {
//     const text = memos[i]

//     // 1.タグを作る
//     const div = document.createElement("div")
//     // 2.タグの中身をテキストに変更
//     div.textContent = text
//     // 3.表示されているタグの子要素に入れる
//     list.append(div)
//   }
// }

const addButton = document.getElementById("add-button")
const memoInput = document.getElementById("memo-input")
const list = document.getElementById("list")
const changeButton = document.getElementById("change-button")
let memos = []

if (localStorage.memos) {
  // ローカルストレージのmemosキーからJSONを読み込む。
  // JSON.parseで配列にして、memosを更新する。
  const memosJson = localStorage.memos
  memos = JSON.parse(memosJson)
}
addButton.onclick = function() {
  memos.push(memoInput.value)
  // ローカルストレージのmemosキーにJSONにしたmemosを保存する。
  localStorage.memos = JSON.stringify(memos)

  // 1. listの内容を消去する
  list.innerHtml = ""
  // 2. listにmemosを反映する。
  for (let i = 0; i < memos.length; i++) {
    const text = memos[i]

    // 1.タグを作る
    const div = document.createElement("div")
    // 2.タグの中身をテキストに変更
    div.textContent = text
    // 3.表示されているタグの子要素に入れる
    list.append(div)
  }
}
