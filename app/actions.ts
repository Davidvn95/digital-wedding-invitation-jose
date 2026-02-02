"use server"

export async function submitRSVP(formData: {
  name: string
  email: string
  attendance: string
  message: string
}) {
  const googleFormUrl = process.env.GOOGLE_FORM_URL || process.env.NEXT_PUBLIC_GOOGLE_FORM_URL

  if (!googleFormUrl) {
    console.error("GOOGLE_FORM_URL no está configurada")
    return { success: false, error: "Configuración incompleta" }
  }

  try {
    const response = await fetch(googleFormUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: formData.name,
        email: formData.email,
        asistencia: formData.attendance === "yes" ? "Sí" : "No",
        mensaje: formData.message,
        fecha: new Date().toLocaleString("es-CO"),
      }),
    })

    // Algunos scripts de Google devuelven 200 incluso con errores, 
    // o redirigen (302). Pero desde el servidor podemos manejarlo mejor.
    if (response.ok || response.status === 302) {
      return { success: true }
    }

    return { success: false, error: "Error en el servidor de destino" }
  } catch (err) {
    console.error("Error al enviar RSVP:", err)
    return { success: false, error: "Error de conexión" }
  }
}
