// Stylesheet

const styles = document.createElement("link");
styles.rel = "stylesheet"
styles.href = "ghwosty.github.io/tabcloaker/cdn/code-editor.css"

document.head.appendChild(styles);

//

document.body.innerHTML = `
<body>
<h1>COde Editor</h1>

<textarea width="500px" height="1000px"></textarea>
</body>
<br><br>
<button>Open</button>
`

setTimeout(() => {
  document.querySelector("button").addEventListener("click", e);
}, 500)

function e() {
  var output = window.open();
  output.document.write(document.querySelector("textarea").value);
}
