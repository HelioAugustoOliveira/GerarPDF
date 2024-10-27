const btgerar = document.querySelector("#gerar-pdf")

btgerar.addEventListener("click", () => {
    // Conteudo do PDF
    const content = document.querySelector("#content")

    // Configuração do arquivo final pdf
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    // Gerar ev baixar o PDF
    html2pdf().set(options).from(content).save();


})

