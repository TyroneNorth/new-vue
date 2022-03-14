<script setup lang="ts">
import ContactModal from './ContactModal.vue';



</script>

<template>
  <nav style="margin-top: -60px; color: white;" class="navbar navbar-expand-lg navbar-dark ">
    <div class="container-fluid gx-5">
      <a class="navbar-brand" href="#">
        <svg
          class="logo"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472
                            c-119.367,0-216-96.633-216-216S136.633,40,256,40s216,96.633,216,216S375.367,472,256,472z"
                fill="#fff"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256,128c-70.692,0-128,57.308-128,128s57.308,128,128,128s128-57.308,128-128S326.692,128,256,128z M256,336
                            c-44.183,0-80-35.817-80-80s35.817-80,80-80s80,35.817,80,80S300.183,336,256,336z"
                fill="#fff"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256,64c-88.226,0-160,71.774-160,160s71.774,160,160,160s160-71.774,160-160S344.226,64,256,64z M256,336
                            c-70.692,0-128-57.308-128-128s57.308-128,128-128s128,57.308,128,128S326.692,336,256,336z"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active hover-theme nav-pills rounded" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link hover-theme nav-pills rounded"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle dropdown-toggle-split hover-theme nav-pills rounded"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >Work</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#mega">Mega Fusion</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#rice">Rice & Rolls</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#eng">Engineering Consulting</a>
              </li>
            </ul>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>

  <ContactModal />
</template>

<style>
nav {
  background-color: transparent;
}
</style>