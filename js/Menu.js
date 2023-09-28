const Menu=async()=>{
    try {
        let data=await fetch("https://turajarmin.github.io/jsonMft/db.json")
        let res=await data.json()
        let menu=res.menu.map((elem)=>{
            return ` <li class="nav-item">
            <a
              class="nav-link active text-white text-capitalize"
              href=${elem.https}
              aria-current="page"
              style="font-weight: bold;font-size: 12px;"
              >${elem.name}</a
            >
          </li>`
        })
        document.querySelector("ul.navbar-nav").innerHTML=menu.join("")
    } catch (error) {
        console.log(error.message);
    }
}
export default Menu;