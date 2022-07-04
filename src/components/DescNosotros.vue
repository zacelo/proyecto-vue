<template>
    <div>
        <div class="container-xxl py-5 wow animate__animated   animate__backInUp">
            <div class="">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-7">
                        <div class="row g-3">
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s"
                                    src="@/assets/about-1.jpg">
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s"
                                    src="@/assets/about-2.jpg" style="margin-top: 25%;">
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s"
                                    src="@/assets/about-3.jpg">
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s"
                                    src="@/assets/about-4.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <h1 class="mb-4">Bienvenido a <i class="fa fa-utensils me-2"></i>Pizza Ya
                        </h1>
                        <p class="mb-4">Nació como un emprendimiento familiar, para hacer productos de calidad y
                            deleitar a nuestros clientes, debido a esta gran pasión por la gastronomía.                            
                        </p>
                         <p class="mb-4">
                            Nos enfocamos en seguir creciendo día a día para brindar lo mejor de nosotros para ustedes,
                            tratando de estar innovando constantemente con productos de calidad.
                        </p>
                        <p class="mb-4">Gracias por los comentarios que nos dejan, eso nos ayuda a seguir mejorando,
                            porque nos gusta escuchar a nuestros clientes.</p>
                        <div class="row g-4 mb-4">

                        </div>

                        <router-link :to="{ name: 'menu' }"
                            class="btn py-sm-2 mt-5  animate__animated animate__bounceInUp"
                            onclick="window.scrollTo(0,0)">NUESTRO MENÚ</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
h1 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    color: #fea116;
}

.btn {
    background-color: #FEA116;
    font-family: 'Heebo', sans-serif;
    font-weight: 600;
    color: aliceblue;

}
p{
    font-size:20px
}
</style>