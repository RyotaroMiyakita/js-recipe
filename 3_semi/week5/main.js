//Vueの基礎
// new Vue({
//   el: "#app",
//   data: {
//     count: 0,
//   },
//   methods: {
//     countUp: function() {
//       this.count += 1
//     },
//   },
// })
// console.log("正常")

// Vueの発展

// new Vue({
//   el: "#v-if",
//   data: {
//     seen: false,
//   },
//   methods: {
//     hyouji: function() {
//       this.seen = true
//     },
//   },
// })

// new Vue({
//   el: "#v-if-sign-in",
//   data: {
//     user: null,
//   },
//   methods: {
//     signIn() {
//       this.user = {
//         name: "ギーク太郎",
//       }
//     },
//     signOut() {
//       this.user = null
//     },
//   },
// })
// new Vue({
//   el: "#v-for",
//   data: {
//     animals: ["ふらみんご", "ごりら", "らいおん"],
//   },
// })
// new Vue({
//   el: "#v-for-push",
//   data: {
//     animals: ["ふらみんご", "ごりら", "らいおん"],
//   },
//   methods: {
//     addAnimal: function() {
//       this.animals.push("んらいおん")
//     },
//   },
// })
// new Vue({
//   el: "#v-model",
//   data: {
//     inputValue: "",
//   },
// })

new Vue({
  el: "#created",
  data: {
    inputValue: "",
    memo: "",
  },
  created: function() {
    const storedMemo = localStorage.memo
    if (storedMemo) {
      this.memo = storedMemo
    }
  },
  methods: {
    save: function() {
      localStorage.memo = this.inputValue
    },
  },
})
