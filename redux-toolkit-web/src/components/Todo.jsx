
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from '../slices/todoslice'

export default function Todo() {
  const dispatch = useDispatch();
  const { todos, message } = useSelector((state) => state.todos);

  return (
    <div>
      <div>
        {todos.map((t, index) => (
          <p key={index}>{t}</p>
        ))}
      </div>
      <div>
        {message}
        <button onClick={() => dispatch(addtodo("task - 1"))}>
          add
        </button>
      </div>
    </div>
  )
}
