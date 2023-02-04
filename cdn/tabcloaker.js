// TABCLOAKER JS INJECTION VERSION
// ORIGINAL VERSION IS GOOGLE EXTENSION
// MADE BY GHOSTY/DARTHVADER1925

var old_title = document.title;
var old_icon;

console.warn("Tabcloaker initializing...")
const styles = document.createElement("link")
styles.setAttribute("rel", "stylesheet");
styles.setAttribute("href", "cdn/tabcloaker-styles.css")
document.head.appendChild(styles)

const getSiteConfig = function() {
  localStorage.getItem("tabcloaker.site.config")
}

const menu = document.createElement("div");
menu.setAttribute("id", "tabclaoker-gui-main")
menu.innerHTML = `
<br><br><br>
<h1>TabCloaker</h1>
<input id="tabcloakertitle" placeholder="Website title" class="tabcloaker-input">
<br><br>
<input id="tabcloakerfavicon" placeholder="Favicon (website icon, img link)" class="tabcloaker-input">
<br><br>
<button id="tabcloaker-apply-btn" class="tabcloaker-main-btn">Apply</button>
<br><br>
<button id="tabcloaker-reset-btn" class="tabcloaker-main-btn">Reset</button>
`
menu.style.display = "none";
document.body.appendChild(menu);

const shade = document.createElement("div")
shade.setAttribute("id", "tabcloaker-shade-main")
shade.style.display = "none"
document.body.appendChild(shade);

function tabcloaker_apply() {
  try {
    if (document.getElementById("tabcloakertitle").value.replaceAll(" ", "") != "" && document.getElementById("tabcloakerfavicon").value.replaceAll(" ", "") != "") {
      document.title = document.getElementById("tabcloakertitle").value;
      var link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      old_icon = link.href;
      link.href = document.getElementById("tabcloakerfavicon").value;
    } else {
      alert("Inputs must be filled!")
    }
  } catch (err) {
    alert(err)
  }
}

setTimeout(() => {
    document.querySelector("#tabcloaker-apply-btn").addEventListener("click", tabcloaker_apply)
    document.querySelector("#tabcloaker-reset-btn").addEventListener("click", tabcloaker_reset)
}, 500) 

function tabcloaker_reset() {
  if (old_icon == null) return
  document.title = old_title;
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = old_icon;
}

document.addEventListener("keydown", function(e) {
  const keycode = e.keyCode;
  if (keycode == 220) {
    // open gui menu
    if (document.querySelector("#tabclaoker-gui-main").style.display == "none") {
      menu.style.display = "block";
      shade.style.display = "block";
    } else {
      menu.style.display = "none"
      shade.style.display = "none"
    }
  }
})

console.log("Tabcloaker initialized.")