const title = document.getElementById('title')
const container = document.getElementById('container')
const desc = document.getElementById('desc')
const btn = document.getElementById('btn')
const fal = document.getElementById('fal')
const tr = document.getElementById('tr')
const img = document.getElementById('img')

tr.addEventListener('click', e =>{
    title.innerHTML = 'Anda Berbohong!'
    desc.innerHTML = 'Anda adalah seorang teknisi'
    container.style.backgroundColor = '#E12E2E'
    btn.style.display = 'none'
    img.src = "konstruktor.png"
}
)

fal.addEventListener('click', e =>{
    title.innerHTML = 'Anda Benar!'
    desc.innerHTML = 'Anda adalah seorang mahasiswa'
    container.style.backgroundColor = '#6FD240'
    btn.style.display = 'none'
    img.src = "mahasiswa.png"
}
)