exports.processData = (req, res) => {
  try {
    const { data } = req.body;

    // Validate input
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Input must be an array of strings.",
      });
    }

    const full_name = "Anshika_Chugh"; 
    const dob = "10072004"; 
    const user_id = `${full_name.toLowerCase()}_${dob}`;

    const response = {
      is_success: true,
      user_id: user_id,
      email: "anshika@gmail.com",
      roll_number: "123abc",
      even_numbers: [],
      odd_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: "",
    };

    let sum = 0;
    let letters = [];

    data.forEach(item => {
      if (!isNaN(item)) {
        const num = parseInt(item);
        sum += num;
        if (num % 2 === 0) {
          response.even_numbers.push(item);
        } else {
          response.odd_numbers.push(item);
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        response.alphabets.push(item.toUpperCase());
        letters.push(...item);
      } else {
        response.special_characters.push(item);
      }
    });

    response.sum = sum.toString();

    const reversed = letters.reverse().join('');
    response.concat_string = reversed
      .split('')
      .map((char, i) =>
        i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join('');

    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      is_success: false,
      message: "Server error. Please try again.",
    });
  }
};
