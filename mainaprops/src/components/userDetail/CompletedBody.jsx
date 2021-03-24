import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import useStylesDetail from '../../constants/useStylesDetail';

function CompletedBody({ user }) {
  const styles = useStylesDetail();

  const [challengesCompleted, setChallengesCompleted] = useState([]);

  useEffect(() => {
    setChallengesCompleted(user?.challenges?.filter(
      (challenge) => challenge.completed === true,
    ));
  }, []);

  return (
    <div className={styles.modalChallenge}>
      <img src={user?.image} alt="Avatar" className="reward__image" />

      <h3 className="title__completed">
        {`Has completat ${challengesCompleted?.length} reptes ${user?.name}`}
      </h3>

      {
             challengesCompleted?.map((challenge) => (
               <div className=" flex task__completed" key={challenge._id}>
                 <div className="image__completed">
                   <img src={challenge?.reward?.image} alt="Tasca completa" />
                 </div>

                 <div>
                   <h4 key={challenge?.reward?.name}>
                     {challenge?.reward?.name}
                   </h4>
                   <p>{challenge?.end_date}</p>
                 </div>
               </div>
             ))
          }
    </div>
  );
}

CompletedBody.propTypes = {
  user: PropTypes.shape(
    {
      challenges: PropTypes.arrayOf(PropTypes.shape({})),
      name: PropTypes.string,
      image: PropTypes.string,
      _id: PropTypes.string,
    },
  ).isRequired,
};

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(CompletedBody);
