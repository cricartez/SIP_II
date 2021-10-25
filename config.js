const NGROK_IP_USUARIOS = "http://a79d-24-232-230-126.ngrok.io"
const NGROK_IP_PLAN_DIETARIO = "http://c24e-24-232-230-126.ngrok.io"
let config = {
    backendURLs: {
        getUser:`${NGROK_IP_USUARIOS}/api/usuarios/findOne`,
        patologiasList: `${NGROK_IP_USUARIOS}/api/patologias/list`,
        patologiasUsuariosCreate: `${NGROK_IP_USUARIOS}/api/usuarios_patologias/create`,
        patologiasUsuariosDelete: `${NGROK_IP_USUARIOS}/api/usuarios_patologias/deleteByIdUsuario_IdPatologia`,
        patologiasUsuariosGet: `${NGROK_IP_USUARIOS}/api/usuarios_patologias/findPatologiasByIdUsuario`,
        planDietario: `${NGROK_IP_PLAN_DIETARIO}/plan`
    },
    loggedUser:{
        id:1
    }
}

export default config;