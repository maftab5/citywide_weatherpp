/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
/**
 *Component to get the user's input
 *for two cities.
 *@param {value} value is the object containing
 *locationOne and locationTwo values
 *@param {change} is the function to capture
 *the change in input values
 *@param {submit} is the function to trigger
 *the submit
 */
import PropTypes from 'prop-types';

const SearchLocation = ({ value, change, submit }) => (
  <>
    <div className="flex-input">

      <input
        type="text"
        name="locationOne"
        placeholder="Enter the location One"
        className="form-control"
        value={value.locationOne}
        onChange={change}
      />

      <input
        type="text"
        name="locationTwo"
        placeholder="Enter the location Two"
        className="form-control"
        value={value.locationTwo}
        onChange={change}
      />
      <input
        type="button"
        onClick={submit}
        className="btn btn-primary"
        value="Search"
      />
    </div>

  </>
);

/**
 * shape is used foo Object propType
 */
SearchLocation.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default SearchLocation;
