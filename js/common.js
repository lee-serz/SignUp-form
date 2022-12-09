let email = document.getElementById('email-field');
let name = document.getElementById('name-field');
let password = document.getElementById('password-field');
let confirm_password = document.getElementById('confirm-password-field');
let not_match = document.querySelector('.not-match')

password.onchange = (e) => {
    if (confirm_password.value != ""){
	    if (password.value != confirm_password.value) {
			not_match.style.display = 'block';
	    	}
		else {
			not_match.style.display = 'none';
			}
		}
	};

confirm_password.onchange = (e) => { // Проверка на совпадение паролей
    if (password.value != "" && confirm_password.value != ""){
	    if (password.value != confirm_password.value) {
			not_match.style.display = 'block';
	    	}
		else {
			not_match.style.display = 'none';
			}
		}
	};
	
