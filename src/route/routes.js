import { createWebHistory, createRouter } from "vue-router";
import ContactList from '../components/ContactList.vue'
import AddContact from '../components/AddContact.vue'
import EditContact from '../components/EditContact.vue'

const routes = [
    {
        path: '/',
        component: ContactList,
        name: "ContactList"
    },
    {
        path: '/add_contact',
        component: AddContact,
        name: "AddContact"
    },
    {
        path: '/contact/edit/:id?',
        component: EditContact,
        name: "EditContact"
    },
    
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;