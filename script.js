Swal.fire({
  title: "Lucia Chris De Merryn",
  text: "Temptare et crede optimum erit. (Try and believe it will be the best)",
  footer: 'sir jangan kangen kita ya nanti :(',
  imageUrl: "foto merryn.jfif",
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: "Custom image"
});

const showHiddenPassword = (inputId, iconId) => {
  const input = document.getElementById(inputId),
        iconEye = document.getElementById(iconId)

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text'
      iconEye.classList.add('ri-eye-line')
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      input.type = 'password'
      iconEye.classList.remove('ri-eye-line')
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}

showHiddenPassword('password', 'input-icon')