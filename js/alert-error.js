export const AlertError = {
  element: document.querySelector('.alert-error'),
  open() {
    AlertError.element.classList.toggle('open')
  },
  close() {
    AlertError.element.classList.toggle('open')
  }
}
