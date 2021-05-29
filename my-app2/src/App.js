import logo from './logo.svg';
import './App.css';
import Language from './componets/Language';

function App() {
  const languageList = [
    {
      name: 'HTML & CSS',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
    },
    {
      name: 'JavaScript',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
    },
    {
      name: 'React',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
    },
    {
      name: 'Ruby',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
    },
    {
      name: 'Ruby on Rails',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
    },
    {
      name: 'Python',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
    }
  ];

  return (
    <div>
      {languageList.map((languageItem) => {
            return (
              // Languageコンポーネントを呼び出し、その中でpropsを渡してください
              <Language
                name = {languageItem.name}
                image = {languageItem.image}
              />
              
            )
          })}
    </div>
  );
}

export default App;
