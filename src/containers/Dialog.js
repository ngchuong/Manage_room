import { connect } from 'react-redux';
import Dialog from '../components/pages/Dialog/Dialog';

const mapStateToProps = (state) => ({
	message: state.ui.dialog,
})
// const mapDispatchToProps = {
// 	showDialog: renderDialog.showDialog,
// }

const DialogRender = connect(
	mapStateToProps,
	null
)(Dialog)

export default DialogRender;