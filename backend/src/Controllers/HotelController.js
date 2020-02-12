const { Hotel } = require('Models');
const config = require('config');
const addHotel = async (req, res, next) => {
  const {
    hotelName,
    slug,
    type,
    address,
    city,
    pincode,
    state,
    mobile,
    capacity,
    wifi,
    url,
    url1,
    url2,
    url3,
    price,
    star,
    email,
    pancard,
    description
  } = req.body;
  const message = [];
  if (!hotelName) {
    message.push('hotelname is required');
  }
  if (!address) {
    message.push('address is required');
  }
  if (!city) {
    message.push('city is required');
  }
  if (!pincode) {
    message.push('pincode is required');
  }
  if (!mobile) {
    message.push('mobile is required');
  }
  if (!price) {
    message.push('price is required');
  }
  if (!state) {
    message.push('state is required');
  }
  if (!star) {
    message.push('star is required');
  }
  if (!email) {
    message.push('email is required');
  }
  if (!pancard) {
    message.push('pancard is required');
  }
  if (!description) {
    message.push('description is required');
  }
  // if (!image) {
  //   message.push('upload your hotel images');
  // }

  if (
    !email ||
    !hotelName ||
    !address ||
    !city ||
    !pincode ||
    !mobile ||
    !price ||
    !state ||
    !star ||
    !email ||
    !pancard ||
    !description
  ) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }

  const hotelData = {
    hotelName,
    slug,
    type,
    address,
    city,
    pincode,
    state,
    mobile,
    capacity,
    wifi,
    price,
    star,
    email,
    pancard,
    description,
    images: [
      {
        url
      },
      {
        url: url1
      },
      {
        url: url2
      },
      {
        url: url3
      }
    ]
  };

  try {
    const Uhotel = await Hotel.findOne({ email });
    if (Uhotel) {
      hotel = await Hotel.findOneAndUpdate(
        { email },
        { $set: hotelData },
        { new: true }
      );

      return res.status(200).json({
        code: 200,
        data: {
          message: ['Hotel Updated'],
          hotel
        },
        success: true
      });
    } else {
      const pancardUnick = await Hotel.findOne({ pancard });
      if (pancardUnick) {
        return res.status(200).json({
          code: 200,
          data: {
            message: ['pancard must unique']
          },
          success: false
        });
      }
      hotel = await new Hotel(hotelData).save();
      res.status(200);
      res.json({
        code: 200,
        data: {
          message: ['Hotel Added'],
          hotel
        },
        success: true
      });
      return;
    }
  } catch (error) {
    res.json({ msg: 'server error', error });
  }
};

const getHotels = async (req, res, next) => {
  const hotels = await Hotel.find();
  res.json({
    code: 200,
    data: {
      hotels
    },
    success: true
  });
};

const getHotelsById = async (req, res, next) => {
  const { _id } = req.params;
  const hotels = await Hotel.findOne({ _id });
  if (hotels) {
    res.json({
      code: 200,
      data: {
        hotels
      },
      success: true
    });
  } else {
    res.json({
      code: 200,
      data: {
        message: ['No Hotel Found']
      },
      success: false
    });
  }
};

const searchHotel = async (req, res, next) => {
  const { search } = req.params;
  const hotels = await Hotel.find({
    $or: [
      { hotelName: { $regex: search, $options: 'i' } },
      { city: { $regex: search, $options: 'i' } }
    ]
  });
  return res.json({
    code: 200,
    data: {
      hotels
    },
    success: true
  });
};

const deleteHotelsById = async (req, res, next) => {
  const { _id } = req.params;
  await Hotel.findOneAndDelete({ _id });
  res.json({
    code: 200,
    data: {
      message: ['Hotel Removed']
    }
  });
};

module.exports = {
  addHotel,
  getHotels,
  getHotelsById,
  searchHotel,
  deleteHotelsById
};
