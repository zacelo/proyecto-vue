<template>
    <div>
        <div class=" mb-5">
            <div class="">
                <div class="text-center mb-5">
                    <h5 class="section-title  text-center wow animate__animated   animate__backInUp" data-wow-delay="0.1s">── Nuestro Local ──
                    </h5>

                </div>
                <div class="row g-5 align-items-center">
                    <div class="col-lg-7">
                        <div class="row g-3">
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-100 wow animate__animated   animate__zoomIn"
                                    data-wow-delay="0.1s" src="@/assets/about-1.jpg">
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 wow animate__animated   animate__zoomIn"
                                    data-wow-delay="0.3s" src="@/assets/about-2.jpg" style="margin-top: 25%;">
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-75 wow animate__animated   animate__zoomIn"
                                    data-wow-delay="0.5s" src="@/assets/about-3.jpg">
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-100 wow animate__animated   animate__zoomIn"
                                    data-wow-delay="0.7s" src="@/assets/about-4.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <h1 class="mb-4">Bienvenido a <i class="fa fa-utensils me-2"></i>Pizza Ya
                        </h1>
                        <p>
                            El local fue <b> inaugurado</b> en el verano de 2015, ofrece las mejores pizzas, hechas en horno de barro.<b> Pizza Ya </b>  aprovecha los productos de la zona ( excelentes quesos, embutidos, verduras, productos de la huerta, todos productos de la zona).
                        </p>
                        <p class="mb-4">Nació como un <b> emprendimiento familiar </b>, para hacer productos de calidad y
                            deleitar a nuestros clientes, debido a esta gran pasión por la gastronomía.
                        </p>
                        <p class="mb-4">
                            <b>Nos enfocamos </b> en seguir creciendo día a día, para brindar lo mejor de nosotros para ustedes,
                            tratando de estar innovando constantemente con productos de calidad.
                        </p>
                        <p class="mb-4">Gracias por los <b> comentarios </b> que nos dejan, eso nos ayuda a seguir mejorando,
                            porque nos gusta escuchar a nuestros clientes.</p>
                        


                        <router-link :to="{ name: 'menu' }"
                            class="btn py-sm-2 mt-4  wow animate__animated animate__bounceInRight"
                            onclick="window.scrollTo(0,0)"  data-wow-delay="0.1s">NUESTRO MENÚ</router-link>
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

p {
    font-size: 20px
}

.section-title {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    color: #fea116;
    font-size: 37px
}
</style>