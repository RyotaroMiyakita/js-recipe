const ryotaro = {
  name: "宮北凌太郎",
  age: 21,
  univercity: 明治大学,
  hobby: ["筋トレ", "コーヒー"],
  family: {
    dad: "ya〇〇",
    mam: "〇〇ko",
    sis: "na〇〇",
  },
  sayhello: function() {
    consople.log("こんにちは${ryotaro.name}です！")
  },
}

console.log(ryotaro())
