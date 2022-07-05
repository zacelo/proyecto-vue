<template>
    <div>
        <!-- Testimonial Start -->
        <div class=" pb-5 pt-3  wow animate__animated   animate__fadeInUp " data-wow-delay="0.1s" >
            <div class="">
                <div class="text-center">
                    <h5 class="section-title  text-center ">─ Testimonios ─</h5>
                    <h1 class="mb-5">Que opinan nuestros clientes !</h1>
                </div>
                <div class="row ">
                    <div class="col-sm-6 ">
                        <div class="  borde rounded p-4 my-2 tarjeta">
                            <i class="fa fa-quote-left fa-2x  mb-3 icon"></i>
                            <p>Impresionante, me encanto la milanesa napolitana, con papas fritas naturales, muy bueno sigan asi</p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle"
                                    src="@/assets/testimonios/testimonial-1.jpg" style="width: 50px; height: 50px;">
                                <div class="ps-3">
                                    <h5 class="mb-1">Natalia Díaz</h5>
                                    <small>Abogada</small>

                                </div>

                            </div>
                            <div class="mt-3 ms-3 estrellas">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <div class="  borde rounded p-4 my-2 tarjeta">
                            <i class="fa fa-quote-left fa-2x  mb-3 icon"></i>
                            <p>Muy buenas pizzas, por lo menos la que pedi yo, lo unico demoraron un poquito</p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle"
                                    src="@/assets/testimonios/testimonial-2.jpg" style="width: 50px; height: 50px;">
                                <div class="ps-3">
                                    <h5 class="mb-1">Juan Perez</h5>
                                    <small>Empleado</small>
                                </div>
                            </div>
                            <div class="mt-3 ms-3 estrellas">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <div class="  borde rounded p-4 my-2 tarjeta">
                            <i class="fa fa-quote-left fa-2x  mb-3 icon"></i>
                            <p>Me gustaron mucho las hamburguesas , en especial la mexicana con esas papas rusticas excelente, vamos a seguir provando</p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle"
                                    src="@/assets/testimonios/testimonial-3.jpg" style="width: 50px; height: 50px;">
                                <div class="ps-3">
                                    <h5 class="mb-1">Emiliano Fuentes</h5>
                                    <small>Marinero</small>
                                </div>

                            </div>
                            <div class="mt-3 ms-3 estrellas">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <div class="  borde rounded p-4 my-2 tarjeta">
                            <i class="fa fa-quote-left fa-2x  mb-3 icon"></i>
                            <p>La comida muy buena , pero se demoro bastante</p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle"
                                    src="@/assets/testimonios/testimonial-4.jpg" style="width: 50px; height: 50px;">
                                <div class="ps-3">
                                    <h5 class="mb-1">Valeria Rios</h5>
                                    <small>Administrativa</small>
                                </div>

                            </div>
                            <div class="mt-3 ms-3 estrellas">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->
    </div>
</template>

<script>
export default {
    mounted() {

    }

}
</script>

<style lang="css" scoped>
.section-title {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    color: #fea116;
    font-size: 37px
}

h1 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 30px
}

.icon,
.estrellas {
    color: #fea116;
}

.fa-star {
    margin: 3px;
}
.tarjeta{
    min-height: 255px
}
.borde {
    border: 2px solid #fea116
}

p,
small {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
}

h5 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
}
</style>