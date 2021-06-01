//example for listening to key stroke
const app = Vue.createApp({
  data() {
    return {
      //  property with every key stroke.
      oldenteredValue: "",
      newenteredValue: "",
    };
  },
  methods: {
    //Part A
    alert() {
      //built-in function in Vanilla javascript
      alert("submitted");
    },
    //Part B
    registerInput(event) {
      this.oldenteredValue = event.target.value;
    },
    //Part C
    registerIn(event) {
      this.newenteredValue = event.target.value;
    },
  },
});

app.mount("#assignment");
