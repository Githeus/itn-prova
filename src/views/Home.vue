<template>
  <div class="row p-0">
    <div class="col-12 col-sm-7 col-lg-8 p-0">
      <img :src="require('/public/assets/aviao.png')" class="img-fluid w-100" style="repeat:">
    </div>
    <div class="col-12 col-sm-5 col-lg-4 p-0" style="background-color:#ffd86e">
      <img :src="require('/public/assets/logo.png')" class="img-fluid w-100">
      <i><h1 class="p-2" style="font-family: 'Italianno', cursive; font-size:3rem">Seja bem vindo!</h1></i>
      <p class="text-justify p-2">
        <span class="small">
          Identifique-se abaixo para acessar o sistema:
        </span>
      </p>
      <div class="form-group p-2">
       <div class="input-group">
          <input type="text" class="form-control" placeholder="Usuário" v-model="usuario">
          <span class="input-group-text" id="basic-addon2">
           <font-awesome-icon icon="user" />
          </span>
        </div>
      </div>
      <div class="form-group p-2">
       <div class="input-group">
          <input type="password" class="form-control" placeholder="Senha" v-model="senha" >
          <span class="input-group-text" id="basic-addon2">
            <font-awesome-icon icon="lock" />
          </span>
        </div>
      </div>
      <div class="text-center">
        <button type="button" @click="login()" class="btn btn-lg shadow-lg text-white" style="background-color:orange;">
          Entrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'Home',
  data(){
    return {
      usuario:"",
      senha:""
    }
  },
  components: {FontAwesomeIcon},
  methods:{
    login(){
      if(this.usuario && this.senha)
        this.$router.push('viagens')
      else
        return alert('Informe o usuário e sua senha')
        
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
body{
  background-color:#ffd86e
}

</style>
