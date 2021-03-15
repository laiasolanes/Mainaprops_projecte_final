import { makeStyles } from '@material-ui/core/styles';

const useStylesDetail = makeStyles((theme) => ({
  modalChallenge: {
    position: 'absolute',
    width: '98%',
    backgroundColor: '#ffffff',
    border: '3px solid #ffffff',
    color: '#3D2563',
    borderRadius: '20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 4, 8, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outlineStyle: 'none',
  },

  modalAchieved: {
    position: 'absolute',
    width: '98%',
    backgroundColor: '#3D2563',
    border: '3px solid #ffffff',
    color: '#ffffff',
    borderRadius: '20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 4, 8, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outlineStyle: 'none',
  },

  button_violet: {
    width: '100%',
    backgroundColor: '#3D2563',
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'none',
    margin: '10px 0',
    padding: '10px 0',
    borderRadius: '50px',
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: '#4d2d80',
    },
  },
  button_turquoise: {
    width: '100%',
    backgroundColor: '#6CC3C6',
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'none',
    margin: '10px 0',
    padding: '10px 0',
    borderRadius: '50px',
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: '#58a2a5',
    },
  },

}));

export default useStylesDetail;
