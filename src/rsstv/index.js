import * as rsstv from "../../rsstv_pkg/rsstv.js";

rsstv.default().then(init);

let transcoder;

let file_input = document.getElementById("image_in");
let encode_button = document.getElementById("encode_button");

encode_button.addEventListener('click', () => {
    if (file_input.files) {
        console.log("button pressed with file")
    }
})

function init() {
    document.getElementById("loading_banner").remove();

    transcoder = rsstv.SSTVDecoderWASM.new();
}


