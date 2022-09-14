<template>
    <h1>Edit Contact</h1>
    <form @submit.prevent="updateContact" novalidate> 
        Name <input type="text" v-model="contact.name" placeholder="Enter Name"><br>
        Email <input type="email" v-model="contact.email" placeholder="Enter Email"><br>
        Designation <input type="text" v-model="contact.designation" placeholder="Enter Designation"><br>
        Contact <input type="text" v-model="contact.contact_no" placeholder="Enter Contact number"><br>
        <button>Submit</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
   name: 'EditContact',
   data() {
        return {
            contact: {},
        }
   },
   created() {
        this.getContactById();
   },
   methods: {
       async getContactById(){
            await axios.get(`/api/getContact/${this.$route.params.id}`).then(response => {
                this.contact = response.data;
            }).catch(error => {
                console.log(error);
            });
       },
       async updateContact(){
            this.errors = [];
            if(!this.contact.name){
                this.errors.push("Name is required");
            }

            if(!this.contact.email){
                this.errors.push("Email is required");
            }

            if(!this.contact.designation){
                this.errors.push("Designation is required");
            }

            if(!this.contact.contact_no){
                this.errors.push("Contact is required");
            }

            if(!this.errors.length) {
                let formData = new FormData();
                formData.append('name', this.contact.name);
                formData.append('email', this.contact.email);
                formData.append('designation', this.contact.designation);
                formData.append('contact_no', this.contact.contact_no);

                await axios.post(`/api/updateContact/${this.$route.params.id}`, formData).then(response => {
                    console.log(response);

                    if(response.status == 200){
                        alert(response.data.message);
                    }
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                        window.location.href = "/";
                });
            }
        }
   }
}
</script>