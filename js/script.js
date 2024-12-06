function resetForm(val) {
    val.reset()
}

const phoneNumber = document.getElementById('phone-number')

const phoneNumberResult = document.getElementById('phone-number-result')

phoneNumber.addEventListener('change', () => {
    phoneNumberResult.value = phoneNumber.value
})