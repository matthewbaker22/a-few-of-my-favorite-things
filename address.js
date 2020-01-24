const container = document.querySelector("#favoriteThings")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const aThing = document.querySelector("#thing").value
    const aLocation = document.querySelector("#location").value

    container.innerHTML += `
        <section>
            <h1>I can purchase ${aThing} at ${aLocation}.
        </section>
    `

})