<template>
  <form class="my-3 p-3 colorWhiteBg">
    <div class="mb-3">
      <label for="id_email" class="form-label colorBlack">Email</label>
      <input
        name="email"
        type="email"
        class="form-control colorBlack"
        id="id_email"
        aria-describedby="emailHelp"
        required
      />
      <div id="emailHelp" class="form-text">Enter a valid email</div>
    </div>
    <div class="mb-3">
      <label for="id_password" class="form-label colorBlack">Password</label>
      <input
        type="password"
        name="password"
        class="form-control"
        id="id_password"
        required
      />
    </div>
    <div class="mb-3">
      <label for="id_gender" class="form-label colorBlack">Gender</label>
      <select
        id="id_gender"
        name="gender"
        class="form-select colorBlack"
        aria-label="select gender"
        required
      >
        <option value="unselected" selected>Please select</option>
        <option value="m">Male</option>
        <option value="f">Female</option>
        <option value="o">Other</option>
      </select>
    </div>

    <div class="mb-3 form-check">
      <input
        type="checkbox"
        name="agree_terms"
        class="form-check-input"
        id="id_agree_terms"
      />
      <label class="form-check-label colorBlack" for="id_agree_terms"
        >Agree to terms of service.</label
      >
    </div>
    <button type="button" class="btn btn-primary my-2">Submit</button>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>