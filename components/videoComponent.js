Vue.component("video-container", {
  template: `
    <div id="videoContainer">
    <div class="d-flex flex-column m-3">
        <div class="p-2 rounded" style="background-color: #022135;">
            <video id="video" width="720" height="560" autoplay muted></video>
        </div>
    </div>
    </div>
      `,
});
