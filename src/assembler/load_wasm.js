import * as assembler from "../../assembler_pkg/cool_cpu_assembler.js"

assembler.default().then(init)

function init() {
    document.getElementById("loading_banner").remove();
    update();
}

document.addEventListener("input", update)

function update() {
    const text = document.getElementById("asm_in");
    try {
        const assembled = assembler.assemble_js(text.value);

        document.getElementById("assembled_bytes").textContent = to_base_arr(assembled, 16, " ", 2);

        document.getElementById("assembled_bin").textContent = to_base_arr(assembled, 2, "\n", 8);

        document.getElementById("assembled_decimal").textContent = to_base_arr(assembled, 10, " ", 0);
        document.getElementById("errors").textContent = "";
    } catch (e) {
        document.getElementById("errors").textContent = e;
    }
}

function to_base_arr(inp, base, sep, padding_len) {
    let out = [];
    for (let elem of inp) {
        out.push(elem.toString(base).padStart(padding_len, "0"));
    }
    return out.join(sep);
}