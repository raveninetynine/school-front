<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-sm-6 mx-auto">
                <form action='/login' novalidate>
                    <transition name="slide-fade">
                        <div v-show="step===1" class="step">

                            <div class="form-group">
                                <label for="Name">Ваше имя:</label>
                                <input v-model="user.Name" type="text" class="form-control" id="Name" required="required">
                            </div>

                            <div class="form-group">
                                <label for="LastName">Ваша фамилия:</label>
                                <input v-model="user.LastName" type="text" class="form-control" id="LastName" required>
                            </div>

                            <div class="form-group">
                                <label for="TelephoneNumber">Номер телефона:</label>
                                <VuePhoneNumberInput v-model="user.TelephoneNumber" />
                            </div>

                            <div class="form-group">
                                <label for="Sex">Выберите пол:</label>
                                <select v-model='user.Sex' class="form-control" id="Sex" required>
                                    <option>Мужской</option>
                                    <option>Женский</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="DateOfBirth">Введите дату рождения:</label>
                                <input v-model="user.DateOfBirth" type="date" class="form-control" id="DateOfBirth" required/>
                                <!-- <small >Неверная дата рождения!</small> -->
                            </div>

                        

                            <button @click="nextStep" type="button" class="btn btn-primary">Следующий шаг</button>
                        </div>
                    </transition>

                    <transition name="slide-fade">
                        <div v-show="step===2" class="step">

                            <div class="form-group">
                                <label for="Password">Придумайте пароль:</label>
                                <input @change="Password__check" v-model="user.Password" type="password" class="form-control" id="Password" required/>
                            </div>

                            <div class="form-group">
                                <label for="Password_check">Подтвердите пароль:</label>
                                <input @change="Password__check" v-model="Password_confirm" type="password" class="form-control" id="Password_check" required/>
                                <small v-show='Password_error_mess'>{{Password_error_mess}}</small>
                            </div>
                            
                            <button @click="backStep" type="button" class="btn btn-light mr-2">Назад</button>
                            <button type="submit" class="btn btn-primary">Завершить регистрацию!</button>
                        </div>
                    </transition>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import axios from 'axios';
export default {
    data() {
        return {
            step: 1,
            urlProd: 'http://185.251.91.134/api',
            Password_error_mess: '',
            Password_confirm: '',
            user: {
                Name: '',
                LastName: '',
                Sex: '',
                DateOfBirth: '',
                Password: '',
                TelephoneNumber: '',
                Role: '1'
            },
        }
    },

    components: {
        VuePhoneNumberInput
    },

    methods: {
        nextStep() {
            if(this.step < 2){
                this.step++
            }
        },

        backStep() {
             if(this.step > 1){
                this.step--
            }
        },

        Pass_test() {
            this.Password_error_mess = '';
        },

        Password__check() {
            if ((this.user.Password === this.Password_confirm) && (this.user.Password.length>=8)) {
                this.Password_error_mess = '';
                
            } else if ((this.user.Password === this.Password_confirm) && (this.user.Password.length<8)) {
                this.Password_error_mess = 'Длина пароля должна быть не менее 8 символов!';
                
            } else if (this.user.Password !== this.Password_confirm) {
                this.Password_error_mess = 'Пароли не совпадают!';
                 
            }
        },

        Name__check() {

        },

        endRegistration() {
            this.Password__check();
            if(this.Password_confirm === '') {
                const headers ={
                    'Content-Type': 'application/x-www-form-urlencoded',
                }

                let body = JSON.stringify(this.user);
                axios.post(this.urlProd+'/signup', 
                    body,
                    {headers:headers}
                )

                .then((response) => {
                    console.log(response.data)
                })

                .catch((error) => {
                    console.log(error.response);
                    
                });
            }

        }
    }
}
</script>

<style scoped>
    small {
        margin-top: 5px;
        color: #a15454;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-enter {
        transform: translateX(10px);
        opacity: 0;
    }
</style>