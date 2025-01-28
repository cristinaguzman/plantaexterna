document.getElementById("nombreFantasia").addEventListener("blur", function () {
  const alert = document.getElementById("alertNombreFantasia");
  if (!this.value.trim()) {
      alert.classList.remove("d-none");
  } else {
      alert.classList.add("d-none");
  }
});

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("blur", function () {
      const alertId = `alert${this.id.charAt(0).toUpperCase() + this.id.slice(1)}`;
      const alertElement = document.getElementById(alertId);

      if (!this.value.trim()) {
          alertElement.classList.remove("d-none");
      } else {
          alertElement.classList.add("d-none");
      }
  });
});


  // Validación del nombre
  function validateNombre() {
    const nombreInput = document.getElementById("nombreFactura");
    const nombreAlert = document.getElementById("nombreAlert");

    if (nombreInput.value.length < 3) {
      nombreAlert.style.display = "block";
    } else {
      nombreAlert.style.display = "none";
    }
  }

  // Validación del correo
  function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailAlert = document.getElementById("emailAlert");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value && !emailRegex.test(emailInput.value)) {
      emailAlert.style.display = "block";
    } else {
      emailAlert.style.display = "none";
    }
  }

function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailAlert = document.getElementById("emailAlert");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value && !emailRegex.test(emailInput.value)) {
      emailAlert.style.display = "block";
    } else {
      emailAlert.style.display = "none";
    }
  }

  // Validación del teléfono
  function validateTelefono() {
    const telefonoInput = document.getElementById("telefono1");
    const telefonoAlert = document.getElementById("telefonoAlert");
    const telefonoRegex = /^[0-9]{8,}$/; // Mínimo 8 dígitos

    if (telefonoInput.value && !telefonoRegex.test(telefonoInput.value)) {
      telefonoAlert.style.display = "block";
    } else {
      telefonoAlert.style.display = "none";
    }
  }

  function validateRUT() {
    const rutInput = document.getElementById("rut");
    const rutAlert = document.getElementById("rutAlert");
    const rutValue = rutInput.value;

    // Expresión regular para validar el formato del RUT (números, guion y dígito verificador)
    const rutRegex = /^[0-9]+-[0-9kK]{1}$/;

    // Función para validar el dígito verificador
    function isValidRUT(rut) {
      const [body, dv] = rut.split("-");
      let suma = 0;
      let multiplo = 2;

      for (let i = body.length - 1; i >= 0; i--) {
        suma += parseInt(body[i]) * multiplo;
        multiplo = multiplo === 7 ? 2 : multiplo + 1;
      }

      const dvCalculado = 11 - (suma % 11);
      const dvFinal = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();

      return dvFinal.toLowerCase() === dv.toLowerCase();
    }

    // Validar formato y dígito verificador
    if (rutValue && (!rutRegex.test(rutValue) || !isValidRUT(rutValue))) {
      rutAlert.style.display = "block";
    } else {
      rutAlert.style.display = "none";
    }
  }