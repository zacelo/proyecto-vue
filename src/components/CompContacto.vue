<template>
    <div>
         <!-- Contact Start -->
        <div class="mb-5 mt-5  wow animate__animated   animate__backInUp">
            <div class="">
                <div class="text-center " >
                    <h5 class="section-title ff-secondary text-center">── Contacta con Nosotros ──</h5>
                    
                </div>
                <div class="row my-5">
                    
                    <div class="col-md-6 " >
                        <iframe class="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13157.38502025993!2d-57.839294707759194!3d-34.46873941318476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a312689e9baadf%3A0xd805b8023fcf8708!2sCol%20Del%20Sacramento%2C%20Departamento%20de%20Colonia!5e0!3m2!1ses-419!2suy!4v1657036407785!5m2!1ses-419!2suy"
                            frameborder="0" style="min-height: 350px; border:0;" allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                           
                    </div>
                    <div class="col-md-6 mt-3 mt-sm-0">
                        <div  >
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name">
                                            <label for="name">Nombre.....</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                                            <label for="email">Email.....</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">Asunto.....</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 150px"></textarea>
                                            <label for="message">Mensaje.....</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn  w-100 py-3" type="submit">Enviar Mensaje</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.section-title {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  color: #fea116;
  font-size: 37px
}
.btn {
  background-color: #FEA116;
  font-family: 'Heebo', sans-serif;
  font-weight: 600;
  color: aliceblue;

}
</style>