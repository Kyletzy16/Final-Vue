<template>
    <div class="showcase-page">
      <!-- Back Button -->
      <button @click="goBack" class="back-btn">Back to Profile</button>
  
      <!-- Page Title -->
      <h1 class="title">My Projects</h1>
  
      <!-- Project Gallery -->
      <div class="gallery">
        <div v-for="project in projects" :key="project.id" class="card">
          <h2 class="project-name">{{ project.name }}</h2>
          <p class="project-description">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, name: 'Flame Guard', description: 'A device to keep the vendors safe from the LPG leakage' },
          { id: 2, name: 'AquaCare', description: 'A device to help our farmers in giving the right adjustment in water parameters for larval rearing.' },
          { id: 3, name: 'Safe Home', description: 'A device to keep your family safe.' },
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
  /* Showcase Page Container */
  .showcase-page {
    text-align: center;
    padding: 40px 20px;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }
  
  /* Title Styling */
  .title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    color: #2c3e50;
  }
  
  /* Project Gallery */
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 0 20px;
  }
  
  /* Project Card */
  .card {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  /* Project Name */
  .project-name {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #34495e;
  }
  
  /* Project Description */
  .project-description {
    font-size: 1.2rem;
    color: #7f8c8d;
    line-height: 1.6;
  }
  
  /* Back Button */
  .back-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .back-btn:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .showcase-page {
      padding: 20px;
    }
  
    .back-btn {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  
    .title {
      font-size: 2rem;
    }
  
    .project-name {
      font-size: 1.6rem;
    }
  
    .project-description {
      font-size: 1rem;
    }
  }
  </style>
  