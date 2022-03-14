<script setup lang="ts"></script>

<template>
  <!--Footer-->
  
    <footer class="footer">

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2022 Copyright:
        <a class="text-reset fw-bold" href="https://www.github.com/TyroneNorth"
          >North Solutions</a
        >
      </div>
      <!-- Copyright -->
      
    </footer>
    <!-- Footer -->
  
</template>

<style>
.footer {
  margin-top: 20px;
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
</style>
