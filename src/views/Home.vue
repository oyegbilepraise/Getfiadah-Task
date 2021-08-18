<template>
  <div class="bg_container">
    <div class="">
      <h3 class="text-center mt-4">stripe</h3>
      <div class="login_bg shadow bg-white mx-auto p-5">
        <form action="#">
          <h6>Sign in to your account</h6>
          <div class="mt-3">
            <label for="">Email</label>
            <input
              type="text"
              @blur="v$.email.$touch"
              v-model="email"
              placeholder="jane.doe@gmail.com"
              class="border form-control mt-3"
            />
            <small v-if="v$.email.$error" class="text-danger">
              {{ v$.email.$errors[0].$message }}
            </small>
          </div>
          <div class="mt-3">
            <label for="">Password </label>
            <span class="fp_text sso_login">Forget your password?</span>
            <input
              type="text"
              @blur="v$.password.$touch"
              placeholder="********************"
              class="form-control mt-3"
              v-model="password"
            />
            <small v-if="v$.password.$error" class="text-danger">
              {{ v$.password.$errors[0].$message }}
            </small>
          </div>
          <div class="d-flex mt-3">
            <input type="checkbox" class="mt-1" />
            <p class="mx-3">Stay signed in for a week</p>
          </div>
          <button class="form-control btn text-white" @click="login">
            Continue
          </button>
          <p class="text-center mt-3 sso_login">
            Use Single sign-on (SSO) instead
          </p>
          <p class="mt-5">Don't have an account? <span class="sso_login">Sign Up</span></p>
          &copy; Stripe | Contact | Privacy & terms
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
    };
  },

  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },

  methods: {
    login() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$router.push(`/dashboard`);
      }
    },
  },
};
</script>

<style>
:root {
  --primary-color: #635cff;
}

.bg_container {
  background-image: url(../assets/IMG-20210816-WA0016.jpg);
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: -50px !important;
}
.login_bg {
  width: 30%;
  align-items: center;
  justify-content: center;
  height: 63vh;
}
.btn {
  background-color: var(--primary-color);
}
.sso_login {
  color: var(--primary-color);
}
.fp_text {
  margin-left: 120px !important;
}
input:focus:active {
  outline: none !important;
}
</style>