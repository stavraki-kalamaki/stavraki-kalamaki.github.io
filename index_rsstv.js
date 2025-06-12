import * as rsstv from "./rsstv_pkg/rsstv.js";

rsstv.default().then(init);

function init() {
    document.getElementById("loading_banner").remove();

    let transcoder = rsstv.SSTVDecoderWASM.new();
    console.log(transcoder);
}