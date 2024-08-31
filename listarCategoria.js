const requestCategorias = fetch(`http://localhost:8080/categorias`)
  .then((resp) => {
    resp.json().then((data) => {
        const listaCategorias = document.getElementById('listaCategorias')
      data.map(({id,nombreCategoria})=>{
        const categoria = document.createElement("li")
        categoria.innerHTML = `ID: ${id} Nombre: ${nombreCategoria}`
        listaCategorias.appendChild(categoria)
      })
    });
  })
  .catch(console.warn);