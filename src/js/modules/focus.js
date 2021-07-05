// item - окно, которое должно получить фокус
// *ПОДКЛЮЧЕНИЕ
// import {blockFocus} from './focus';
// import {unlockFocus} from './focus';

const focusElements = [
	'a[href]',
	'area[href]',
	'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
	'select:not([disabled]):not([aria-hidden])',
	'textarea:not([disabled]):not([aria-hidden])',
	'button:not([disabled]):not([aria-hidden])',
	'iframe',
	'object',
	'embed',
	'[contenteditable]',
	'[tabindex]'
];
const interactiveElements = [];
const blockElements = [];

export function blockFocus(item) {
	let elements = document.querySelectorAll(focusElements.toString());
	if (elements.length > 0) {
		for (let i = 0; i < elements.length; i++) {
			let el = elements[i];
			if (!item.contains(el)) {
				if (el.getAttribute('tabindex') !== '-1') {
					el.setAttribute('tabindex', '-1');
					interactiveElements.push(el);
				}
			}
		}
	}

	let children = document.body.children;
	for (let i = 0; i < children.length; i++) {
		let chl = children[i];
		if (!item.contains(chl)) {
			if (chl.getAttribute('aria-hidden') !== 'true') {
				chl.setAttribute('aria-hidden', 'true');
				blockElements.push(chl);
			}
		}
	}
};

export function unlockFocus() {
	if (interactiveElements.length !== 0) {
		let element = interactiveElements.pop();
		element.setAttribute('tabindex', '0');
	}

	if (blockElements.length !== 0) {
		let element = blockElements.pop();
		element.setAttribute('aria-gidden', 'false');
	}
};
