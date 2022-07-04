<template>

  <div id="banner">
    <div class="container-xxl py-5 bg-dark hero-header mb-5">
      <div class="container my-5 py-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 text-center text-lg-start">
            <h1 class="display-3 text-white animate__animated  animate__backInDown ">Disfruta de nuestra
              <br>Deliciosa comida
            </h1>
            <p class="text-white  mb-4 pb-2 my-5 animate__animated animate__bounceInLeft ">No hablamos de la gente, hablamos
              de pizza.<br/>
              Nuestro mejor secreto en pizzas: Ingredientes de felicidad y toques de alegría.<br/>
              La pizza conecta emociones, conecta personas.<br/>

              Trozos perfectos, precios perfectos, pizzas perfectas.</p>
              
            <router-link :to="{ name: 'menu' }" class="btn py-sm-3 px-sm-5 me-3 animate__animated animate__bounceInLeft"
              onclick="window.scrollTo(0,0)">NUESTRO MENÚ</router-link>
          </div>
          <div class="col-lg-6 text-center text-lg-end overflow-hidden">
            <img class="img-fluid" src="@/assets/pizza.png" alt="">
          </div>
        </div>
      </div>

    </div>

  </div>
</template>


<script>

export default {

}
</script>

<style scoped>
.hero-header {
  background: linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)), url(../assets/bg-hero1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

#banner {
  margin-top: -150px;
}

P {
  font-family: 'Heebo', sans-serif;
  font-weight: 400;
}

h1 {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
}

.btn {
  background-color: #FEA116;
  font-family: 'Heebo', sans-serif;
  font-weight: 600;
  color: aliceblue;

}

.btn:hover {
  background-color: #e77517;
  color: black;
}

.hero-header img {
  animation: imgRotate 50s linear infinite;
}

@keyframes imgRotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>