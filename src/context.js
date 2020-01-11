import React from 'react';
import PropTypes from 'prop-types';
import productsData from './data';

const PlantContext = React.createContext();

class PlantProvider extends React.Component {
  state = {
    plants: [],
    filtredPlants: [],
    type: '',
    searchName: '',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  };

  componentDidMount() {
    const plants = this.dataList(productsData);
    const maxPrice = Math.max(...plants.map(plant => plant.price));
    this.setState({
      plants,
      filtredPlants: plants,
      price: maxPrice,
      maxPrice,
    });
  }

  getPlant = slug => {
    const { plants } = this.state;
    const templatePlants = [...plants];
    const plantSlug = templatePlants.find(plant => plant.slug === slug);
    return plantSlug;
  };

  handleChangeType = e => {
    e.preventDefault();
    const target = e.target;
    const name = target;
    const value = target.value;
    this.setState(
      {
        [name]: value,
      },
      this.handleFilteringPlantsByType,
    );
  };

  handleChangeSearch = e => {
    e.preventDefault();
    const target = e.target;
    const name = target;
    const value = target.value;
    this.setState(
      {
        [name]: value,
      },
      this.handleFilteringPlantsByName,
    );
  };

  handleChangeRange = e => {
    e.preventDefault();
    const target = e.target;
    const name = target;
    const value = target.value;
    this.setState(
      {
        [name]: value,
      },
      this.handleFilteringPlantsByPrice,
    );
  };

  handleFilteringPlantsByType = () => {
    const { plants, type } = this.state;

    let tempPlants = [...plants];

    if (type !== 'all') {
      tempPlants = tempPlants.filter(plant => plant.type === type);
    }
    this.setState({
      filtredPlants: tempPlants,
    });
  };

  handleFilteringPlantsByPrice = () => {
    const { plants } = this.state;
    let { price } = this.state;
    let tempPlants = [...plants];
    price = parseInt(price, 10);
    tempPlants = tempPlants.filter(plant => plant.price <= price);
    this.setState({
      filtredPlants: tempPlants,
    });
  };

  handleFilteringPlantsByName = () => {
    const { plants, searchName } = this.state;

    let tempPlants = [...plants];
    if (searchName !== '') {
      tempPlants = tempPlants.filter(plant => {
        const regex = new RegExp(searchName, 'gi');
        return plant.title.match(regex);
      });
    }
    this.setState({
      filtredPlants: tempPlants,
    });
  };

  dataList = productsDataItems => {
    const template = productsDataItems.map(item => {
      const singlePlant = { ...item };
      return singlePlant;
    });
    return template;
  };

  render() {
    const { children } = this.props;
    return (
      <PlantContext.Provider
        value={{
          ...this.state,
          getPlant: this.getPlant,
          handleChange: this.handleChangeType,
          handleChangeSearch: this.handleChangeSearch,
          handleChangeRange: this.handleChangeRange,
        }}
      >
        {children}
      </PlantContext.Provider>
    );
  }
}

PlantProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
const PlantConsumer = PlantContext.Consumer;

export const withPlantConsumer = Component => {
  return function ConsumerWrapper(props) {
    return <PlantConsumer>{value => <Component {...props} context={value} />}</PlantConsumer>;
  };
};

export { PlantProvider, PlantConsumer, PlantContext };
