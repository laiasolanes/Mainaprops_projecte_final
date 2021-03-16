import { makeStyles } from '@material-ui/core/styles';

const useStylesList = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: '98%',
    backgroundColor: '#6CC3C6',
    border: '3px solid #ffffff',
    color: '#ffffff',
    borderRadius: '50px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 4, 8, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outlineStyle: 'none',
  },
  textfield: {
    width: '100%',
  },
  inputMaterial: {
    width: '100%',
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
  button_outlined: {
    width: '100%',
    backgroundColor: '#6CC3C6',
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'none',
    margin: '10px 0',
    padding: '7px 0',
    borderRadius: '50px',
    border: '3px solid #ffffff',
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#6CC3C6',
    },
  },

}));
export default useStylesList;
