import { makeStyles } from '@material-ui/core/styles';

const useStylesNewChallenge = makeStyles((theme) => ({
  modalChallenge: {
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

  button_outlined: {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    fontWeight: '600',
    textTransform: 'none',
    margin: '10px 0',
    padding: '10px 0',
    borderRadius: '50px',
    boxShadow: theme.shadows[2],
    '&:hover': {
      color: '#6CC3C6',
      backgroundColor: '#ffffff',
    },
  },

  timeImage: {
    width: '30%',
    display: 'block',
    margin: 'auto',
  },

  text: {
    color: '#b6b4b4',
    margin: '20px 0',
  },

  days: {
    display: 'flex',
    flexDirection: 'column',
  },

  rowRewards: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  rewardButton: {
    margin: '10px',
    width: '143px',
    height: '143px',
    padding: '0 10px 10px 10px',
    opacity: '0.8',
    border: '3px solid rgba(255, 255, 255, 0)',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    flexDirection: 'column',
    textTransform: 'none',
    lineHeight: '1em',
    '&:hover': {
      opacity: '1',
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
    '&:focus': {
      opacity: '1',
      border: '3px solid #ffffff',
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
  },

  imgButton: {
    width: '80%',
  },

  pButton: {
    color: '#ffffff',
    fontWeight: '600',
    fontFamily: 'Itim',
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

  button_day: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: '50%',
    margin: '5px auto',
    borderRadius: '5px',
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
  },

  check: {
    color: '#58a2a5',
    '&$checked': {
      color: '#58a2a5',
    },
  },

}));

export default useStylesNewChallenge;
