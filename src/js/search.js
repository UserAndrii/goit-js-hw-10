import { clearMarkup } from './country-markup';

export class Search {
  constructor(element) {
    this.element = element;
    this.input = element.querySelector('.search-input');
    this.cross = element.querySelector('.cross');
    this.opened = false;

    this.bindEventListeners();
  }

  bindEventListeners() {
    this.input.addEventListener('focus', e => {
      if (!this.opened) {
        this.input.blur();
      }
    });

    this.input.addEventListener('blur', e => {
      if (this.opened && this.input.value === '') {
        this.close();
      }
    });

    this.element.addEventListener('click', () => {
      if (!this.opened) {
        this.open();
      }
    });

    this.cross.addEventListener('click', e => {
      if (this.opened) {
        e.stopPropagation();
        clearMarkup()
        this.clearValue();
        this.close();
      }
    });
  }

  open() {
    this.element.classList.add('opened');
    this.opened = true;

    setTimeout(() => {
      this.input.focus();
    }, 900);
  }

  close() {
    this.element.classList.remove('opened');
    this.opened = false;
    this.input.blur();
  }

  clearValue() {
    this.input.value = '';
  }
}
