const maintasks = document.getElementById('maintasks');

const tasks = [
    {
        id: Date.now(),
        name: 'Comprar el pan',
        completed: false
    }
];


const printTaks = () =>{
    tasks.forEach((task)=>{
        const fragment = document.createDocumentFragment();
        const taskBox = document.createElement('div');
        taskBox.classList.add('flex','task');
        
    })
}