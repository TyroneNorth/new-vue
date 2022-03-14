<script setup lang="ts">
// @ is an alias to /src
import StdButton from './Button.vue';

import { ref } from 'vue';
import Waves from './Waves.vue';
import Footer from './Footer.vue';







</script>

<template>
  <Waves />

  <div class="container">
    <div id="mega"  class="row">
      <div class="col-sm-12 col-lg-9 ccard">
        <img src="../assets/images/mega_fusion.png" alt="Mega Fusion" class="img-fluid" />
      </div>
      <div class="col-sm-12 col-lg-3">
        <h1 class="text-center">Mega Fusion</h1>
        <p class="text-center">
          <span>E-commerce Landing Page</span>
          <!-- SIte Info-->
          <br />
        
            Mega Fusion has ambitions to be the first commercially viable nuclear fusion energy solution.
            Technoologies:
        <ul class="tech rounded">
          <li>
            <a href="#https://developer.mozilla.org/en-US/docs/Web/HTML" class="list-group-item list-group-item-action active" aria-current="true">
            HTML
            </a>
          </li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="list-group-item list-group-item-action">CSS</a>
          <a href="https://www.javascript.com/" class="list-group-item list-group-item-action">Javascript</a>
          <a href="https://www.w3schools.com/w3css/defaulT.asp" class="list-group-item list-group-item-action">W3.CSS</a>
  
          </ul>
          
        
        <a class="outline-btn" href="#">See live</a>
        <a class="ghost-btn" href="#">Source</a>
        </p>
      </div>
    </div>
    <div class="border-bottom"></div>

    <div id="rice" class="row">
     <div class="col-sm-12 col-lg-9  ccard">
        <img src="../assets/images/riceroll.png" alt="Mega Fusion" class="img-fluid" />
      </div>
      <div class="col-sm-12 col-lg-3">
      
        <h1 class="text-center">Rice & Rolls</h1>
        <p class="text-center">
          <span>An atmospheric Asian cuisine Restaurant</span>
          <!-- SIte Info-->
          <br />
        
            Mega Fusion has ambitions to be the first commercially viable nuclear fusion energy solution.
            Technoologies:
        <ul class="tech rounded">
          <li>
            <a href="#https://developer.mozilla.org/en-US/docs/Web/HTML" class="list-group-item list-group-item-action active" aria-current="true">
            HTML
            </a>
          </li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="list-group-item list-group-item-action">CSS</a>
          <a href="https://www.javascript.com/" class="list-group-item list-group-item-action">Javascript</a>
          
  
          </ul>
          
        
        <a class="outline-btn" href="#">See live</a>
        <a class="ghost-btn" href="#">Source</a>
        
        </p>
       
      </div>
     
    </div>

    <div class="border-bottom"></div>

    <div id="eng" class="row">
      <div class="col-sm-12 col-lg-9  ccard">
        <img src="../assets/images/consult.png" alt="Mega Fusion" class="img-fluid" />
      </div>
      <div class="col-sm-12 col-lg-3">
        <h1 class="text-center">Engineering Consulting</h1>
        <p class="text-center">
          <span>World Class contractors</span>
          <!-- SIte Info-->
          <br />
        
            Mega Fusion has ambitions to be the first commercially viable nuclear fusion energy solution.
            Technoologies:
        <ul class="tech rounded">
          <li>
            <a href="#https://developer.mozilla.org/en-US/docs/Web/HTML" class="list-group-item list-group-item-action active" aria-current="true">
            HTML
            </a>
          </li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="list-group-item list-group-item-action">CSS</a>
          <a href="https://www.javascript.com/" class="list-group-item list-group-item-action">Javascript</a>
          <a href="https://getbootstrap.com/" class="list-group-item list-group-item-action">Bootstrap</a>
  
          </ul>
          
        
        <a class="outline-btn" href="#">See live</a>
        <a class="ghost-btn" href="#">Source</a>
        
        </p>
        
      </div>
    </div>

    

    <!-- Body-->

    <!--Footer-->
    <Footer />
  </div>
</template>

<style>

@media only screen and (max-width: 600px) {
    .std-btn {
        font-size: small;
    }
    .lrg-btn {
        font-size: large;
    }
    .sml-btn {
        font-size: small;
    }
    .outline-btn {
        font-size: small;
    }
    .ghost-btn {
        font-size: small;
    }
}



.tech {
  list-style-type: none;
  margin-bottom: 2;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.ccard {
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
 
  margin-bottom: 2em;
  transition: all 0.3s ease-in-out;

}

.ccard:hover {
  box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--primary-color);
}

.border-bottom {
  border: 1px solid transparent;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

a.std-btn {
    padding: 0.5em 1em;
    border-radius: 4px;
    font-size: 1em;
    text-align: center;
    color: white;;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    width: 100%;
    max-width: 100px;
    height: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--background-color-primary);
    text-decoration: none;
}

a.std-btn:hover {

   color: white;

    }

</style>

