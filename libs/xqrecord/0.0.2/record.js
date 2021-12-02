/**
 * author: gitguanqi
 * version: 0.0.1
 * date: 2021-12-2
 * name: record audio and video
 */
function xqRecord() {
  this.stream = null;
  this.mediaRecorder = null;
  this.chunks = [];
  this.media = null;
}

xqRecord.prototype.createMedia = async function (type, option) {
  try {
    this.stream = await navigator.mediaDevices.getUserMedia(option);
    this.media = document.querySelector(type);
    if (type === "video") {
      this.media.srcObject = this.stream;
    }

    let options = {
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 2500000,
    };
    this.mediaRecorder = new MediaRecorder(this.stream, options);

    this.mediaRecorder.ondataavailable = (e) => {
      this.chunks.push(e.data);
    };

    this.mediaRecorder.start();

    this.mediaRecorder.onstop = () => {
      let blob = new Blob(this.chunks, { type: this.mediaRecorder.mimeType });
      let url = window.URL.createObjectURL(blob);
      if (type === "video") {
        this.media.srcObject = null;
      }
      this.media.src = url;
      this.stopSet(type);
    };
  } catch (error) {
    console.log("getUserMedia： ", error);
  }
};

xqRecord.prototype.start = function (type) {
  let option =
    type == "audio"
      ? {
          audio: true,
        }
      : {
          video: true,
        };
  this.createMedia(type, option);
};

xqRecord.prototype.stop = function () {
  this.mediaRecorder.stop();
};

xqRecord.prototype.stopSet = function (type) {
  if (type == "audio") {
    this.stream.getAudioTracks()[0].stop();
    this.stream = null;
  } else {
    this.stream.getVideoTracks()[0].stop();
  }
  this.stream = null;
  this.mediaRecorder = null;
  this.chunks = [];
  meida = null;
};
