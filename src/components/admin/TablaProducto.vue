<template>
  <div>

    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between">
          <h2 >Productos</h2>
          <button type="button" class="btn btn-success mb-2 fs-5 py-0" data-bs-toggle="modal"
            data-bs-target="#Modalagregar" @click="cambioDeModalAgregar()">
            <i class="bi bi-file-plus-fill fs-5"></i>
            Agregar Producto
          </button>
        </div>


        <table class="table">
          <thead>
            <tr class="text-center">
              <th v-for="(item, index) in propsTituloTabla" :key="index" class="bg-warning">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="align-middle text-center border" v-for="(product, index) in propsProductos" :key="index">
              <td class="border">
                <img :src="product.imagen" alt="" class="img img-thumbnail" />
              </td>
              <td class="border">{{ product.nombre }}</td>
              <td class="border">$ {{ product.precio }}</td>
              <td class="td text-center px-5">{{ product.descripcion }}</td>
              <td class="border">{{ product.categoria }}</td>

              <td>
                <div @click="cambioDeModalModificar">
                  <i class="bi bi-pencil-square text-primary fs-3 btn p-0" title="editar" data-bs-toggle="modal"
                    data-bs-target="#Modalagregar" @click="IconoModificarProducto(product)"></i>
                </div>
              </td>
              <td>
                <i class="bi bi-trash text-danger fs-3 btn p-0" title="eliminar"
                  @click="EmitirProductoEliminar(product.id, product.nombre)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <!-- Modal Agregar -->
    <div class="modal fade" id="Modalagregar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
      data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-warning">
            <h5 class="modal-title" id="exampleModalLabel">{{ tituloModal }}</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="validarAgregar(btnModal)">
              <div class="mb-2">
                <label for="nombreProducto" class="form-label pt-2">Nombre</label>
                <p class="text-success d-inline" v-if="$v.producto.nombre.minLength && $v.producto.nombre.required">
                  <i class="bi bi-check-circle-fill fs-5 ms-2"></i>
                </p>
                <input type="text" class="form-control w-100" id="nombreProducto"
                  placeholder="Ingrese nombre producto ...." v-model="producto.nombre" autocomplete="off" />
                <p class="text-danger text-center" v-if="enviado && !$v.producto.nombre.required">
                  {{ campoVacio }}
                </p>
                <p class="text-danger text-center" v-if="enviado && !$v.producto.nombre.minLength">
                  Ingrese un nombre de al menos 4 caracteres
                </p>
              </div>

              <div class="mb-2">
                <label for="precioProducto" class="form-label pt-2">Precio</label>
                <p class="text-success d-inline" v-if="$v.producto.precio.minLength && $v.producto.precio.required">
                  <i class="bi bi-check-circle-fill fs-5 ms-2"></i>
                </p>
                <input type="number" class="form-control w-75" id="precioProducto"
                  placeholder="Ingrese precio producto ...." v-model="producto.precio" />
                <p class="text-danger text-center" v-if="enviado && !$v.producto.precio.required">
                  {{ campoVacio }}
                </p>
              </div>

              <div class="mb-2">
                <label for="descripcionProducto" class="form-label pt-2">Descripción</label>
                <p class="text-success d-inline" v-if="
                  $v.producto.descripcion.minLength && $v.producto.descripcion.required
                ">
                  <i class="bi bi-check-circle-fill fs-5 ms-2"></i>
                </p>
                <textarea name="textarea" rows="3" id="descripcionProducto" placeholder="Descripcion del producto...."
                  class="w-100 form-control" v-model="producto.descripcion">
                </textarea>
                <p class="text-danger text-center" v-if="enviado && !$v.producto.descripcion.required">
                  {{ campoVacio }}
                </p>
                <p class="text-danger text-center" v-if="enviado && !$v.producto.descripcion.minLength">
                  La descripción debe tener al menos 10 caracteres
                </p>
              </div>
              <div class="mb-2">
                <label for="categoriaProducto" class="form-label pt-2">Categoría</label>
                <select class="form-select" aria-label="Default select example" v-model="producto.categoria">
                  <option class="form-select" value="Pizza">Pizza</option>
                  <option value="Hamburguesa">Hamburguesa</option>
                  <option value="Milanesa">Milanesa</option>
                </select>
              </div>

              <div class="mb-2">
                <label for="imagenProducto" class="form-label pt-2">URL Imagen</label>
                <p class="text-success d-inline" v-if="$v.producto.imagen.minLength && $v.producto.imagen.required ">
                  <i class="bi bi-check-circle-fill fs-5 ms-2"></i>
                </p>
                <input type="text" class="form-control" id="imagenProducto" placeholder="Ingrese url imagen ...."
                  v-model="producto.imagen" autocomplete="off" />
                <p class="text-danger text-center" v-if="enviado && !$v.producto.imagen.required">
                  {{ campoVacio }}
                </p>
                <p class="text-danger text-center" v-if="enviado && !$v.producto.imagen.minLength">
                  La Url de la imagen debe tener al menos 8 caracteres
                </p>
              </div>

              <div class="text-end mt-4">
                <button type="submit" class="btn acceder" v-if="$v.producto.imagen.minLength && $v.producto.imagen.required && $v.producto.descripcion.minLength && $v.producto.descripcion.required && $v.producto.precio.required && $v.producto.nombre.required && $v.producto.nombre.minLength" data-bs-dismiss="modal">
                  {{ btnModal }}
                </button>
                <button type="button" class="btn btn-danger ms-2" data-bs-dismiss="modal" @click="resetearForm()">
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin Modal Agregar -->
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "TablaProductos",
  data() {
    return {
      producto: {
        nombre: "",
        precio: "",
        descripcion: "",
        categoria: "Pizza",
        imagen: "",
        cantidad: 1,      
      },
      idModificar: "",
      enviado: false,
      tituloModal: "",
      btnModal: "",
    };
  },

  props: {
    propsTituloTabla: {
      type: Array,
    },
    propsProductos: {
      type: Array,
    },
  },
  methods: {
    cambioDeModalAgregar() {
      this.tituloModal = "Agregar Producto";
      this.btnModal = "Agregar";
    },
    cambioDeModalModificar() {
      this.tituloModal = "Modificar Producto";
      this.btnModal = "Modificar";
    },
    EmitirProductoEliminar(id, nombre) {    
      this.$swal.fire({
        title: `Esta seguro que desea eliminar `,
        text: nombre,
        icon: "error",
        showCancelButton: true,

        confirmButtonColor: '#FC4848',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {

          this.$swal.fire({

            icon: "success",
            title: 'Eliminado exitosamente',
            showConfirmButton: false,
            timer: 2000,
          }
          )
          this.$emit("ProductoParaEliminar", id);
        }
      });


    },
    IconoModificarProducto(product) {
      this.idModificar = product.id;
      this.producto.nombre = product.nombre;
      this.producto.precio = product.precio;
      this.producto.descripcion = product.descripcion;
      this.producto.categoria = product.categoria;
      this.producto.imagen = product.imagen;
    },
    resetearForm() {
      this.producto.nombre = "";
      this.producto.precio = "";
      this.producto.descripcion = "";
      this.producto.imagen = "";
      this.idModificar = "";
      this.campoVacio = "";
      this.enviado = false;
    },
    validarAgregar(form) {
      if (form == "Agregar") {
        this.enviado = true;
        if (this.$v.$invalid) {
          this.campoVacio = "Este Campo esta vacío";
          return false;
        }

        this.$emit("ProductoParaAgregar", this.producto);
        this.resetearForm();
        this.$swal.fire({
          icon: "success",
          title: "Producto agregado",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        this.enviado = true;
        if (this.$v.$invalid) {
          this.campoVacio = "Este Campo esta vacío";
          return false;
        }

        this.$emit("ProductoParaModificar", this.idModificar, this.producto);

        this.$swal.fire({
          icon: "success",
          title: "Producto modificado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },

  },
  validations: {
    producto: {
      nombre: {
        required,
        minLength: minLength(4),
      },
      precio: {
        required,
        minLength: minLength(1),
      },
      descripcion: {
        required,
        minLength: minLength(10),
      },
      imagen: {
        required,
        minLength: minLength(8),
      },
    },
  },
};
</script>

<style lang="css" scoped>
.img {
  width: 85px;
}

.td {
  width: 45%;
}

td {
  font-size: 20px;
}
.acceder {
    font-family: 'Nunito', sans-serif;
    background-color: #FEA116;
}
</style>
