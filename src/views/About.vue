<template>
  <div class="row justify-content-between">
    <div class="col-12" style="background-color:#ffce93">
        <img :src="require('/public/assets/logo.png')" class="img-fluid" style="max-width:20%">
    </div>
  </div>
  <div class="row">
    <div class="col-2 col-md-1" style="height:90vh" id="sidebar">
      <p class="text-center py-3" style="font-size:1.2rem">
        <font-awesome-icon icon="plane" /> <br>
        Viagens
      </p>
      <p class="text-center py-3" style="font-size:1.2rem">
        <font-awesome-icon icon="id-card" /> <br>
        Cartões
      </p>
      <a href="" @click="this.$router.push('/')" style="text-decoration:none">
        <p class="text-center py-3" style="font-size:1.2rem; margin-top:350%">
          <font-awesome-icon icon="door-open" /> <br>
          Sair
        </p>  
      </a>
        
      
    </div>
    <div class="col-10 col-md-11 p-0">
      <p id="desc" class="p-2">
        <i><h1 style="font-family: 'Italianno', cursive; font-size:3rem">Viagens</h1></i>      
        Cadastre os locais que deseja conhecer
      </p>
      <div class="row">
        <div class="col-5">
            <div class="form-group p-2 mb-3">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Nome do local" v-model="viagem.local">
                <span class="input-group-text" id="basic-addon2">
                  <font-awesome-icon icon="plane" />
                </span>
              </div>
            </div>
            <div class="form-group p-2 mb-3">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Estado / País" v-model="viagem.estado_pais">
                <span class="input-group-text" id="basic-addon2">
                  <font-awesome-icon icon="map-pin" />
                </span>
              </div>
            </div>
            <div class="form-group p-2">
              <input type="month" class="form-control" placeholder="Previsão da viagem" v-model.date="viagem.previsao">
            </div>
            <div class="row align-items-end" style="height:200px;">
              <div class="col-6">
                <button @click="limpar()" type="button" class="btn btn-warning">
                  Limpar
                </button>
              </div>
              <div class="col-6 text-end">
                <button @click="adicionar()" type="button" class="btn btn-warning">
                  Adicionar
                </button>
              </div>
            </div>
        </div>
        <div class="col-7">
          <table class="table table-borderless">
            <thead style="background-color: rgb(255, 223, 184);">
              <tr>
                <th>Nome do local</th>
                <th>Estado / País</th>
                <th>Previsão</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="v in viagens" :key="v">
                <td scope="row">{{v.local}}</td>
                <td>{{v.estado_pais}}</td>
                <td>{{formatPrevisao(v.previsao)}}</td>
                <td class="p-0">
                  <div class="btn-group " role="group">
                    <button type="button" class="btn btn-outline-dark">
                      <font-awesome-icon icon="pen"/>
                    </button>
                    <button type="button" class="btn btn-outline-dark">
                      <font-awesome-icon icon="trash-alt" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components: {FontAwesomeIcon},
  data(){
    return {
      viagem: {},
      viagens: []
    }
  },
  methods:{
    limpar(){
      this.viagem = {}
    },
    adicionar(){
      if(this.viagem.local && this.viagem.estado_pais && this.viagem.previsao){
        this.viagens.push(this.viagem)
        this.viagem = {}
      }else
        return alert("Informe todos os campos")        
    },
    formatPrevisao(data){
      let mes = data.slice(5)
      let ano = data.slice(0,4)
      let nome = ""
      switch(mes){
        case '01': 
          nome = "Janeiro";break;
        case '02': 
          nome = "Fevereiro"; break;
        case '03': 
          nome = "Março"; break;
        case '04': 
          nome = "Abril"; break;
        case '05': 
          nome = "Maio"; break;
        case '06': 
          nome = "Junho"; break;
        case '07': 
          nome = "Julho"; break;
        case '08': 
          nome = "Agosto"; break;
        case '09': 
          nome = "Setembro"; break;
        case '10': 
          nome = "Outubro"; break;
        case '11': 
          nome = "Novembro"; break;
        case '12': 
          nome = "Dezembro"; break;
      }

      return nome+'/'+ano
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
#desc{
  background-color: rgb(255, 223, 184);
}
#sidebar{
   background-color: rgb(255, 234, 207);
}
</style>