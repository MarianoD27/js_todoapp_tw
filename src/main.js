document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById('input-box')
  const inputBtn = document.getElementById('input-btn')
  const ulCont = document.getElementById('ul-cont')
  const errorBox = document.getElementById('error-box')

  inputBtn.addEventListener("click", () => {
    if (inputBox.value === "") {
      errorBox.innerHTML = "You need to write something first"
    } else {
      var newLi = document.createElement('li')
      var cross = document.createElement('SPAN')
      newLi.innerHTML = inputBox.value
      cross.innerHTML = '\u00d7'
      newLi.appendChild(cross)
      ulCont.appendChild(newLi)
    }
    inputBox.value = ''
    saveList()
    calculate()
  })
  ulCont.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle('checked')
      saveList()
      calculate()
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove()
      saveList()
      calculate()
    }
  })
  function saveList() {
    localStorage.setItem('todo1list', ulCont.innerHTML)
  }
  function loadList() {
    ulCont.innerHTML = localStorage.getItem('todo1list')
  }
  loadList()
  calculate()



  function calculate() {
    const totalLi = document.querySelectorAll(".cssList ul li").length
    document.getElementById('total-li').innerHTML = totalLi

    const totalChecked = document.querySelectorAll('.cssList ul li.checked').length
    document.getElementById('total-checked').innerHTML = totalChecked

    const compPer = totalChecked * 100 / totalLi
    if (compPer >= 0)
      document.getElementById('comp-per').innerHTML = compPer.toFixed(0) + '%';
  }


})