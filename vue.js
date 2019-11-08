var data = {
    tareas: [{
            texto: 'Aprender Vue.js',
            terminada: false
        },
        {
            texto: 'Aprender React',
            terminada: false
        },
        {
            texto: 'Aprender Angular',
            terminada: false
        },
    ],
    nuevaTarea: ''
}

Vue.component('titulo', {
    template: '<h2>{{titulo}}</h2>',
    data: function () {
        return {
            titulo: 'Lista de Tareas - Vue'
        }
    }

})

Vue.component('nueva-tarea', {
    template: `
     <div class = "input-group" >
         <input type = "text" class = "form-control" placeholder = "Escribe una tarea" v-model="nuevaTarea" v-on:keyup.enter="agregarTarea" >
         <span class = "input-group-btn" >
            <button type = "button" class = "btn btn-primary" v-on:click="agregarTarea" > Agregar </button> 
        </span> 
    </div>
    `,
    data: function () {
        return data;
    },
    methods: {
        agregarTarea: function () {
            var text = this.nuevaTarea.trim();
            if (text) {
                this.tareas.push({
                    texto: text,
                    terminada: false
                })
            }
            this.nuevaTarea = ''
        }
    }
})

Vue.component('lista-de-tareas', {
    template: `
        <ul class="list-group">
            <li v-for="(tarea,indice) of tareas" class="list-group-item" v-bind:class="{terminada : tarea.terminada}">
                {{tarea.texto}}
                <span class="pull-right">
                    <button type="button" class="btn btn-xs btn-success glyphicon glyphicon-ok"
                        v-on:click="tarea.terminada = !tarea.terminada"></button>
                    <button type="button" class="btn btn-xs btn-danger glyphicon glyphicon-remove"
                        v-on:click="borrar(indice)"></button>
                </span>
            </li>
        </ul>
    `,
    data: function () {
        return data;
    },
    methods: {
        borrar: function (indice) {
            this.tareas.splice(indice, 1)
        }
    }
})

var app = new Vue({
    el: "#app",
    data: data,
})