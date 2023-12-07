<template>
    <div class="grid-container">
    <div v-for="book in booklist" :key="book.id">
  
      
        <div class="single">
          <div class="thumbnail">
            <img :src="book.coverUrl" />
          </div>
          <div class="info">
            <h3> {{ book.title }}</h3>
            <h3> {{ book.author }}</h3>          
            <p> Created by {{  book.userName }}</p>
          </div>
          
        </div>
      
    </div>
   
    </div>
  </template>
  
  <script>
  export default {
    props: ["booklist"],
  };
  </script>
  <style scoped >
  
  
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 50px;
    padding: 10px;
  }
  
  .single {
      display: flex;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
      background: white;
      margin: 16px 0;
      transition: all ease 0.2s;
  }
  .single:hover {
      border-color: black;
      border-style: ridge;
      transform: scale(1.02);
      transition: all ease 0.2s;
      cursor: pointer;
      
  }
  .thumbnail {
      max-width: 150px;
      max-height: 150px;
      overflow: hidden;
      border-radius: 10px;
  }
  img {
      max-width: 100%;
      max-height: 100%;
     
      display: block;
  }
  .info {
      margin: 0 30px;
  }
  
  
  </style>
  