<template>
    <div>
       <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
           <v-list>
               <v-list-item v-for="(item, i) in menuItems" :key="`navdrawer${i}`">

                   <v-list-item-icon>
                       <v-icon>mdi-{{item.icon}}</v-icon>
                   </v-list-item-icon> 

                   <v-list-item-content> 
                       <router-link :to="item.route">                      
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                       </router-link>
                   </v-list-item-content>
                   
               </v-list-item>
           </v-list>
        </v-navigation-drawer> 

        <v-toolbar  dark class="primary">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <router-link :to="`/`" tag="span" style="cursor:pointer">      
                <v-toolbar-title v-text="'Ich Lerne Deutsche'"></v-toolbar-title>
            </router-link>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text dense v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route">     
                    <v-icon>mdi-{{item.icon}}</v-icon>               
                    {{ item.title}}                    
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>       
    </div>
</template>

<script>

    export default {
        data() { 
            return {
                drawer: false
            }
        },
        computed: {            
            menuItems() {
                return [
                    {
                        title: "Читать",
                        route: "/books",
                        icon: "read"
                    },
                    {
                        title: "Учить слова",
                        route: "/words",
                        icon: "key"
                    },
                    {
                        title: "Мой кабинет",
                        route: "/profile",
                        icon: "account-circle"
                    },
                    {
                        title: "Выйти",
                        route: "/logout",
                        icon: "exit-to-app"
                    },
                    {
                        title: "Войти",
                        route: "/signin",
                        icon: "record"
                    },
                    {
                        title: "Зарегестрироваться",
                        route: "/signup",
                        icon: "lock-open"
                    }
                ]
            }
        }
    }

</script>

<style scoped>

</style>
