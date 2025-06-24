import * as rsstv from "../../rsstv_pkg/rsstv.js";

let transcoder;

rsstv.default().then(init);

const file_input = document.getElementById("image_in");
const encode_button = document.getElementById("encode_button");
const img_preview = document.getElementById("img_preview");
const audio_out = document.getElementById("encode_out");

const byte_reader = new FileReader();
const url_reader = new FileReader();

let image;
let buf;
let file;

encode_button.addEventListener('click', () => {
    const res = transcoder.encode(buf);
    console.log("starting to make a blob");
    const audio_blob = new Blob(res, { type : "audio/wav" });
    const url = URL.createObjectURL(audio_blob);
    console.log("here");
    audio_out.src = url;
});

file_input.addEventListener('change', (event) => {
    file = event.target.files[0];

    byte_reader.readAsArrayBuffer(file);
    url_reader.readAsDataURL(file);
})

byte_reader.onload = () => {
    buf = new Uint8Array(byte_reader.result);    
};

url_reader.onload = () => {
    img_preview.src = url_reader.result;
}

function init() {
    rsstv.init();

    document.getElementById("loading_banner").remove();

    transcoder = rsstv.SSTVDecoderWASM.new();
}


