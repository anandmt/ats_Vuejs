Vue.component('reg-persons', {
    created() {
        fetch('https://my-json-server.typicode.com/anandmt/jsondb/users')
            .then(response => response.json())
            .then(json => {
                app.persons = json
            })
    },
    template: `
    <div class="p-1" clearfix>
    <p class="mt-3 h6">Registered</p>
    <div v-for="person in persons" class="p-2">
        <span class="badge badge-pill badge-warning positionAbsolute">{{person.status}}</span>
        <img v-if="person.status==='enter'" class="border border-success p-1 rounded-circle border-3"
            height="60" width="60" v-bind:alt="person.name" v-bind:src="person.image" />
        <img v-else class="border border-danger p-1 rounded-circle border-3" height="60" width="60"
            v-bind:alt="person.name" v-bind:src="person.image" />
    </div>
</div>
    `
  })