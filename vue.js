var app = new Vue({
    el: "#app",
    data: {
        titulo: 'Lista de Tareas - Vue',
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
        },
        borrar: function (indice) {
            this.tareas.splice(indice, 1)
        }
    }
})