import React from 'react';
import Lesson from './Lesson';

class Main extends React.Component{
  render(){
    const lessonList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
      },
      {
        name: 'Sass',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
      },
    ];

    return(
      <div>
        {lessonList.map((lessonItem) => {
          return(
            <Lesson
              name={lessonItem.name}
              image={lessonItem.image}
              introduction={lessonItem.introduction}
            />
          )
        })}
      </div>
    )
  }
}

export default Main;