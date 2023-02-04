// TABCLOAKER JS INJECTION VERSION
// MADE BY GHOSTY/DARTHVADER1925
// ALL IMAGES GO TO THEIR RESPECTIVE OWNERS

const old_title = document.title;
var old_icon;
var favcions = [];
favcions["Google"] = "https://ghwosty.github.io/tabcloaker/assets/google-favicon.png"
favcions["Google Classroom"] = "https://ghwosty.github.io/tabcloaker/assets/google-classroom-favicon.png"
favcions["Gmail"] = "https://ghwosty.github.io/tabcloaker/assets/gmail-favicon.ico"
favcions["Google Docs"] = "https://ghwosty.github.io/tabcloaker/assets/google-docs-favicon.ico"

console.warn("Tabcloaker initializing...")
const styles = document.createElement("link")
styles.setAttribute("rel", "stylesheet");
styles.setAttribute("href", "https://ghwosty.github.io/tabcloaker/cdn/tabcloaker-styles.css")
document.head.appendChild(styles)

const getSiteConfig = function () {
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
<h1>Presets</h1>
<ul style="text-align: left;">
  <li class="tabcloaker-presetOption" data="Google">Google</li>
  <li class="tabcloaker-presetOption" data="Classes">Google Classroom</li>
  <li class="tabcloaker-presetOption" data="Inbox">Gmail</li>
  <li class="tabcloaker-presetOption" data="Google Docs">Google Docs</li>
</ul>
<button id="tabcloaker-apply-btn" class="tabcloaker-main-btn">Apply</button>
<button id="tabcloaker-reset-btn" class="tabcloaker-main-btn">Reset</button>
`
menu.style.display = "none";
document.body.appendChild(menu);

const shade = document.createElement("div")
shade.setAttribute("id", "tabcloaker-shade-main")
shade.style.display = "none"
document.body.appendChild(shade);

document.querySelectorAll(".tabcloaker-presetOption").forEach(ele => {
    ele.addEventListener("click", setPreset);
})

function setPreset(e) {
    console.log(e.target.innerHTML)
    var link = document.querySelector("link[rel~='icon']") || document.querySelector("link[rel~='shortcut icon']");
    if (!link) {
        link = document.createElement("link")
        link.rel = "icon"
        link.href = favcions[e.target.innerHTML]
        document.head.appendChild(link)
    } else {
        old_icon = link.href;
        link.href = favcions[e.target.innerHTML]
    }
    document.title = e.target.getAttribute("data");
    alert("Settings applied!")
    menu.style.display = "none"
    shade.style.display = "none"
}

function tabcloaker_apply() {
    try {
        if (document.getElementById("tabcloakertitle").value.replaceAll(" ", "") != "" && document.getElementById("tabcloakerfavicon").value.replaceAll(" ", "") != "") {
            var link = document.querySelector("link[rel~='icon']") || document.querySelector("link[rel~='shortcut icon']");
            old_icon = link.href;
            console.log(old_icon)
            if (!link) {
                tabcloaker_set(null, true);
            } else {
                tabcloaker_set(link, true);
            }
        } else {
            if (document.getElementById("tabcloakerfavicon").value.replaceAll(" ", "") == "") {
                var c = confirm("Website icon will not change. Ok?")
                var l = document.querySelector("link[rel~='icon']") || document.querySelector("link[rel~='shortcut icon']");
                old_icon = l.href;
                if (c) { tabcloaker_set(l, false); }
                return
            }
            alert("Inputs must be filled!")
        }
    } catch (err) {
        console.error(err)
    }
}

function tabcloaker_set(link, changeIcon) {
    document.title = document.getElementById("tabcloakertitle").value;
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        if (changeIcon) link.href = document.querySelector("#tabcloakerfavicon").value;

    }
    if (changeIcon) old_icon = link.href;
    alert("Settings applied!")
    menu.style.display = "none"
    shade.style.display = "none"
}

setTimeout(() => {
    document.querySelector("#tabcloaker-apply-btn").addEventListener("click", tabcloaker_apply)
    document.querySelector("#tabcloaker-reset-btn").addEventListener("click", tabcloaker_reset)
}, 500)

function tabcloaker_reset() {
    document.title = old_title;
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = old_icon;
    alert("Settings applied!")
    menu.style.display = "none"
    shade.style.display = "none"
}

document.addEventListener("keydown", function (e) {
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
