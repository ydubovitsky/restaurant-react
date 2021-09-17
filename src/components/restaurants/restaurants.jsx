import { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../navigation';
import Restaurant from './restaurant';
import Loader from '../loader';
import { Route, Switch, Redirect } from 'react-router-dom';


import {
  restaurantListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../../redux/selectors';

import {
  loadRestaurants,
} from '../../redux/actions/action';

import {
  setCurrentRestaurant,
  currentRestaurantIdSelector
} from '../../redux/features/currentRestaurant';

import style from './restaurants.module.css';

function Restaurants(
  {
    allRestaurants,
    currentRestaurantId,
    loadRestaurants,
    setCurrentRestaurant,
    loading,
    loaded,
  }
) {

  useEffect(() => {
    if (!loading && !loaded) {
      loadRestaurants();
    }
  }, [loading, loaded]);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <div className={style.restaurants}>
      <Navigation onRestaurantClick={setCurrentRestaurant} />
      <Switch>
        <Route path={'/restaurants/:restId'}>
          {
            ({ match }) => {
              currentRestaurantId = match.params.restId;
              return <Restaurant id={currentRestaurantId} />
            }
          }
        </Route>
        <Redirect to={`/restaurants/${allRestaurants[0]?.id}`} />
        <Route component={() => <h1>Select Restaurant</h1>} />
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentRestaurantId: currentRestaurantIdSelector(state),
    allRestaurants: restaurantListSelector(state), // Загрузили все для всего приложения рестораны!
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state)
  }
}

export default connect(mapStateToProps, { loadRestaurants, setCurrentRestaurant })(Restaurants);