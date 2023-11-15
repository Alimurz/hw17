const Jokes = async () => {
    try {
        const resp = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await resp.json();

        const targetId = document.getElementById('id');
        const types = document.getElementById('type');
        const setups = document.getElementById('setup');
        const punchline = document.getElementById('punchline');

        if (targetId) {
            targetId.src = data.id;
            console.log(targetId);
            targetId.textContent = data.id;
            return;
        }else if (types) {
            types.src = data.type;
            types.textContent = data.type;
            return;
        }else if (setups) {
            setups.src = data.setup;s
            setups.textContent = data.setup;
            return;
        }else if (punchline) {
            punchline.src = data.punchline;
            punchline.textContent = data.punchline;
            return;
        } 

        const id = document.createElement('h2');
        const type = document.createElement('span');
        const setup = document.createElement('p');
        const text = document.createElement('span');
       
        text.id = 'punchline';
        id.id = 'id';
        setup.id = 'setup';
        type.id = 'type';

        id.textContent = data.id;
        type.textContent = data.type;
        setup.textContent = data.setup;
        text.textContent = data.punchline;

        const jkDiv = document.querySelector('.JK');
        jkDiv.appendChild(id);
        jkDiv.appendChild(type);
        jkDiv.appendChild(setup);
        jkDiv.appendChild(text);

        console.log(data);
    } catch (e) {
        console.log(e, 'oops something went wrongююю');
    }
}
document.addEventListener("DOMContentLoaded", () => {
    Jokes();
})    