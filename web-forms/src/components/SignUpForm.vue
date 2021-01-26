<template>
  <form @submit.prevent="formSubmit"  class="my-3 p-3 colorWhiteBg">
    <div class="mb-3">
      <label for="id_email" class="form-label colorBlack">Email</label>
      <input
        v-model="email"
        name="email"
        type="email"
        class="form-control colorBlack"
        id="id_email"
        aria-describedby="emailHelp"
        required
      />
      <div id="emailHelp" class="form-text py-0 my-0">Enter a valid email</div>
      <div class="colorErrors py-0 my-0"> {{ email_errors }}</div>
    </div>
    <div class="mb-3">
      <label for="id_password" class="form-label colorBlack">Password</label>
      <input
         v-model="password"
        type="password"
        name="password"
        class="form-control"
        id="id_password"
        required
      />
      <div class="colorErrors py-0 my-0"> {{ password_errors }}</div>
    </div>
    <div class="mb-3">
      <label for="id_gender" class="form-label colorBlack">Gender</label>
      <select
        v-model="gender"
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
      <div class="colorErrors py-0 my-0"> {{ gender_errors }}</div>
    </div>

    <div class="mb-3">
      <label for="id_skills" class="form-label colorBlack">Skills</label>
      <input
        @keyup="addSkill"
        v-model="aSkill"
        name="skills"
        type="text"
        class="form-control colorBlack"
        id="id_skills"
        aria-describedby="skillsHelp"
        required
      />
      <div id="skillsHelp" class="form-text">Separate your skills with a comma</div>
      <div v-for="skill in skills" :key="skill" class="my-2 me-2 badge rounded-pill bg-primary">
          <span @click="deleteSkill(skill)">
              {{ skill }}
           </span>
      </div>
      <div class="colorErrors py-0 my-0"> {{ skills_errors }}</div>
    </div>

    <div class="mb-3 form-check">
      <input
        v-model="terms"
        type="checkbox"
        name="agree_terms"
        class="form-check-input"
        id="id_agree_terms"
        required
      />
      <label class="form-check-label colorBlack" for="id_agree_terms"
        >Agree to terms of service.</label
      >
      <div class="colorErrors py-0 my-0"> {{ terms_errors }}</div>
    </div>
    <button type="submit" class="btn btn-primary my-2">Submit</button>
  </form>
</template>

<script>
export default {

 data(){
     return {
         email: '',
         email_errors : '',
         password: '',
         password_errors : '',
         gender: 'unselected',
         gender_errors : '',
         terms: false,
         terms_errors : '',
         aSkill : "",
         skills : new Set(),
         skills_errors : '',
     }
 },
methods: {
    addSkill(e){
        let skillLength = this.aSkill.length;
        if(e.key === ',' && ( skillLength > 1)){
           let skill = this.aSkill.slice(0, skillLength-1);
           this.skills.add(skill.trim());
           this.aSkill = "";
       } 
       console.log(this.skills)
    },
    deleteSkill(skill){
        this.skills.delete(skill);
    },
    formSubmit(){
        if(this.email.length < 3){
            this.email_errors = 'please enter an email';
        }
        if(this.password.length < 6){
            this.password_errors = 'password must be at least 6 characters long';
        }
        if(this.gender == 'unselected'){
            this.gender_errors = 'please specify your gender'
        }
        if(this.skills.size == 0){
            this.skills_errors = 'please add at least 1 skill';
        }
        
    }
}

};
</script>

<style>
</style>