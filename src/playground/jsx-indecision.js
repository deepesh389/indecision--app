console.log("App.js is running!");

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life on the Computer',
    options: [],
    // ItemOne: 'geophysics',
    // ItemTwo: 'geology',
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
const reset = () => {
    app.options=[];
    render();
}
const makedecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const user = {
    name: 'Deepesh Kumar',
    age: 21,
    location: 'Bisalpur',
};
// var userName = "Deepu";
// var userAge = 21;
// var userLocation = 'Bisalpur';
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

const numbers =[23, 34, 45];

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={reset}>Remove All</button>
            <button disabled ={app.options.length==0} onClick={makedecision}>What shoul I do</button>
            {
                // numbers.map((number) => {
                //     return <p key={number}>Number: {number}</p>
                // })
                // [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
            }
            <ol>
                {app.options.map((option) =>  {
                    return <li key={option}>{option}</li>
                })}
                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();