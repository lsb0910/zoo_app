import logo from './logo.svg';
import './App.css';

function Animal({name, picture, age}){
  return(
    <div>
      <h2>I love {name}</h2>
      <h4>age : {age}</h4>
      <img src={picture} alt='{name}'/>
    </div>

  );
}

const Animals =[
  {id : 1,
    name: 'tiger',
    image:'https://img.freepik.com/premium-photo/tiger-lying-down-and-cleaning-its-paw-isolated-on-white_191971-26176.jpg',
    age: 10,
  },
  {id : 2,
    name: 'panda',
    image:'https://media.istockphoto.com/id/1185211680/photo/giant-panda.webp?b=1&s=170667a&w=0&k=20&c=oO696tDO_Al1U6augi46-2WdiqMDQOlbeTE_I4koBeU=',
    age: 8,
  },
  {id : 3,
    name: 'elephant',
    image:'https://cdn.sideview.co.kr/news/photo/202110/8625_6686_4529.jpg',
    age: 7,
  },
  {id : 4,
    name: 'giraffe',
    image:'https://t1.daumcdn.net/cfile/tistory/99ADE7495A3386642E',
    age: 2,
  }

];

function App() {
  return (
   <div>
    
      {Animals.map(zoo =>(<Animal key={zoo.id} name={zoo.name} picture={zoo.image} age={zoo.age} />))}

   </div>
  );
}

export default App;
