<template>
    <div class="login-page">
      <div class="login-container">
        <h1 class="login-header">Sign in to Check Profile</h1>
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" v-model="username" id="username" placeholder="Username" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" id="password" placeholder="Password" required />
          </div>
          <button type="submit" class="login-btn">Sign in</button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
        <div class="extra-options">
          <a href="#" class="forgot-password">Forgot password?</a>
          <p class="create-account">
            Don't have an account? <a href="#" class="signup-link">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      handleLogin() {
        if (this.username === 'admin' && this.password === 'password') {
          this.$router.push('/portfolio/profile');
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Basic reset and full height container */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #fafbfc;
  }
  
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fafbfc;
  }
  
  .login-container {
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  .login-header {
    font-size: 1.6rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  label {
    font-size: 1rem;
    color: #666;
    margin-bottom: 5px;
    display: block;
  }
  
  input {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  input:focus {
    outline: none;
    border-color: #2b90d9;
  }
  
  .login-btn {
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
    background-color: #2b90d9;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-btn:hover {
    background-color: #277db2;
  }
  
  .error-message {
    color: red;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
  }
  
  .extra-options {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #666;
  }
  
  .forgot-password {
    color: #2b90d9;
    text-decoration: none;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  
  .create-account {
    margin-top: 15px;
  }
  
  .signup-link {
    color: #2b90d9;
    text-decoration: none;
  }
  
  .signup-link:hover {
    text-decoration: underline;
  }
  
  /* Media query for smaller screens */
  @media (max-width: 480px) {
    .login-container {
      padding: 20px;
    }
  
    .login-header {
      font-size: 1.4rem;
    }
  
    .login-btn {
      font-size: 1rem;
    }
  }
  </style>
  