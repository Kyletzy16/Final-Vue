<template>
    <div class="creative-page">
      <!-- Back Button -->
      <button @click="goBack" class="back-btn">Back to Profile</button>
  
      <h1 class="title">My Hobbies</h1>
      <div class="hobby-list">
        <div class="hobby-card" v-for="hobby in hobbies" :key="hobby.id">
          <img :src="hobby.photo" :alt="hobby.name" class="hobby-image" />
          <h2 class="hobby-name">{{ hobby.name }}</h2>
          <p class="hobby-description">{{ hobby.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreativePage',
    data() {
      return {
        hobbies: [
          {
            id: 1,
            name: 'Basketball',
            photo: require('/public/basketball.jpg'), // Assuming the image is placed in the assets folder
            description: 'Love playing basketball because it’s a great way to stay active, challenge yourself, and have fun with friends. The fast-paced nature of the game, combined with teamwork and strategy, offers both mental and physical stimulation, making it an exciting and rewarding experience.',
          },
          {
            id: 2,
            name: 'Online Games',
            photo: require('/public/moba.jpg'), // You can replace this with your image URL
            description: 'Playing online games because it’s also a greate way to have friends, and make use of your free time.',
          },
          {
            id: 3,
            name: 'Traveling',
            photo: require('/public/travel.jpg'), // Replace with custom URL if needed
            description: 'Exploring new places and cultures around the globe.',
          },
        ],
      };
    },
    methods: {
      goBack() {    
        this.$router.push('/portfolio/profile'); // Navigate back to the profile page
      },
    },
  };
  </script>
  
  <style scoped>
  /* Overall Page Layout */
  .creative-page {
    text-align: center;
    padding: 30px;
    font-family: 'Arial', sans-serif;
    background-color: #f6f8fa; /* Similar to GitHub's background */
    max-width: 900px;
    margin: 50px auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Title Styling */
  .title {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #333;
    font-weight: 600;
  }
  
  /* Hobby List Styling */
  .hobby-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .hobby-card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background-color: white;
  }
  
  .hobby-card:hover {
    transform: scale(1.05);
  }
  
  .hobby-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .hobby-name {
    font-size: 1.5rem;
    margin: 15px 0;
    color: #555;
    font-weight: 600;
  }
  
  .hobby-description {
    font-size: 1rem;
    color: #666;
  }
  
  /* Back Button Styling */
  .back-btn {
    background-color: #2b90d9; /* GitHub Blue */
    color: white;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .back-btn:hover {
    background-color: #277db2; /* Darker blue on hover */
  }
  
  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .creative-page {
      padding: 20px;
    }
  
    .hobby-card {
      width: 100%;
      max-width: 320px;
    }
  
    .title {
      font-size: 2rem;
    }
  }
  </style>
  