// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Videos from 'src/components/Videos';

// Action Creators
import { videos, videosLoaded } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  videos: state.videos,
  currentSearch: state.currentSearch
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  videosReady: (videoId) => {
    const action = videosLoaded(videoId);
    dispatch(action);
  }
});

// Container
const VideosContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Videos);

// == Export
export default VideosContainer;
