<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("motivacaoBtn").onclick = function() {
            document.getElementById("mensagem").innerText = "Obrigado por ver, fiz o meu máximo!";
            document.getElementById("mensagem").style.display = "block"; // Exibe a mensagem
        };
    });
</script>
