<template>
    <div class="profile-page">
      <div class="profile-header">
        <!-- Profile Photo -->
        <img :src="profile.photo" alt="Profile Photo" class="profile-photo" />
        <h1>{{ profile.name }}</h1>
        <p class="bio">{{ profile.bio }}</p>
      </div>
  
      <div class="social-links">
        <a v-for="(link, platform) in profile.socialMediaLinks" 
           :key="platform" 
           :href="link"
           :title="platform"
           target="_blank" 
           class="social-link">
          <img :src="getIcon(platform)" :alt="platform" />
        </a>
      </div>
  
      <!-- Navigation Buttons -->
      <div class="navigation-buttons">
        <button @click="navigateTo('creative')" class="nav-btn">Creative</button>
        <button @click="navigateTo('contact')" class="nav-btn">Contact</button>
        <button @click="navigateTo('showcase')" class="nav-btn">Showcase</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          name: 'Aaron Kyle Ocaiza',
          // Updated photo path for local image
          photo: require('/public/akonato.jpg'), // Ensure this path is correct
          bio: '"Basketball has always been my passion—it challenges me physically and mentally while teaching teamwork, discipline, and perseverance. Beyond the court, I love exploring and learning new things, as it fuels my curiosity and keeps me growing. Whether it’s mastering a skill, diving into a project, or understanding a new concept, I find joy in pushing my limits and discovering the world around me..',
          socialMediaLinks: {
            Facebook: 'https://facebook.com/Akocarizaxd',
            GitHub: 'https://github.com/Kyletzy16/VueportfolioOcariza.git',
          },
        },
      };
    },
    methods: {
      getIcon(platform) {
        switch (platform) {
          case 'Facebook':
            return require('/public/fb.png');
          case 'GitHub':
            return 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg';
          default:
            return '';
        }
      },
      navigateTo(page) {
        this.$router.push(`/portfolio/${page}`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Overall Page Layout */
  .profile-page {
    background: #f6f8fa; 
    text-align: center;
    max-width: 800px;
    margin: 50px auto;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
  }
  
  /* Profile Header */
  .profile-header {
    margin-bottom: 20px;
  }
  
  .profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #0c0c0c; 
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .profile-photo:hover {
    transform: scale(1.1);
  }
  
  h1 {
    color: #333;
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 15px;
  }
  
  .bio {
    font-style: italic;
    color: #666;
    font-size: 1rem;
    max-width: 500px;
    margin: 20px auto;
  }
  
  /* Social Media Icons */
  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
  }
  
  .social-link img {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;
  }
  
  .social-link img:hover {
    transform: scale(1.2);
  }
  
  /* Navigation Buttons */
  .navigation-buttons {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .nav-btn {
    background-color: #2b90d9; 
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .nav-btn:hover {
    background-color: #277db2;
    transform: translateY(-3px);
  }
  
  .nav-btn:active {
    transform: translateY(1px);
  }
  
  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .profile-page {
      padding: 15px;
    }
  
    .social-links {
      gap: 10px;
    }
  
    .nav-btn {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
  
  </style>
  