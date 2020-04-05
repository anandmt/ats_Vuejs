Vue.component("registration", {
  data: function () {
    return {
      greetings: "Please enter your name and picture URL below to register.",
      name: "",
      URL: "",
    };
  },
  methods: {
    RegisterNewMember: function (status, entryTime, exitTime) {
      if (!this.name || !this.URL) {
        swal({
          icon: "error",
          title: "Oops...",
          text:"I won't be able to register you without your name and picture URL!!!",
          footer: "<a href>This is needed to Train the Tensorflow Model</a>",
        });
        return false;
      }
      app.persons.push({
        name: this.name,
        image: this.URL,
        entry: entryTime,
        exit: exitTime,
        status: status,
      });
      (this.name = ""),
        (this.URL = ""),
        trainModels(),
        console.log(this.persons);
    }
  },
  template: `
    <div class="rounded bg-info mt-4 p-4">
                        <p class="h5">{{greetings}}</p>
                        <form class="mt-5" onsubmit="return false">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" required placeholder="Please enter you name." class="form-control"
                                    id="name" v-model="name">
                            </div>
                            <div class="form-group">
                                <label for="url">URL</label>
                                <input type="text" required placeholder="Please enter url of your picture."
                                    class="form-control" id="url" v-model="URL">
                            </div>
                            <button v-on:click="RegisterNewMember('enter',new Date(),'')"
                                class="btn btn-dark">Register</button>
                        </form>
                    </div>
    `,
});
