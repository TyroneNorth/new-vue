<script setup lang="ts">
import Button from './Button.vue';

// Setup Pinia Store


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        alert('submitted');

        form.classList.add('was-validated')
      }, false)
    })
})()

const label = 'Submit';

</script>

<template>
    <form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Rosa" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Parks" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label" >Email</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" value="Rosa.Parks@underground.com"  aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div >
  <div class="col">
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
  
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>d
      <label class="form-check-label text-black" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <Button label='Send Email' class="std-btn" type="Submit"></Button>

  </div>
</form>
</template> 

<style>

</style>