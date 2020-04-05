Vue.component('reg-persons', {
    data: function () {
      return {
          persons: [],
      }
    },
          created() {
              fetch('https://c27924d5-23e1-4196-875f-b0f26a254799.mock.pstmn.io/ats/')
                  .then(response => response.json())
                  .then(json => {
                      this.persons = json
                  })
          },
    template: `
    <div class="p-1" style="background-color: #2A1468">
    <p class="h6">Registered</p>
                      <div v-for="person in this.persons" class="p-2">
                          <img class="border rounded-circle" height="60" width="60" v-bind:alt="person.name"
                              v-bind:src="person.image" />
                      </div></div>
    `
  })