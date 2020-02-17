const { Hotel } = require('Models');

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
  getHotels,
  getHotelsById,
  searchHotel,
  deleteHotelsById
};
