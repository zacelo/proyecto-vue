<template>
    <div>
        <!-- footer section -->
         <div class="container" v-if="usuario.rol != 'admin'">
        <footer class="footer_section ">
           
                <div class="row">
                    <div class="col-md-4 footer-col">
                        <div class="footer_contact wow animate__animated   animate__backInUp"  data-wow-delay=".4s">
                            <h4>
                                Contacto
                            </h4>
                            <div class="contact_link_box">
                                <a href="">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        Colonia del Sacramento
                                    </span>
                                </a>
                                <a href="">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Tel: +598 94 895 236
                                    </span>
                                </a>
                                <a href="">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        info@pizzaya.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col ">
                        <div class="footer_detail wow animate__animated   animate__backInUp "  data-wow-delay=".2s" >

                            <a href="" class="footer-logo">
                                Pizza Ya
                            </a>
                            <p>
                                Donde vas a comer hoy ?
                            </p>
                            <div class="footer_social ">
                                <a href="">
                                   <i class="fab fa-facebook-f"></i>                                
                                </a>
                                <a href="">
                                   <i class="fab fa-twitter"></i>
                                </a>
                                <a href="">
                                   <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
                        <h4>
                            Abierto
                        </h4>
                        <p>
                            Miércoles a Domingo
                        </p>
                        <p>
                            07.00 Pm - 01.00 Am
                        </p>
                    </div>
                </div>
                <div class="footer-info  wow animate__animated   animate__backInUp "  data-wow-delay=".6s">
                    <p>
                       &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved. <br/>
                      
                        &copy; <span id="displayYear"></span> Distributed By
                        <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
                        Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br><br>
                            
                    </p>
                </div>
           
        </footer>
         </div>
        <!-- footer section -->

    </div>
</template>

<script>
import { mapState} from "vuex";
export default {
    computed: {
    ...mapState("usuarios", ["usuario"]),
    
  },

}
</script>

<style lang="css" scoped>
.footer_section {
    background-color: #222831;
    color: #fea116;
    padding: 75px 0 15px 0;
    text-align: center;
}

.footer_section h4 {
    font-size: 28px;
}

.footer_section h4,
.footer_section .footer-logo {
    font-weight: 600;
    margin-bottom: 20px;
    font-family: 'Dancing Script', cursive;
}

.footer_section p {
    color: #dbdbdb;
}

.footer_section .footer-col {   
    font-size: 18px;
     font-family: "Nunito", sans-serif;
    font-weight: 600;
}

.footer_section .footer_contact .contact_link_box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

.footer_section .footer_contact .contact_link_box a {
    margin: 5px 0;
    color: #ffffff;
}

.footer_section .footer_contact .contact_link_box a i {
    margin-right: 5px;
}

.footer_section .footer_contact .contact_link_box a:hover {
    color: #ffbe33;
}

.footer_section .footer-logo {
    display: block;
    font-weight: bold;
    font-size: 38px;
    line-height: 1;
    color: #fea116;
}

.footer_section .footer_social {
    
    display: flex;    
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 10px;
}

.footer_section .footer_social a {  
   
    color: #222831;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: #ffffff;
    border-radius: 100%;
    margin: 0 7.5px;
    font-size: 32px;
   
    
}

.footer_section .footer_social a:hover {
    color: #ffbe33;
}

.footer_section .footer-info {
    text-align: center;
    margin-top: 95px;
}

.footer_section .footer-info p {
    color: #ffffff;
    margin: 0;
     font-size: 14px;
}

.footer_section .footer-info p a {
    color: inherit;
   
}
</style>