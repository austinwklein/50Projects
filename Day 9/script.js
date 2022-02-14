const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    console.log(btn.classList)
    btn.classList.add('btn')

    console.log(btn.classList)

    btn.innerText = sound

    document.getElementById('buttons').appendChild(btn)
})