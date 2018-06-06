import EditEventForm from '../forms/EditEventForm';
import { fetchEvent, updateEvent } from '../../actions/events';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  event: state.event,
  loading: state.loading,
});
const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  updateEvent: (id, event) => dispatch(updateEvent(id, event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);
