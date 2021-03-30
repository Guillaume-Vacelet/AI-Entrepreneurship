import { connect } from 'react-redux'

import TodoList from '../../components/TodoList'

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoList)

export default VisibleTodoList