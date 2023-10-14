var camposObligatorios = new Array('Nombre', 'Teléfono', 'Correo electrónico', 'Empresa', 'Ciudad', 'Tipo de consulta', 'Términos de servicio');

var valoresCampos = new Array('Nombre', 'Teléfono', 'Correo electrónico', 'Empresa', 'Ciudad', 'Tipo de consulta', 'Términos de servicio');

function validarCamposObligatorios() {
    for (var i = 0; i < camposObligatorios.length; i++) {
        var campo = document.forms['WebToLeads108591000033167955'][camposObligatorios[i]];
        var _this = campo;
        var mensajeHint = '<span class="hint">' + valoresCampos[i] + ' es obligatorio.';
        var mensajeErrorTelefono = '<span class="hint">Por favor, ingrese un número de teléfono válido.';
        var mensajeErrorCorreo = '<span class="hint">Por favor, ingrese un correo electrónico válido.';
        var mensajeErrorTerminos = '<span class="hint">Por favor, lea y acepte los términos de servicio y la política de privacidad.</span>';
        
        if (campo) {
            if (((campo.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                if ($('.hint')) {
                    $('.hint').remove();
                }
                $(_this).parent().append(mensajeHint);
                campo.focus();
                return false;
            } else if (campo.nodeName == 'SELECT') {
                if (campo.options[campo.selectedIndex].value == '-None-') {
                    if ($('.hint')) {
                        $('.hint').remove();
                    }
                    $(_this).parent().append(mensajeHint);
                    campo.focus();
                    return false;
                }
            } else if (campo.name == 'tos') {
                if (!tos.checked) {
                    if ($('.hint')) {
                        $('.hint').remove();
                    }
                    $(_this).parent().append(mensajeErrorTerminos);
                    campo.focus();
                    return false;
                }
            } else if (campo.type == 'checkbox') {
                if (campo.checked == false) {
                    alert('Por favor, acepte ' + valoresCampos[i]);
                    campo.focus();
                    return false;
                }
            }
            // Validación de número de teléfono
            if (camposObligatorios[i] === "Teléfono") {
                if (!(/^1[3456789]\d{9}$/.test(campo.value))) {
                    if ($('.hint')) {
                        $('.hint').remove();
                    }
                    $(_this).parent().append(mensajeErrorTelefono);
                    campo.focus();
                    return false;
                }
            }
            // Validación de correo electrónico
            if (camposObligatorios[i] === "Correo electrónico") {
                if (!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,10})$/.test(campo.value))) {
                    if ($('.hint')) {
                        $('.hint').remove();
                    }
                    $(_this).parent().append(mensajeErrorCorreo);
                    campo.focus();
                    return false;
                }
            }
            try {
                if (campo.name == 'Apellido') {
                    nombre = campo.value;
                }
            } catch (e) {}
        }
    }
    document.getElementById('formsubmit').disabled = true;
    alert("¡Su información ha sido enviada!");
}

