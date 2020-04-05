Vue.component("mark-attendance", {
    data: function () {
      return {
        isHidden: false,
        Training: 'Training...',
        start: 'Loading...',
      };
    },
    methods: {
        MarkAttendance: function () {
            var BreakLoop = {};
            try {
                app.persons.forEach(function (item) {
                    if (item.name === app.identifiedPerson) {
                        if (item.status === 'enter') {
                            console.log('Marking exit');
                            item.status = 'exit';
                            app.status = 'exit';
                        }
                        else {
                            console.log('Marking entry');
                            item.status = 'enter';
                            app.status = 'enter';
                        }
                        throw BreakLoop; // Breaking foreach.
                    }
                });
            } catch (e) {
                if (e !== BreakLoop) throw e;
            }
            swal(app.identifiedPerson, "You have been successfully " + app.status + "!", "success");
        }
    },
    template: `
    <div class="rounded mt-3 p-3 bg-info">
    <p class="h4 animated bounceInDown">Attendance Tracking System</p>
    <div class="d-flex">
        <div class="p-2">
            <button v-if="!isHidden" v-on:click="MarkAttendance()"
                class="btn btn-success animated wobble delay-5s">{{start}}</button>
        </div>
        <div class="p-2">
            <div v-if="isHidden" class="spinner-border text-warning"></div>
            <p v-if="isHidden" class="small" id="status">{{Training}}</p>
        </div>
    </div>
</div>
      `,
  });
  