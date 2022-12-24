
import * as Gluon from '@gluon-framework/gluon';
Gluon.open('https://deezer.com/login', {
    onLoad: () => {
        setTimeout(() => {
            console.log("Dealer")
            //add css using javascript
            document.head.appendChild(document.createElement("style")).innerHTML = `
        .footer.footer-themed {
            display: none !important;
        }
        `;
            window.addEventListener('load', function () {
                var profile = document.getElementsByClassName("topbar-profile")
                for (var i = 0; i < profile.length; i++) {
                    profile[i].onclick = function () {
                        console.log("trigger click")
                        var menu = document.getElementsByClassName("account-menu")
                        console.log(menu)
                        setTimeout(() => {
                            if (menu.length == 1) {
                                for (var i = 0; i < menu.length; i++) {
                                    console.log("injection")
                                    var buttonInject = `<li class="account-item"><a class="account-link is-main animate-wobble" href="/account"><span class="account-link-label">Dealer settings</span><svg class="svg-icon svg-icon-chevron-right animate-wobble-target" focusable="false" height="12" role="img" width="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m7.3 6-4.5 4.4a.9.9 0 0 0 0 1.3.8.8 0 0 0 1.3 0l5.2-5.1a.9.9 0 0 0 0-1.2L4.1.3a.9.9 0 0 0-1.3 0 .9.9 0 0 0 0 1.3Z"></path></svg></a></li>`
                                    menu[i].insertAdjacentHTML('beforeend', buttonInject);
                                }
                            } else {
                                console.log(menu)
                                console.log("no menu")
                            }
                        }, 100)
                    }
                }
            })
        }, 200);
    }
});