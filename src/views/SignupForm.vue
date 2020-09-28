<template>
  <div class="App">
    <h1>회원가입</h1>
    <form class="sign-up-form">
      <p class="sign-up-input">
        아이디:
        <input type="text" class="text-input" v-model="id" />
      </p>
      <p class="sign-up-input">
        비밀번호:
        <input type="password" class="text-input" v-model="pw" />
      </p>
      <button class="sign-up-input sign-up-button" @click="updateUserInfo()">
        <router-link to="/result">확인</router-link>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      pw: ""
    };
  },
  methods: {
    updateUserInfo() {
      this.$store.commit("save", this.$data);
    }
  }
};
</script>
