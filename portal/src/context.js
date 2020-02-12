import React, { Component } from 'react';
import { HotelServices } from 'Services';
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    wifi: false,
    pets: false,
    search: ''
  };

  async componentDidMount() {
    const datano = await HotelServices.getHotels();
    const items = datano.data.hotels;
    let rooms = this.formatData(items);
    //
    let maxPrice = Math.max(...rooms.map(item => item.price));
    this.setState({
      rooms,
      sortedRooms: rooms,
      loading: false,
      //
      price: maxPrice,
      maxPrice
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item._id;
      let images = item.images.map(image => image.url);

      let room = { ...item, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = async event => {
    let { rooms, type, search, capacity, price, wifi } = this.state;

    let tempRooms = [...rooms];
    let response;
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // search by city $ hotelname
    if (search) {
      response = await HotelServices.searchHotel(search);
      if (response.success) {
        tempRooms = response.data.hotels;
      }
    } else {
      response = await HotelServices.getHotels();
      if (response.success) {
        tempRooms = response.data.hotels;
      }
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //filter by breakfast
    if (wifi) {
      tempRooms = tempRooms.filter(room => room.wifi === true);
    }

    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
