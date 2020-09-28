<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
.App {
  font-family: sans-serif;
  text-align: center;
}

.sign-up-form {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}

.sign-up-input {
  width: 70%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
}

.text-input {
  width: 80%;
}

.sign-up-button {
  display: flex;
  justify-content: center;
}
</style>
