<template>
  <div class="App">
    <h1>회원가입 결과</h1>
    <div class="sign-up-form">
      <p class="sign-up-input">아이디: {{ id }}</p>
      <p class="sign-up-input">비밀번호: {{ pw }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      id: state => state.id,
      pw: state => state.pw
    })
  }
};
</script>
