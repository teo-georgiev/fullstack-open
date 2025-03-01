const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => (
  <div>
    {parts.map(part =>
      <Part key={part.id} part={part}/>
    )}
  </div>
)

const Part = (props) => (
  <p>
    
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = ({ courses }) => {  
  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total
            total={
              course.parts.reduce((acc, part) =>
                acc + part.exercises, 0)
            }
          />
        </div>
      ))}
    </div>
  )
}

export default Course