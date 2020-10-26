<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-alert
              color="error"
              v-if='error_check'
            >
              {{error_message}}
            </v-alert>
            <v-card-text>
              <v-text-field v-model="user.TelephoneNumber"  name="number" label="Number" type="text"></v-text-field>
              <v-text-field v-model="user.Password"  name="password" label="Password" type="password"></v-text-field>
            </v-card-text>
            
            <v-card-actions>
              <v-btn to="/signup" rounded color="indigo" dark>Sign up</v-btn>
              <v-spacer></v-spacer>
              <v-btn rounded color="primary" dark @click="login()">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
    

<script>
  import axios from 'axios';
   export default {
     name: "login",
    data: () => ({
      urlProd: 'http://185.251.91.134/api',
      user: {
        TelephoneNumber: '',
        Password: ''
      },
      access_token: '',
      error_check: false,
      error_message:'',
  }),

  methods: {
    
    login() {
      const headers ={
        'Content-Type': 'application/x-www-form-urlencoded',
      }

      let body = JSON.stringify(this.user);
      axios.post(this.urlProd+'/login', 
        body,
        {headers:headers}
      )

      .then((response) => {
        console.log(response.data.access_token)
        this.access_token = response.data.access_token;
        this.error_check = false;
        this.error_message = '';
      })

      .catch((error) => {
        console.log(error.response.data.message);
        this.error_check = true;
        this.error_message = error.response.data.message;
        
      });

    }
  }
     
   }
</script>

<style scoped lang="scss">

input {
    border: .1px solid #020000;
    border-radius: 5px;
}

.register {
    background-color: green;
    border: .1px solid green;
    border-radius: 5px;
    margin-top: 10px;
    width: 100px
}

#sex {
  border: .1px solid #020000;
  border-radius: 5px;
}
</style>

