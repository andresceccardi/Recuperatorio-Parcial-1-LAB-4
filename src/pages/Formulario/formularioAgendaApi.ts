export async function getContactoById(id: any) {
    let urlServer = 'http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=Z' + id;
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	return await response.json();
}