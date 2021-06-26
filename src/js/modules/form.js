const form = () => {
	const forms = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('input');

	//==============Сообщения о ходе отправки==================
	const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
		// spinner: 'assets/img/spinner.gif',
        // ok: 'assets/img/ok.png',
        // fail: 'assets/img/fail.png'
    };
	//=========================================================
	//==============Настройка отправки формы===================
	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data
		});	
		return await res.text(); //возвращается результат в виде текста(для проверки) или res.json();
	};
	//=========================================================
	const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });

		// если есть checkbox
		// let checkboxes = form.querySelectorAll('.checkbox__input');
		// if (checkboxes.length > 0) {
		// 	for (let index = 0; index < checkboxes.length; index++) {
		// 		const checkbox = checkboxes[index];
		// 		checkbox.checked = false;
		// 	}
		// }
    };

	if (forms.length > 0) {
		forms.forEach(item => {
			item.addEventListener('submit', (e) => {
				e.preventDefault();
				let formReq = item.querySelectorAll('.req');
				formRemoveError(formReq);
				let error = formValidate(formReq);
				if (error === 0) {
					let textMessage = document.createElement('div');
					item.appendChild(textMessage);
					textMessage.classList.add('sendmess')
					textMessage.textContent = message.loading;
					//=========FormData=====================================
					const formData = new FormData(item);
					// formData.append('image', formImage.files[0]);
					//Добавить данные к отправке из других окон (не формы)
					// if (item.getAttribute('data-calc') === "end") { 
					// 	let val = costBlock.innerHTML;
					// 	let obj = {
					// 		cost: val
					// 	};
					// 	console.log(obj);
					// 	for (let key in obj) {
					// 		formData.append(key, obj[key]);
					// 	}
					// }
					//======================================================
					postData('../server.php', formData)
					.then(res => {
						console.log(res); //!убрать
						// statusImg.setAttribute('src', message.ok);
						textMessage.textContent = message.success;
					})
					.catch(() => {
						// statusImg.setAttribute('src', message.fail);
						textMessage.textContent = message.failure;
					})
					.finally(() => {
						clearInputs();
						setTimeout(() => {
							textMessage.remove();
							// item.style.display = 'block';
							// item.classList.remove('fadeOutUp');
							// item.classList.add('fadeInUp');
						}, 5000);
					});
				}
			});
		});
	}

	// Валидация формы
		
	function formValidate(selector) {
		let error = 0;
		if (selector.length > 0) {
			for (let index = 0; index < selector.length; index++) {
				const input = selector[index];
				let placeholder = input.getAttribute('placeholder');
				if (input.classList.contains('email')) {
					if (emailTest(input) || input.value == placeholder) {
						formAddError(input);
						error++;
					}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
				} else {
					if (input.value == '' || input.value == placeholder) {
						formAddError(input);
						error++;
					}
				}
			}
		}
		return error;
	}

	function formAddError(item) {
		item.parentElement.classList.add('error');
		item.classList.add('error');
	
		//! Оставить эту часть, если в html добавлены блоки с сообщением об ошибке (.form-error)
		let formError = item.nextElementSibling;  // если ошибка для каждого input
		// let formError = item.parentElement.querySelector('.form-error'); // если ошибка для всей формы
		formError.classList.add('active');

	}

	function formRemoveError(selector) {
		if (selector.length > 0) {
			for (let index = 0; index < selector.length; index++) {
				const input = selector[index];
				input.parentElement.classList.remove('error');
				input.classList.remove('error');

				//! Оставить эту часть, если в html добавлены блоки с сообщением об ошибке (.form-error)
				let formError = input.nextElementSibling; // если ошибка для каждого input
				// let formError = input.parentElement.querySelector('.form-error'); // если ошибка для всей формы
				formError.classList.remove('active');
			}
		}
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
}
export default form;

//*=========если необходимо отправлять данные на разные адреса======================
//=========создаем объект, который содержит пути для передачи информации
	// const path = {
	// 	designer: 'assets/server.php',
	// 	question: 'assets/question.php'
	// }
//==================================================================================
//===Определяем путь для отправки (внутри события submit)===========================
// let api;
// если модальное окно содержит загрузку картинки (класс popup-design) или класс calc_form, то эта форма отправится дизайнеру (closest возвращает true или false)
// item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
// console.log(api);
//===================================================================================
//postData(api, formData) - вместо url указываем полученный api
//*===================================================================================


