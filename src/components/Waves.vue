<script setup lang="ts">
import NavBar from './NavBar.vue';



</script>

<template>
  <!--Hey! This is the original version
  of Simple CSS Waves-->

  <div class="header">
    <!--Content before waves-->
    <NavBar />
    <div class="inner-header flex">
      <!--Just the svg logo of my first initial.. Don't mind this-->

      <!--The text of the header-->
      <div class="buzz-word">
        
      </div>
    </div>

    <!--Waves Container-->
    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>
  <!--Header ends-->
  <!-- Scroll arroow button -->
  <div class="content flex">
    <div class="row">
      <div class="col-md-12 self-align-center">
        <a href="#mega">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-down arrow-btn"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
        </a>
      </div>

      <p class="wide-text col-md-12 heading">Technologist. Data Scientist. Web Developer. Teacher. Student.</p>
    </div>
  </div>
  <!--Content starts-->
  <div class="content flex"></div>
  <!--Content ends-->
</template>

<style>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

.heading {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
}

body {
  margin: 0;
}

h1 {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}
p {
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    var(--background-color-primary) 0%,
    var(--background-color-secondary) 100%
  );
  color: white;
}
.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}

.wide-text {
  letter-spacing: 0.25rem;
  font-weight: bold;
}

.arrow-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  color: var(--background-color-primary);
  fill: var(--background-color-primary);
  margin-bottom: 1rem;
}

.arrow-btn:hover {
  color: var(--background-color-secondary);
  fill: var(--background-color-secondary);
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  transition: all 0.4s ease-in-out;

}

.arrow-btn:active {
  color: var(--background-color-secondary);
  fill: var(--background-color-secondary);
  width: 2rem;
  height: 2rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 1 1 1 1px var(--background-color-secondary);
}



.buzz-word::before {
  content: "Welcome To";
  background-color: transparent;
  color: var(--text-theme-light);
  opacity: 1;
  transition: all 8.5s ease-in-out;
  animation: fadeIn 3.8s ease-in-out forwards;
  font-size: 3.5rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0.2;
    content: " Smooth";
    letter-spacing: 0.3rem;
    font-family: 'Trebuchet MS', sans-serif;
  }
  6.25% {
    opacity: 0.4;
    content: "Smooth";
    letter-spacing: 0.4rem;
    font-family: 'Trebuchet MS', sans-serif;
  }
  12.5% {
    opacity: 0.6;
    content: "Smooth";
    letter-spacing: 0.5rem;
    font-family: 'Trebuchet MS', sans-serif;
  }
  25% {
    opacity: 0.8;
    content: "Smooth";
    letter-spacing: 0.6rem;
    font-family: 'Trebuchet MS', sans-serif;
  }

  31.5% {
    opacity: 1;
    content: "F";
    font-family: 'Courier New', monospace;
  }
  37.5% {
    opacity: 1;
    content: "Fu";
    font-family: 'Courier New', monospace;
  }

  43.75% {
    opacity: 1;
    content: "Fun";
    font-family: 'Courier New', monospace;
  }
  50% {
    opacity: 1;
    content: " Func";
    font-family: 'Courier New', monospace;
  }
  62.5% {
    opacity: 1;
    content: " Funct";
    font-family: 'Courier New', monospace;
  }
  68.75% {
    opacity: 1;
    content: " Functi";
    font-family: 'Courier New', monospace;
  }
  75% {
    opacity: 1;
    content: " Functio";
    font-family: 'Courier New', monospace;
  }
  81.25% {
    opacity: 1;
    content: " Function";
    font-family: 'Courier New', monospace;
  }
  87.5% {
    opacity: 1;
    content: " Functiona";
    font-family: 'Courier New', monospace;
  }
  93.75% {
    opacity: 1;
    content: " Functional";
    font-family: 'Courier New', monospace;
  }
  100% {
    opacity: 1;
    content: "Tyrone North ";
    font-family: "Garamond", serif;
    letter-spacing: 0.4rem;
    text-shadow: #333333;
    
  }

  from {
    opacity: 0.1;
    width: 0;
  }
  to {
    opacity: 1;
    width: auto;
  }
}

h2 {
  color: #fff;
  font-size: 8em;
  position: absolute;
  transform: translate(-50%, -50%);
}

h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #03a9f4;
}

h2:nth-child(2) {
  color: #03a9f4;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
</style>