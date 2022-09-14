<template>
    <h1>Contact List</h1>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="contact in contacts" :key="contact.id">
                <tr class="table-secondary">
                    <td>{{contact.id}}</td>
                    <td>{{contact.name}}</td>
                    <td>{{contact.email}}</td>
                    <td>{{contact.designation}}</td>
                    <td>{{contact.contact_no}}</td>
                    <td><router-link :to="{ name: 'EditContact', params: {id: contact.id } }">Edit</router-link></td>
                    <td><button @click.prevent="deleteContact(contact.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ContactList',
    data() {
        return {
            contacts:Array
        }
    },
    created() {
        this.getContacts();
    },
    methods: {
        async getContacts() {
            await axios.get('/api/contacts').then(response => {
                this.contacts = response.data.contacts;
                console.log(this.contacts);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteContact(id) {
            await axios.delete(`/api/deleteContact/${id}`).then(response => {
                if(response.data.code == 200) {
                    this.getContacts();
                }
            }).catch(error => {
                console.log(error);
            });
        }
    },
    mounted() {
        console.log("Contact List")
    }
}
</script>