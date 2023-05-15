function validarFormulario() {
    var campo1 = document.getElementById('campo1').value;
    var campo2 = document.getElementById('campo2').value;
    var codigoPostal = document.getElementById('codigoPostal').value;
    var dni = document.getElementById('dni').value;
    var email = document.getElementById('email').value;

    if (campo1.trim() === '' || campo2.trim() === '' || codigoPostal.trim() === '' || dni.trim() === '' || email.trim() === '') {
      alert('No deben existir campos vacíos');
      return false;
    }

    if (isNaN(campo2)) {
      alert('El Campo2 debe ser un número válido');
      return false;
    }

    var codigoPostalRegExp = /^(11|11\d|12\d|13\d|14\d|21\d|22\d|23\d|24\d|29\d|41\d|41\d|41\d|41\d|42\d|43\d|44\d|45\d|46\d|47\d|48\d|49\d|51\d|52\d|56\d|62\d|63\d|64\d|65\d|66\d|67\d|68\d|69\d|71\d|72\d|73\d|74\d|75\d|76\d|77\d|78\d|79\d|80\d|81\d|82\d|83\d|84\d|85\d|86\d|87\d|88\d|89\d|91\d|92\d|93\d|94\d|95\d|96\d|97\d|98\d|99\d)$/;
    if (!codigoPostalRegExp.test(codigoPostal)) {
      alert('El código postal no es válido para la provincia de Cádiz');
      return false;
    }

    var dniRegExp = /^\d{8}[A-HJ-NP-TV-Z]$/;
    if (!dniRegExp.test(dni)) {
      alert('El DNI no es válido');
      return false;
    }

    var letraDNI = dni.charAt(dni.length - 1);
    var numerosDNI = dni.substring(0, dni.length - 1);
    var letraCalculada = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var resto = numerosDNI % 23;
    var letraCorrecta = letraCalculada.charAt(resto);

    if (letraDNI.toUpperCase() !== letraCorrecta) {
      alert('La letra del DNI no coincide con los dígitos');
      return false;
    }

    var emailRegExp = /^\S+@\S+\.\S+$/;
    if (!emailRegExp.test(email)) {
      alert('El email no tiene un formato válido');
      return false;
    }

    return true;
  }