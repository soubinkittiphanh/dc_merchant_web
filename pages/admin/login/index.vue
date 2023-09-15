<template>
  <v-app>
    <div class="container">
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator> </loading-indicator>
      </v-dialog>
     
      <v-card>
        <div class="pa-16">
          <v-row>
            <v-col cols="12">
              <p class="text-center"
                style="color: #01532B; font-weight:900;font-family: Arial, Helvetica, sans-serif; font-size: xx-large;">
                DCOMMERCE </p>
              <h2 class="text-center" style="color: #01532B;">ຍິນດີຕ້ອນຮັບ ເຂົ້າສູ່ລະບົບການຂາຍ </h2>
            </v-col>
          </v-row>
          <v-card-text>
            <notification v-if="errorMessage" :message="errorMessage" />
            <v-card-title class="my-text-center">
              ເຂົ້າສູ່ລະບົບ
            </v-card-title>
            <v-form>
              <v-text-field v-model="login.mem_id" label="ກະລຸນາ ໃສ່ໄອດີ" name="email"
                prepend-inner-icon="mdi-account-tie-hat" class="rounded-10 my-text-center" outlined>
              </v-text-field>
              <v-text-field v-model="login.mem_pwd" label="ລະຫັດຜ່ານ" type="password" name="password"
                prepend-inner-icon="mdi-lock" class="rounded-10 my-text-center" outlined></v-text-field>
              <v-btn class="rounded-0 my-text-center" color="#01532B" x-large block dark @click.prevent="userLogin"
                type="submit">
                ເຂົ້າສູ່ລະບົບ
                <v-icon> mdi mdi-login</v-icon>
              </v-btn>
            </v-form>
          </v-card-text>
        </div>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import Notification from '../../../components/Notification.vue'
export default {
  layout: "login",
  data() {
    return {
      terminalDialog: false,
      email: '',
      password: '',
      errorMessage: '',
      terminalSelected:1,
      isLoading: false,
      barcode: '',
      timer: null,
      login: {
        mem_id: '',
        mem_pwd: ''
      }
    }
  },

  components: {
    Notification,
  },
  methods: {
   
    async userLogin() {
      try {
        this.isLoading = true
        this.errorMessage = ''
        const response = await this.$auth.loginWith('local', { data: this.login })

        if (response.status !== 200) {
          this.isLoading = false
          this.errorMessage = 'ບໍ່ສາມາດ ລັອກອິນ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
          return
        }
        if (response.data.accessToken) {
          this.$router.push('/admin')
        } else {
          console.log('No token')
          this.errorMessage = 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ'
        }


        console.log(response)
      } catch (err) {
        console.log(err)
      }
      this.isLoading = false
    },

  },
}
</script>
<style scoped>
h2 {
  font-family: 'noto sans lao';
  text-align: center;
}

.my-text-center {
  font-family: 'noto sans lao';
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color:  #CCDDD5;;

}

/* *:not(h1) { */
/* CSS styles here */
/* font-family: 'noto sans lao'; */
/* } */
</style>